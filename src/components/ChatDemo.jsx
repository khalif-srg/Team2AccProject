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
    <div className="flex items-center gap-1 px-4 py-3">
      <span className="w-2 h-2 rounded-full bg-wedding-salmon/60 animate-[bounce_1s_ease-in-out_0s_infinite]" />
      <span className="w-2 h-2 rounded-full bg-wedding-salmon/60 animate-[bounce_1s_ease-in-out_0.15s_infinite]" />
      <span className="w-2 h-2 rounded-full bg-wedding-salmon/60 animate-[bounce_1s_ease-in-out_0.3s_infinite]" />
    </div>
  );
}

function ChatBubble({ message, isTyping, displayedText }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line ${
          isUser
            ? 'bg-gradient-to-r from-wedding-coral to-wedding-salmon text-white rounded-br-md'
            : 'bg-white text-gray-700 shadow-sm border border-wedding-blush/30 rounded-bl-md'
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
    <div className="w-full max-w-lg mx-auto">
      {/* Phone frame */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-wedding-blush/40">
        {/* Chat header */}
        <div className="bg-gradient-to-r from-wedding-coral via-wedding-rose to-wedding-salmon px-5 py-3.5 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 88 C50 88, 12 62, 12 38 C12 22, 24 12, 36 12 C44 12, 48 16, 50 22 C52 16, 56 12, 64 12 C76 12, 88 22, 88 38 C88 62, 50 88, 50 88Z"
                fill="white"
                opacity="0.9"
              />
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">AI Wedding Planner</div>
            <div className="text-white/70 text-xs">Online now</div>
          </div>
          <div className="ml-auto flex items-center gap-0.5">
            <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
          </div>
        </div>

        {/* Chat body */}
        <div
          ref={chatBodyRef}
          className="h-80 overflow-y-auto px-4 py-4 flex flex-col gap-3 bg-gradient-to-b from-wedding-blush/10 to-white"
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
        <div className="px-4 py-3 border-t border-wedding-blush/20 flex items-center gap-2 bg-white">
          <div className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm text-gray-400">
            Ask about your wedding...
          </div>
          <button
            className="w-9 h-9 rounded-full bg-gradient-to-r from-wedding-coral to-wedding-salmon flex items-center justify-center shrink-0"
            tabIndex={-1}
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
