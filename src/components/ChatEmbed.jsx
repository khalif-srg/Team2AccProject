import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
import './chat_embed_style.css';
import { chatConfig } from '../config/chatConfig';

const ChatEmbed = forwardRef(({ embedUrl }, ref) => {
  const chatContainerRef = useRef(null);
  const chatInstanceRef = useRef(null);

  // Expose sendMessage method to parent component
  useImperativeHandle(ref, () => ({
    sendMessage: (message) => {
      if (chatInstanceRef.current && message) {
        // Try to send message through the chat instance
        try {
          // Access the chat input and simulate user input
          const chatInput = document.querySelector('#n8n-chat-container textarea, #n8n-chat-container input[type="text"]');
          const sendButton = document.querySelector('#n8n-chat-container button[type="submit"]');
          
          if (chatInput && sendButton) {
            // Set the input value
            chatInput.value = message;
            
            // Trigger input event
            const inputEvent = new Event('input', { bubbles: true });
            chatInput.dispatchEvent(inputEvent);
            
            // Small delay to ensure the input is processed
            setTimeout(() => {
              sendButton.click();
            }, 100);
          }
        } catch (error) {
          console.error('Failed to send message:', error);
        }
      }
    }
  }));

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
        target: '#n8n-chat-container',
        webhookUrl: embedUrl,
        showWelcomeScreen: false,
        loadPreviousSession: false,
        webhookConfig: {
          headers: {
            'X-Instance-Id': 'b74772ad7548c91e3b42b170165adb520c6cffcf356559953ecf81d907d4b27e',
          }
        },
        // Enable file uploads with configuration
        allowFileUploads: chatConfig.fileUpload.enabled,
        allowedFilesMimeTypes: chatConfig.fileUpload.allowedTypes.join(','),
        maxFileSize: chatConfig.fileUpload.maxSizeMB,
        i18n: {
          en: {
            subtitle: "",
            title: "",
            // Customize file upload messages
            fileUpload: {
              selectFile: "Upload image",
              fileSizeExceeded: `File size exceeds ${chatConfig.fileUpload.maxSizeMB}MB limit`,
              fileTypeNotAllowed: "Only image files are allowed"
            }
          },
        },
        initialMessages: [
          "Hi there, I'll be your personal wedding advisor. I'll just need some information before we get started. I specialize in both finding venues and catering for you. Please enter the following details so I can find the best results for you.\n\n1. Date of event\n2. Budget (Total)\n3. Number of guests\n4. Images as inspiration (optional)\n5. Location: (eg. City (Indoor/Outdoor))\n6. Venue type (Church, Park, etc.)"
        ],
        enableStreaming: false,
      });
    } catch (error) {
      console.error('Failed to initialize chat:', error);
    }

    // Cleanup function
    return () => {
      if (chatInstanceRef.current) {
        chatInstanceRef.current = null;
      }
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
});

ChatEmbed.displayName = 'ChatEmbed';

export default ChatEmbed;
