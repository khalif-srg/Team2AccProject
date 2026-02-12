# Requirements Document

## Introduction

This document specifies the requirements for integrating image upload functionality into the existing chat interface. The feature will enable users to upload, preview, and send images as part of their chat conversations within the AI Wedding Planner application. The system currently uses the n8n chat embed component and has a standalone ImageUpload component that needs to be integrated into the chat workflow.

## Glossary

- **Chat_Interface**: The n8n chat embed component that handles user conversations
- **Image_Upload_Component**: The existing React component that handles image file selection and upload
- **Chat_Message**: A unit of communication in the chat that can contain text and/or images
- **Image_Preview**: A visual representation of the selected image before sending
- **Upload_State**: The current status of an image upload operation (idle, uploading, success, error)
- **File_Validation**: The process of checking image file type and size constraints
- **Chat_Container**: The parent component that hosts the chat interface

## Requirements

### Requirement 1: Image Selection in Chat

**User Story:** As a user, I want to select images from my device while chatting, so that I can share visual inspiration with the wedding planner.

#### Acceptance Criteria

1. WHEN a user clicks an image upload button in the chat interface, THE Chat_Interface SHALL display a file selection dialog
2. WHEN a user selects an image file, THE Chat_Interface SHALL validate the file type against allowed formats (PNG, JPG, JPEG, GIF, WEBP)
3. WHEN a user selects a file larger than 10MB, THE Chat_Interface SHALL reject the file and display an error message
4. WHEN a user selects a valid image file, THE Chat_Interface SHALL store the file for preview and sending
5. THE Chat_Interface SHALL support selecting one image at a time per message

### Requirement 2: Image Preview Before Sending

**User Story:** As a user, I want to preview the image I selected before sending it, so that I can confirm it's the correct image.

#### Acceptance Criteria

1. WHEN a user selects a valid image file, THE Chat_Interface SHALL display a preview of the image
2. WHEN displaying the image preview, THE Chat_Interface SHALL show the image filename and file size
3. WHEN an image preview is displayed, THE Chat_Interface SHALL provide a remove/cancel option
4. WHEN a user clicks the remove option, THE Chat_Interface SHALL clear the selected image and hide the preview
5. THE Image_Preview SHALL maintain aspect ratio and fit within the chat input area

### Requirement 3: Sending Images in Chat Messages

**User Story:** As a user, I want to send images as part of my chat messages, so that I can communicate visually with the wedding planner.

#### Acceptance Criteria

1. WHEN a user has selected an image and clicks send, THE Chat_Interface SHALL upload the image to the webhook endpoint
2. WHEN uploading an image, THE Chat_Interface SHALL display upload progress or loading state
3. WHEN an image upload succeeds, THE Chat_Interface SHALL display the image in the chat conversation
4. WHEN an image upload fails, THE Chat_Interface SHALL display an error message and allow retry
5. WHEN sending a message with an image, THE Chat_Interface SHALL support optional text accompanying the image

### Requirement 4: Displaying Images in Chat Conversation

**User Story:** As a user, I want to see uploaded images in the chat conversation history, so that I can reference previously shared images.

#### Acceptance Criteria

1. WHEN an image message is sent, THE Chat_Interface SHALL display the image inline within the message bubble
2. WHEN displaying an image in the conversation, THE Chat_Interface SHALL show a thumbnail that can be clicked to view full size
3. WHEN a user clicks an image thumbnail, THE Chat_Interface SHALL display the full-size image in a modal or expanded view
4. WHEN displaying images in the conversation, THE Chat_Interface SHALL maintain chronological order with text messages
5. THE Chat_Interface SHALL load and display images from previous sessions when chat history is restored

### Requirement 5: File Upload Integration with n8n Webhook

**User Story:** As a developer, I want images to be properly formatted and sent to the n8n webhook, so that the backend can process them correctly.

#### Acceptance Criteria

1. WHEN uploading an image, THE Chat_Interface SHALL encode the image as FormData or base64 as required by the n8n webhook
2. WHEN sending image data to the webhook, THE Chat_Interface SHALL include necessary metadata (filename, file type, file size)
3. WHEN the webhook returns a response, THE Chat_Interface SHALL handle both success and error responses appropriately
4. THE Chat_Interface SHALL maintain the existing webhook configuration including custom headers
5. WHEN file uploads are enabled, THE Chat_Interface SHALL respect the allowFileUploads configuration setting

### Requirement 6: Error Handling and User Feedback

**User Story:** As a user, I want clear feedback when something goes wrong with image upload, so that I understand what happened and how to fix it.

#### Acceptance Criteria

1. WHEN a file validation fails, THE Chat_Interface SHALL display a specific error message explaining the issue
2. WHEN a network error occurs during upload, THE Chat_Interface SHALL display a retry option
3. WHEN the upload takes longer than expected, THE Chat_Interface SHALL show a loading indicator
4. WHEN an upload is cancelled by the user, THE Chat_Interface SHALL clean up resources and reset the upload state
5. THE Chat_Interface SHALL log upload errors to the console for debugging purposes

### Requirement 7: UI Integration with Existing Chat

**User Story:** As a user, I want the image upload feature to feel natural within the chat interface, so that it's easy to use without disrupting my conversation flow.

#### Acceptance Criteria

1. THE Chat_Interface SHALL display an image upload button near the message input field
2. WHEN an image is being previewed, THE Chat_Interface SHALL expand the input area to accommodate the preview
3. WHEN no image is selected, THE Chat_Interface SHALL maintain the standard chat input layout
4. THE Chat_Interface SHALL use consistent styling with the existing chat theme
5. THE Chat_Interface SHALL ensure the image upload button is accessible via keyboard navigation

### Requirement 8: Configuration and Feature Toggle

**User Story:** As a developer, I want to control whether image uploads are enabled, so that I can toggle the feature based on deployment environment or user permissions.

#### Acceptance Criteria

1. THE Chat_Interface SHALL read the allowFileUploads configuration setting from chatConfig
2. WHEN allowFileUploads is false, THE Chat_Interface SHALL hide the image upload button
3. WHEN allowFileUploads is true, THE Chat_Interface SHALL enable all image upload functionality
4. THE Chat_Interface SHALL support configuring allowed file types via allowedFilesMimeTypes setting
5. WHEN allowedFilesMimeTypes is specified, THE Chat_Interface SHALL validate files against the configured types
