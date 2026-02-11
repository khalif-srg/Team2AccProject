import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ChatEmbed from '../components/ChatEmbed';
import { chatConfig } from '../config/chatConfig';

function ChatPage() {
  const { embedUrl } = chatConfig;

  return (
    <div
      className="font-geist"
      style={{ height: '100dvh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
    >
      {/* Header */}
      <header
        style={{ flexShrink: 0 }}
        className="bg-gradient-to-r from-wedding-coral via-wedding-rose to-wedding-salmon px-6 py-3 flex items-center gap-4 shadow-md z-10"
      >
        <Button
          variant="ghost"
          asChild
          className="text-white/90 hover:text-white hover:bg-white/15 rounded-full px-3"
        >
          <Link to="/" aria-label="Back to home">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm font-medium">Back</span>
          </Link>
        </Button>

        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2.5">
            <svg width="28" height="28" viewBox="0 0 100 100" fill="none" aria-hidden="true">
              <path
                d="M50 88 C50 88, 12 62, 12 38 C12 22, 24 12, 36 12 C44 12, 48 16, 50 22 C52 16, 56 12, 64 12 C76 12, 88 22, 88 38 C88 62, 50 88, 50 88Z"
                fill="white" opacity="0.9"
              />
              <circle cx="38" cy="42" r="3" fill="rgba(240,107,92,0.6)" />
              <circle cx="62" cy="42" r="3" fill="rgba(240,107,92,0.6)" />
              <circle cx="50" cy="56" r="3.5" fill="rgba(240,107,92,0.6)" />
              <line x1="38" y1="42" x2="50" y2="56" stroke="rgba(240,107,92,0.5)" strokeWidth="1.5" />
              <line x1="62" y1="42" x2="50" y2="56" stroke="rgba(240,107,92,0.5)" strokeWidth="1.5" />
              <line x1="38" y1="42" x2="62" y2="42" stroke="rgba(240,107,92,0.5)" strokeWidth="1.5" />
            </svg>
            <span className="text-white font-semibold text-lg">AI Wedding Planner</span>
          </div>
        </div>

        <div className="w-[88px]" />
      </header>

      {/* Chat — takes all remaining height */}
      <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
        <ChatEmbed embedUrl={embedUrl} />
      </div>
    </div>
  );
}

export default ChatPage;
