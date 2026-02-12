import { useState, useEffect, useRef } from 'react';

const CONVERSATION = [
  {
    role: 'user',
    text: "Help me plan a beach wedding for 100 guests in June!",
  },
  {
    role: 'bot',
    text: "I'd love to help! Let me put together a plan. For a June beach wedding with 100 guests, I'd recommend starting with these key areas:",
  },
  {
    role: 'bot',
    text: "🏖️ Venue: Sunset Cove Beach — permits available for June\n💐 Florals: Tropical arrangements with coral peonies\n🍽️ Catering: Seafood buffet, ~$85/guest\n🎵 Music: Steel drum duo for ceremony, DJ for reception",
  },
  {
    role: 'user',
    text: "That sounds amazing! What about the budget?",
  },
  {
    role: 'bot',
    text: "Based on your guest count, here's an estimated breakdown:\n\n📊 Total estimate: $28,500\n• Venue & permits: $4,200\n• Catering & bar: $9,800\n• Photography: $3,500\n• Decor & florals: $4,000\n• Entertainment: $2,800\n• Attire & beauty: $2,400\n• Misc & buffer: $1,800\n\nWant me to find vendors in your area?",
  },
];

const TYPING_SPEED = 30;
const PAUSE_BETWEEN_MESSAGES = 800;
const PAUSE_BEFORE_RESTART = 4000;

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3">
      <span className="w-2 h-2 rounded-full bg-rose/70 animate-[bounce_1s_ease-in-out_0s_infinite]" />
      <span className="w-2 h-2 rounded-full bg-purple/70 animate-[bounce_1s_ease-in-out_0.15s_infinite]" />
      <span className="w-2 h-2 rounded-full bg-amber/70 animate-[bounce_1s_ease-in-out_0.3s_infinite]" />
    </div>
  );
}

function ChatBubble({ message, isTyping, displayedText }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-3xl px-5 py-3.5 text-sm leading-relaxed whitespace-pre-line transition-all duration-300 ${
          isUser
            ? 'bg-gradient-to-r from-rose via-purple to-amber text-white shadow-premium rounded-br-lg'
            : 'glass-strong text-foreground shadow-sm border border-rose/10 rounded-bl-lg'
        }`}
      >
        {isTyping ? <TypingIndicator /> : displayedText}
      </div>
    </div>
  );
}

function ChatDemo() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentTypingText, setCurrentTypingText] = useState('');
  const [isShowingTypingIndicator, setIsShowingTypingIndicator] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const chatBodyRef = useRef(null);
  const timeoutRef = useRef(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [visibleMessages, currentTypingText, isShowingTypingIndicator]);

  useEffect(() => {
    if (currentMessageIndex >= CONVERSATION.length) {
      // Pause then restart the loop
      timeoutRef.current = setTimeout(() => {
        setVisibleMessages([]);
        setCurrentTypingText('');
        setIsShowingTypingIndicator(false);
        setCurrentMessageIndex(0);
      }, PAUSE_BEFORE_RESTART);
      return;
    }

    const message = CONVERSATION[currentMessageIndex];

    // Show typing indicator first
    setIsShowingTypingIndicator(true);

    const typingDelay = message.role === 'bot' ? 1200 : 600;

    timeoutRef.current = setTimeout(() => {
      setIsShowingTypingIndicator(false);

      // Type out the message character by character
      let charIndex = 0;
      const text = message.text;

      const typeChar = () => {
        if (charIndex <= text.length) {
          setCurrentTypingText(text.slice(0, charIndex));
          charIndex++;
          timeoutRef.current = setTimeout(typeChar, TYPING_SPEED);
        } else {
          // Message complete — add to visible and move on
          setVisibleMessages((prev) => [...prev, { ...message, displayedText: text }]);
          setCurrentTypingText('');

          timeoutRef.current = setTimeout(() => {
            setCurrentMessageIndex((prev) => prev + 1);
          }, PAUSE_BETWEEN_MESSAGES);
        }
      };

      typeChar();
    }, typingDelay);

    return () => clearTimeout(timeoutRef.current);
  }, [currentMessageIndex]);

  const activeMessage = currentMessageIndex < CONVERSATION.length ? CONVERSATION[currentMessageIndex] : null;

  return (
    <div className="w-full h-full flex items-stretch">
      {/* Premium Phone frame */}
      <div className="glass-strong rounded-[2.5rem] shadow-premium-lg overflow-hidden border-2 border-rose/20 flex flex-col w-full hover:shadow-premium-lg hover:scale-[1.02] transition-all duration-500">
        {/* Chat header */}
        <div className="bg-gradient-to-r from-rose via-purple to-amber px-6 py-5 flex items-center gap-3.5 shrink-0">
          <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
            <svg width="24" height="24" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 75 C50 75, 25 58, 25 42 C25 32, 32 27, 38 27 C43 27, 47 30, 50 35 C53 30, 57 27, 62 27 C68 27, 75 32, 75 42 C75 58, 50 75, 50 75Z"
                fill="white"
                opacity="0.95"
              />
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-white font-bold text-base">Amore</div>
            <div className="text-white/90 text-xs flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald animate-pulse shadow-sm"></span>
              Always here for you
            </div>
          </div>
        </div>

        {/* Chat body */}
        <div
          ref={chatBodyRef}
          className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-4 bg-gradient-to-b from-rose/5 via-purple/5 to-transparent"
        >
          {/* Completed messages */}
          {visibleMessages.map((msg, i) => (
            <ChatBubble key={i} message={msg} displayedText={msg.displayedText} />
          ))}

          {/* Currently active message */}
          {activeMessage && (isShowingTypingIndicator || currentTypingText) && (
            <ChatBubble
              message={activeMessage}
              isTyping={isShowingTypingIndicator}
              displayedText={currentTypingText}
            />
          )}
        </div>

        {/* Chat input bar */}
        <div className="px-5 py-4 border-t border-rose/10 flex items-center gap-3 bg-white/50 backdrop-blur-sm shrink-0">
          <div className="flex-1 bg-white/80 rounded-2xl px-5 py-3 text-sm text-gray-light font-medium border border-rose/10">
            Ask about your wedding...
          </div>
          <button
            className="w-11 h-11 rounded-2xl bg-gradient-to-r from-rose via-purple to-amber flex items-center justify-center shrink-0 shadow-premium hover:shadow-premium-lg hover:scale-110 transition-all duration-300"
            tabIndex={-1}
            aria-hidden="true"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatDemo;
