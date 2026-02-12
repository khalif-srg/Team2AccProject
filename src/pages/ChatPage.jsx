import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
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
      <div style={{ flexShrink: 0 }}>
        <Navigation />
      </div>

      {/* Chat — takes all remaining height */}
      <div style={{ flex: 1, minHeight: 0, position: 'relative' }}>
        <ChatEmbed embedUrl={embedUrl} />
      </div>
    </div>
  );
}

export default ChatPage;
