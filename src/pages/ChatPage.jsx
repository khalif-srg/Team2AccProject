import { Link } from 'react-router-dom';
import ChatEmbed from '../components/ChatEmbed';
import { chatConfig } from '../config/chatConfig';

function ChatPage() {
  const { embedUrl } = chatConfig;

  return (
    <div className="h-screen flex flex-col">
      {/* Optional header with back navigation */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center">
        <Link 
          to="/" 
          className="text-gray-600 hover:text-gray-900 flex items-center gap-2 transition-colors"
          aria-label="Back to home"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </Link>
        <h1 className="ml-4 text-lg font-semibold text-gray-900">
          Wedding Planning Assistant
        </h1>
      </header>

      {/* Chat embed area - takes remaining height */}
      <div className="flex-1 overflow-hidden">
        <ChatEmbed embedUrl={embedUrl} />
      </div>
    </div>
  );
}

export default ChatPage;
