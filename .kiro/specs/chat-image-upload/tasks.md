# Implementation Plan: Chat Image Upload

## Overview

This implementation plan integrates image upload functionality into the existing n8n chat interface by enabling the built-in file upload capabilities of the n8n chat library. The approach minimizes custom code by leveraging the library's native features for file selection, validation, preview, and upload.

## Tasks

- [x] 1. Update chat configuration to enable file uploads
  - Modify `src/config/chatConfig.js` to add file upload settings
  - Add `fileUpload` configuration object with enabled flag, allowed types, and max size
  - Export configuration values for use in ChatEmbed component
  - _Requirements: 8.1, 8.4_

- [ ] 2. Modify ChatEmbed component to enable file uploads
  - [x] 2.1 Update createChat configuration with file upload options
    - Set `allowFileUploads: true` in the chat configuration
    - Configure `allowedFilesMimeTypes` with image MIME types from config
    - Set `maxFileSize` to 10MB
    - Add i18n customization for file upload messages
    - _Requirements: 1.1, 1.2, 1.3, 5.5, 8.2, 8.3_
  
  - [ ]* 2.2 Write property test for file type validation
    - **Property 1: File Type Validation**
    - **Validates: Requirements 1.2, 8.4, 8.5**
  
  - [ ]* 2.3 Write property test for configuration-based feature toggle
    - **Property 20: Configuration-Based Feature Toggle**
    - **Validates: Requirements 5.5, 8.1, 8.2, 8.3**

- [ ] 3. Implement file validation logic
  - [ ] 3.1 Create utility functions for file validation
    - Write `validateFileType(file, allowedTypes)` function
    - Write `validateFileSize(file, maxSizeMB)` function
    - Write `validateFile(file, config)` wrapper function
    - _Requirements: 1.2, 1.3, 8.5_
  
  - [ ]* 3.2 Write property tests for file validation
    - **Property 1: File Type Validation**
    - **Property 3: Valid File Storage**
    - **Validates: Requirements 1.2, 1.3, 1.4, 8.5**
  
  - [ ]* 3.3 Write unit tests for edge cases
    - Test file exactly 10MB (boundary)
    - Test empty file (0 bytes)
    - Test file with no extension
    - _Requirements: 1.3_

- [ ] 4. Configure webhook integration for image uploads
  - [ ] 4.1 Verify webhook configuration includes custom headers
    - Ensure `webhookConfig.headers` includes X-Instance-Id
    - Verify headers are sent with file upload requests
    - _Requirements: 5.4_
  
  - [ ]* 4.2 Write property test for custom headers preservation
    - **Property 19: Custom Headers Preservation**
    - **Validates: Requirements 5.4**
  
  - [ ]* 4.3 Write property test for upload request format
    - **Property 16: Upload Request Format**
    - **Property 17: Upload Metadata Inclusion**
    - **Validates: Requirements 5.1, 5.2**

- [ ] 5. Checkpoint - Ensure basic file upload works
  - Test file selection opens file picker
  - Test valid image files can be selected
  - Test invalid files are rejected with error messages
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. Implement error handling and user feedback
  - [ ] 6.1 Add error message customization in i18n config
    - Customize `fileSizeExceeded` message
    - Customize `fileTypeNotAllowed` message
    - Add custom error messages for network failures
    - _Requirements: 6.1_
  
  - [ ]* 6.2 Write property test for validation error messages
    - **Property 21: Validation Error Messages**
    - **Validates: Requirements 6.1**
  
  - [ ]* 6.3 Write unit tests for error scenarios
    - Test network failure during upload
    - Test server error response (4xx/5xx)
    - Test timeout scenario
    - _Requirements: 3.4, 6.2_

- [ ] 7. Add console logging for debugging
  - [ ] 7.1 Implement error logging utility
    - Create `logUploadError(error, context)` function
    - Log validation errors with file details
    - Log network errors with request details
    - Log server errors with response details
    - _Requirements: 6.5_
  
  - [ ]* 7.2 Write property test for error logging
    - **Property 23: Error Logging**
    - **Validates: Requirements 6.5**

- [ ] 8. Test image preview and display functionality
  - [ ]* 8.1 Write property tests for preview behavior
    - **Property 4: Image Preview Display**
    - **Property 5: Remove Button Presence**
    - **Property 6: Selection and Removal Round Trip**
    - **Property 7: Preview Aspect Ratio Preservation**
    - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5**
  
  - [ ]* 8.2 Write unit tests for preview UI
    - Test preview displays after file selection
    - Test remove button clears preview
    - Test preview shows filename and size
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

- [ ] 9. Test upload and message display functionality
  - [ ]* 9.1 Write property tests for upload behavior
    - **Property 8: Upload Request Triggered**
    - **Property 9: Loading State During Upload**
    - **Property 10: Successful Upload Display**
    - **Property 11: Optional Text with Image**
    - **Validates: Requirements 3.1, 3.2, 3.3, 3.5**
  
  - [ ]* 9.2 Write property tests for message display
    - **Property 12: Image Inline Display**
    - **Property 13: Clickable Thumbnail**
    - **Property 14: Chronological Message Order**
    - **Property 15: Chat History Persistence**
    - **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5**
  
  - [ ]* 9.3 Write integration tests for end-to-end flow
    - Test complete flow: select → preview → send → display
    - Test image with text message
    - Test image without text message
    - Test multiple images sent in sequence
    - _Requirements: 3.1, 3.3, 4.1, 4.4_

- [ ] 10. Checkpoint - Ensure all functionality works end-to-end
  - Test complete user flow from selection to display
  - Test error handling for various failure scenarios
  - Test configuration toggle (enable/disable uploads)
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 11. Add accessibility features
  - [ ] 11.1 Verify keyboard navigation for upload button
    - Test Tab key focuses upload button
    - Test Enter key activates file picker
    - Test Escape key cancels file selection
    - _Requirements: 7.5_
  
  - [ ]* 11.2 Write property test for keyboard accessibility
    - **Property 24: Keyboard Accessibility**
    - **Validates: Requirements 7.5**
  
  - [ ]* 11.3 Write unit tests for accessibility
    - Test ARIA labels on upload button
    - Test focus management during upload
    - Test screen reader announcements for upload status
    - _Requirements: 7.5_

- [ ] 12. Setup property-based testing infrastructure
  - [ ] 12.1 Install and configure fast-check library
    - Add fast-check as dev dependency
    - Configure test runner for property tests
    - Create test data generators for files and messages
    - _Requirements: All property tests_
  
  - [ ] 12.2 Create reusable test generators
    - Implement `imageFileArb` generator for valid image files
    - Implement `invalidFileArb` generator for invalid files
    - Implement `messageSequenceArb` generator for message sequences
    - Implement `configArb` generator for configuration variations
    - _Requirements: All property tests_

- [ ] 13. Final integration and cleanup
  - [ ] 13.1 Review and optimize configuration
    - Verify all configuration values are correct
    - Ensure configuration is documented
    - Test configuration changes take effect
    - _Requirements: 8.1, 8.2, 8.3, 8.4_
  
  - [ ] 13.2 Add code comments and documentation
    - Document file upload configuration options
    - Add JSDoc comments to validation functions
    - Document error handling approach
    - _Requirements: All_
  
  - [ ]* 13.3 Run full test suite
    - Execute all unit tests
    - Execute all property tests (100 iterations each)
    - Execute all integration tests
    - Verify test coverage meets requirements
    - _Requirements: All_

- [ ] 14. Final checkpoint - Complete feature verification
  - Verify all requirements are implemented
  - Verify all tests pass
  - Test in different browsers (Chrome, Firefox, Safari)
  - Test with various image types and sizes
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- The n8n chat library handles most UI and upload mechanics - our code focuses on configuration
- Property tests use fast-check with minimum 100 iterations per test
- Each property test references its design document property number
- File validation utilities can be reused across the application
- Configuration approach allows easy feature toggle for different environments
