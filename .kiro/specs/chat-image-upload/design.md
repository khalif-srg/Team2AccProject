# Design Document: Chat Image Upload

## Overview

This design integrates image upload functionality into the existing n8n chat interface by leveraging the n8n chat library's built-in file upload capabilities. The implementation will enable the `allowFileUploads` configuration option and configure the appropriate MIME types, allowing users to select, preview, and send images directly within the chat conversation.

The design focuses on minimal code changes by utilizing the n8n chat library's native features rather than building custom upload UI. The existing standalone ImageUpload component will remain separate for other use cases.

## Architecture

### Component Structure

```
ChatEmbed (Modified)
├── n8n chat instance (configured with file uploads enabled)
├── File upload configuration
│   ├── allowFileUploads: true
│   ├── allowedFilesMimeTypes: image types
│   └── maxFileSize: 10MB
└── Webhook configuration (existing)
    ├── webhookUrl
    └── webhookConfig headers
```

### Data Flow

1. **Image Selection**: User clicks upload button → n8n chat opens file picker → User selects image
2. **Validation**: n8n chat validates file type and size → Shows preview if valid → Shows error if invalid
3. **Upload**: User clicks send → n8n chat creates FormData → Sends to webhook with headers
4. **Display**: Webhook responds → n8n chat displays image in conversation → Image persists in chat history

### Integration Points

- **ChatEmbed.jsx**: Modify createChat configuration to enable file uploads
- **chatConfig.js**: Add file upload configuration options
- **n8n webhook**: Receives multipart/form-data with image files
- **n8n chat library**: Handles UI, validation, and upload mechanics

## Components and Interfaces

### Modified: ChatEmbed Component

```javascript
// ChatEmbed.jsx modifications
const chatConfig = {
  mode: 'fullscreen',
  target: '#n8n-chat-container',
  webhookUrl: embedUrl,
  showWelcomeScreen: false,
  loadPreviousSession: false,
  webhookConfig: {
    headers: {
      'X-Instance-Id': instanceId,
    }
  },
  // NEW: Enable file uploads
  allowFileUploads: true,
  allowedFilesMimeTypes: 'image/png,image/jpeg,image/jpg,image/gif,image/webp',
  maxFileSize: 10, // 10MB in megabytes
  i18n: {
    en: {
      subtitle: "",
      title: "",
      // NEW: Customize upload messages
      fileUpload: {
        selectFile: "Upload image",
        fileSizeExceeded: "File size exceeds 10MB limit",
        fileTypeNotAllowed: "Only image files are allowed"
      }
    },
  },
  initialMessages: [...],
  enableStreaming: false,
};
```

### Modified: Chat Configuration

```javascript
// chatConfig.js
export const chatConfig = {
  embedUrl: "https://roomann.app.n8n.cloud/webhook/...",
  instanceId: "b74772ad7548c91e3b42b170165adb520c6cffcf356559953ecf81d907d4b27e",
  
  // NEW: File upload settings
  fileUpload: {
    enabled: true,
    allowedTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp'],
    maxSizeMB: 10
  }
};
```

### n8n Chat Library Interface

The n8n chat library provides these capabilities out of the box:

```typescript
interface ChatConfig {
  allowFileUploads: boolean;
  allowedFilesMimeTypes: string; // comma-separated MIME types
  maxFileSize?: number; // in MB
  i18n?: {
    [locale: string]: {
      fileUpload?: {
        selectFile?: string;
        fileSizeExceeded?: string;
        fileTypeNotAllowed?: string;
      }
    }
  }
}
```

When enabled, the n8n chat library automatically:
- Renders an upload button in the chat input area
- Handles file selection via native file picker
- Validates file type and size
- Shows image preview before sending
- Uploads files as multipart/form-data to the webhook
- Displays uploaded images in the conversation
- Persists images in chat history

## Data Models

### File Upload Request

```javascript
// Sent to webhook as multipart/form-data
{
  // Form fields
  message: string,           // Optional text message
  sessionId: string,         // Chat session identifier
  
  // File field
  file: File {
    name: string,            // e.g., "wedding-venue.jpg"
    type: string,            // e.g., "image/jpeg"
    size: number,            // in bytes
    lastModified: number,    // timestamp
    // Binary data
  }
}
```

### File Upload Response

```javascript
// Expected response from webhook
{
  success: boolean,
  message?: string,          // Response text to display
  imageUrl?: string,         // URL of uploaded image (if stored)
  error?: string            // Error message if failed
}
```

### Chat Message with Image

```javascript
// Internal n8n chat message structure
{
  id: string,
  type: 'user' | 'assistant',
  text: string,
  createdAt: string,
  files?: [{
    name: string,
    type: string,
    size: number,
    url: string,            // Data URL or remote URL
    mimeType: string
  }]
}
```

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: File Type Validation
*For any* file selected by the user, the Chat_Interface should accept the file if and only if its MIME type is in the configured allowedFilesMimeTypes list.

**Validates: Requirements 1.2, 8.4, 8.5**

### Property 2: Single Image Selection
*For any* sequence of image selections, only the most recently selected image should be retained in the upload state.

**Validates: Requirements 1.5**

### Property 3: Valid File Storage
*For any* valid image file (correct type and size), after selection, the file should be retrievable from the component state.

**Validates: Requirements 1.4**

### Property 4: Image Preview Display
*For any* valid image file selected, the preview should display the image along with its filename and file size.

**Validates: Requirements 2.1, 2.2**

### Property 5: Remove Button Presence
*For any* state where an image preview is displayed, a remove/cancel button should be present in the UI.

**Validates: Requirements 2.3**

### Property 6: Selection and Removal Round Trip
*For any* initial state, selecting an image and then clicking remove should return the component to its initial state with no image selected.

**Validates: Requirements 2.4**

### Property 7: Preview Aspect Ratio Preservation
*For any* image with dimensions W×H, the preview should maintain the aspect ratio W:H regardless of the container size.

**Validates: Requirements 2.5**

### Property 8: Upload Request Triggered
*For any* valid selected image, clicking the send button should trigger an HTTP request to the configured webhook URL.

**Validates: Requirements 3.1**

### Property 9: Loading State During Upload
*For any* upload operation in progress, the Chat_Interface should display a loading indicator or progress state.

**Validates: Requirements 3.2, 6.3**

### Property 10: Successful Upload Display
*For any* image upload that receives a success response, the image should appear in the chat conversation history.

**Validates: Requirements 3.3**

### Property 11: Optional Text with Image
*For any* valid image and any text string (including empty string), the Chat_Interface should allow sending them together as a single message.

**Validates: Requirements 3.5**

### Property 12: Image Inline Display
*For any* sent image message, the image should appear inline within the message bubble in the conversation.

**Validates: Requirements 4.1**

### Property 13: Clickable Thumbnail
*For any* image displayed in the conversation, clicking the image should trigger a full-size view (modal or expanded).

**Validates: Requirements 4.2, 4.3**

### Property 14: Chronological Message Order
*For any* sequence of messages (text and images) sent at times t1, t2, ..., tn where t1 < t2 < ... < tn, the messages should appear in the conversation in that same order.

**Validates: Requirements 4.4**

### Property 15: Chat History Persistence
*For any* chat session containing image messages, reloading the session should restore and display all previously sent images.

**Validates: Requirements 4.5**

### Property 16: Upload Request Format
*For any* image upload, the HTTP request should use FormData encoding and include the image file in the request body.

**Validates: Requirements 5.1**

### Property 17: Upload Metadata Inclusion
*For any* image upload request, the request should include metadata fields for filename, file type, and file size.

**Validates: Requirements 5.2**

### Property 18: Webhook Response Handling
*For any* webhook response (success or error), the Chat_Interface should update the UI state appropriately (show success message or error message).

**Validates: Requirements 5.3**

### Property 19: Custom Headers Preservation
*For any* upload request, the configured custom headers (including X-Instance-Id) should be included in the HTTP request.

**Validates: Requirements 5.4**

### Property 20: Configuration-Based Feature Toggle
*For any* configuration where allowFileUploads is false, the image upload button should not be visible in the UI; when true, the button should be visible and functional.

**Validates: Requirements 5.5, 8.1, 8.2, 8.3**

### Property 21: Validation Error Messages
*For any* file that fails validation (wrong type or too large), the Chat_Interface should display a specific error message explaining why the file was rejected.

**Validates: Requirements 6.1**

### Property 22: Upload Cancellation Cleanup
*For any* upload operation, if cancelled by the user, the component state should reset to the pre-upload state with no residual data.

**Validates: Requirements 6.4**

### Property 23: Error Logging
*For any* upload error (validation, network, or server error), the error should be logged to the browser console.

**Validates: Requirements 6.5**

### Property 24: Keyboard Accessibility
*For any* state where the upload button is visible, the button should be focusable and operable using keyboard navigation (Tab and Enter keys).

**Validates: Requirements 7.5**

## Error Handling

### File Validation Errors

**Invalid File Type**:
- Detection: Check file.type against allowedFilesMimeTypes
- Response: Display error message "Only image files (PNG, JPG, GIF, WEBP) are allowed"
- Recovery: Clear selection, allow user to select a different file

**File Size Exceeded**:
- Detection: Check file.size > maxFileSize * 1024 * 1024
- Response: Display error message "File size exceeds 10MB limit"
- Recovery: Clear selection, allow user to select a smaller file

### Upload Errors

**Network Failure**:
- Detection: Catch network errors in fetch/upload request
- Response: Display error message "Network error. Please check your connection and try again."
- Recovery: Provide retry button, maintain selected image for retry

**Server Error (4xx/5xx)**:
- Detection: Check response.ok === false
- Response: Display error message from server or generic "Upload failed. Please try again."
- Recovery: Provide retry button, log error details to console

**Timeout**:
- Detection: Upload takes longer than reasonable threshold (e.g., 30 seconds)
- Response: Display warning "Upload is taking longer than expected..."
- Recovery: Continue waiting, provide cancel option

### State Management Errors

**Invalid State Transition**:
- Detection: Attempting to upload when no file is selected
- Response: Disable send button when no file is selected
- Prevention: UI validation prevents invalid actions

**Memory Cleanup**:
- Detection: Component unmount or file deselection
- Response: Revoke object URLs created for previews
- Prevention: Use useEffect cleanup functions

## Testing Strategy

### Dual Testing Approach

This feature requires both unit tests and property-based tests to ensure comprehensive coverage:

**Unit Tests** focus on:
- Specific examples of valid and invalid files
- UI component rendering in different states
- Integration between ChatEmbed and n8n chat library
- Edge cases like empty files, boundary file sizes (exactly 10MB)
- Error scenarios with mocked network failures

**Property-Based Tests** focus on:
- File validation across randomly generated file types and sizes
- State transitions with random sequences of user actions
- Upload request format with various image files
- Message ordering with random message sequences
- Configuration behavior with random config values

### Property-Based Testing Configuration

**Library**: Use `fast-check` for JavaScript/React property-based testing

**Test Configuration**:
- Minimum 100 iterations per property test
- Each test must reference its design document property
- Tag format: `// Feature: chat-image-upload, Property N: [property text]`

**Example Property Test Structure**:
```javascript
import fc from 'fast-check';

// Feature: chat-image-upload, Property 1: File Type Validation
test('accepts only files with allowed MIME types', () => {
  fc.assert(
    fc.property(
      fc.record({
        name: fc.string(),
        type: fc.oneof(
          fc.constant('image/png'),
          fc.constant('image/jpeg'),
          fc.constant('image/gif'),
          fc.constant('application/pdf'), // invalid
          fc.constant('text/plain'), // invalid
        ),
        size: fc.integer({ min: 1, max: 15 * 1024 * 1024 }),
      }),
      (file) => {
        const allowedTypes = ['image/png', 'image/jpeg', 'image/gif', 'image/webp'];
        const isValid = validateFileType(file, allowedTypes);
        const shouldBeValid = allowedTypes.includes(file.type);
        expect(isValid).toBe(shouldBeValid);
      }
    ),
    { numRuns: 100 }
  );
});
```

### Unit Test Coverage

**Component Tests**:
- ChatEmbed renders with file upload enabled/disabled
- Upload button appears when allowFileUploads is true
- File selection opens file picker
- Preview displays after valid file selection
- Remove button clears selection

**Integration Tests**:
- End-to-end flow: select → preview → send → display
- Configuration changes affect behavior
- Webhook receives correct data format
- Error responses update UI appropriately

**Edge Case Tests**:
- File exactly 10MB (boundary)
- Empty file (0 bytes)
- File with no extension
- Multiple rapid selections
- Upload during network disconnection

### Test Data Generators

For property-based tests, create generators for:

```javascript
// Image file generator
const imageFileArb = fc.record({
  name: fc.string({ minLength: 1 }).map(s => `${s}.jpg`),
  type: fc.constantFrom('image/png', 'image/jpeg', 'image/jpg', 'image/gif', 'image/webp'),
  size: fc.integer({ min: 1, max: 10 * 1024 * 1024 }), // up to 10MB
  lastModified: fc.date().map(d => d.getTime()),
});

// Invalid file generator
const invalidFileArb = fc.oneof(
  // Wrong type
  fc.record({
    name: fc.string(),
    type: fc.constantFrom('application/pdf', 'text/plain', 'video/mp4'),
    size: fc.integer({ min: 1, max: 5 * 1024 * 1024 }),
  }),
  // Too large
  fc.record({
    name: fc.string(),
    type: fc.constantFrom('image/png', 'image/jpeg'),
    size: fc.integer({ min: 10 * 1024 * 1024 + 1, max: 50 * 1024 * 1024 }),
  })
);

// Chat message sequence generator
const messageSequenceArb = fc.array(
  fc.record({
    type: fc.constantFrom('text', 'image'),
    content: fc.string(),
    timestamp: fc.integer({ min: 1000000000000, max: 9999999999999 }),
  }),
  { minLength: 1, maxLength: 20 }
);
```

### Testing the n8n Integration

Since the n8n chat library handles most of the UI and upload logic, testing focuses on:

1. **Configuration Testing**: Verify that our configuration options are correctly passed to createChat()
2. **Callback Testing**: Test any custom event handlers or callbacks we provide
3. **Integration Testing**: Use the n8n chat library in a test environment and verify behavior
4. **Mock Testing**: Mock the n8n chat library to test our component in isolation

**Note**: The n8n chat library's internal behavior (file picker, preview UI, upload mechanics) is tested by the library maintainers. Our tests focus on correct configuration and integration.
