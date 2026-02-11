import { useEffect, useRef } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

function ChatEmbed({ embedUrl }) {
  const chatContainerRef = useRef(null);
  const chatInstanceRef = useRef(null);

  // Validate embedUrl
  const isValidUrl = embedUrl && typeof embedUrl === 'string' && embedUrl.trim().length > 0;

  useEffect(() => {
    if (!isValidUrl || !chatContainerRef.current) return;

    // Prevent multiple initializations
    if (chatInstanceRef.current) return;

    try {
      // Initialize with n8n workflow configuration
      chatInstanceRef.current = createChat({
        mode: 'fullscreen',
        webhookUrl: embedUrl,
        showWelcomeScreen: false,
        loadPreviousSession: false,
        webhookConfig: {
          headers: {
            'X-Instance-Id': 'b74772ad7548c91e3b42b170165adb520c6cffcf356559953ecf81d907d4b27e',
          }
        },
        allowFileUploads: false,
        allowedFilesMimeTypes: "",
        i18n: {
          en: {
            subtitle: "",
            title: ""
          },
        },
        initialMessages: [
          "Hi there! 👋",
          "My name is Nathan. How can I assist you today?"
        ],
        enableStreaming: true,
      });
    } catch (error) {
      console.error('Failed to initialize chat:', error);
    }

    // Cleanup function - properly destroy the chat widget
    return () => {
      // Remove all n8n chat elements from the DOM
      const chatElements = document.querySelectorAll('[id^="n8n-chat"]');
      chatElements.forEach(el => el.remove());
      
      // Clear the container
      if (chatContainerRef.current) {
        chatContainerRef.current.innerHTML = '';
      }
      
      chatInstanceRef.current = null;
    };
  }, [embedUrl, isValidUrl]);

  if (!isValidUrl) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-gray-100">
        <div className="text-center p-6">
          <p className="text-red-600 text-lg font-semibold mb-2">
            Unable to load chat interface
          </p>
          <p className="text-gray-600">
            Please check the configuration.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      id="n8n-chat-container" 
      ref={chatContainerRef}
      className="w-full h-full"
    />
  );
}

export default ChatEmbed;
