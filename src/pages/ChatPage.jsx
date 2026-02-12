import Navigation from '@/components/Navigation';
import ChatEmbed from '../components/ChatEmbed';
import { chatConfig } from '../config/chatConfig';

function ChatPage() {
  const { embedUrl } = chatConfig;

  return (
    <div
      className="font-geist bg-premium-gradient"
      style={{ height: '100dvh', display: 'flex', flexDirection: 'column' }}
    >
      {/* Header */}
      <div style={{ flexShrink: 0 }}>
        <Navigation />
      </div>

      {/* Chat Container */}
      <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
        <ChatEmbed embedUrl={embedUrl} />
      </div>
    </div>
  );
}

export default ChatPage;
