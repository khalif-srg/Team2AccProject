# Implementation Plan: Wedding Venue Recommendation Tool

## Overview

This implementation plan breaks down the wedding venue recommendation tool into discrete, incremental coding tasks. The system will be built using TypeScript for both frontend (React) and backend (n8n workflows), with Supabase for data persistence and external APIs for AI and email services.

The implementation follows a bottom-up approach: core utilities and data models first, then individual components, then integration and workflows, and finally end-to-end wiring.

## Tasks

- [ ] 1. Project setup and infrastructure
  - Initialize React + TypeScript project with Vite
  - Configure Tailwind CSS
  - Set up Supabase client and environment variables
  - Create project directory structure (components, utils, types, workflows)
  - Configure TypeScript strict mode and path aliases
  - Set up testing infrastructure (Jest, React Testing Library, fast-check)
  - _Requirements: All_

- [ ] 2. Define core TypeScript types and interfaces
  - [ ] 2.1 Create type definitions for data models
    - Define PreferenceSet, VenueMatch, BookingBrief interfaces
    - Define API request/response types (MatchVenuesResponse, SubmitInquiryResponse, ErrorResponse)
    - Define database schema types for Supabase tables
    - _Requirements: 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 4.1, 5.1, 7.1, 11.1, 11.2_
  
  - [ ]* 2.2 Write property test for type validation
    - **Property 2: Date Input Acceptance**
    - **Property 3: Numeric Input Validation**
    - **Validates: Requirements 2.2, 2.3**

- [ ] 3. Implement session management utilities
  - [ ] 3.1 Create SessionManager class
    - Implement createSession() to generate UUID and store in localStorage
    - Implement getSession() to retrieve and validate session token
    - Implement clearSession() to remove expired sessions
    - Handle session expiration logic (7 days)
    - _Requirements: 3.1, 3.2, 3.5_
  
  - [ ]* 3.2 Write property tests for session management
    - **Property 8: Session Token Generation**
    - **Property 9: Session Persistence Round-Trip**
    - **Property 10: Session Expiration**
    - **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5**
  
  - [ ]* 3.3 Write unit tests for session edge cases
    - Test expired session handling
    - Test missing localStorage scenario
    - Test corrupted session data
    - _Requirements: 3.1, 3.2, 3.5_

- [ ] 4. Set up Supabase database schema
  - [ ] 4.1 Create database migration scripts
    - Create sessions table with indexes
    - Create preferences table with foreign key to sessions
    - Create venues table with indexes on capacity, price, location, style_tags
    - Create inquiries table with foreign keys
    - Set up Supabase Storage bucket for inspiration-images
    - Configure storage policies and file size limits
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_
  
  - [ ]* 4.2 Write property tests for database operations
    - **Property 29: Session Data Persistence**
    - **Property 30: Venue Photo Storage**
    - **Property 31: Inspiration Image Storage**
    - **Validates: Requirements 11.1, 11.2, 11.4, 11.5**

- [ ] 5. Implement input validation utilities
  - [ ] 5.1 Create validation functions
    - Implement validateGuestCount() for positive integers
    - Implement validateBudgetRange() for min/max validation
    - Implement validateLocation() for non-empty strings
    - Implement validateImageFile() for file type and size
    - Implement validatePreferenceSet() for complete preference validation
    - _Requirements: 2.3, 2.4, 2.6, 2.7, 2.9_
  
  - [ ]* 5.2 Write property tests for validation
    - **Property 3: Numeric Input Validation**
    - **Property 4: Location Input Acceptance**
    - **Property 5: Image Upload Acceptance**
    - **Property 7: Validation Error Display**
    - **Validates: Requirements 2.3, 2.6, 2.7, 2.9**
  
  - [ ]* 5.3 Write unit tests for validation edge cases
    - Test zero and negative guest counts
    - Test invalid budget ranges (min > max)
    - Test empty location strings
    - Test oversized image files
    - _Requirements: 2.3, 2.4, 2.6, 2.7_

- [ ] 6. Implement Landing Page component
  - [ ] 6.1 Create LandingPage component
    - Build hero section with value proposition text
    - Add call-to-action button to start venue search
    - Include "no account required" messaging
    - Implement responsive layout with Tailwind CSS
    - Add handleStartClick() to initialize session and navigate
    - _Requirements: 1.1, 1.2, 1.3, 1.4_
  
  - [ ]* 6.2 Write unit tests for Landing Page
    - Test value proposition text is displayed
    - Test CTA button is present
    - Test "no account required" message is visible
    - Test button click initializes session
    - _Requirements: 1.1, 1.2, 1.3_
  
  - [ ]* 6.3 Write property test for mobile rendering
    - **Property 1: Mobile Viewport Rendering**
    - **Validates: Requirements 1.4**

- [ ] 7. Implement Preference Capture component
  - [ ] 7.1 Create PreferenceCaptureFlow component
    - Build multi-step form with state management (currentStep, preferences, validationErrors)
    - Implement step 1: Date selection (single date or range)
    - Implement step 2: Guest count input
    - Implement step 3: Budget range slider
    - Implement step 4: Style dropdown + free text field
    - Implement step 5: Location input
    - Implement step 6: Image upload (optional)
    - Implement step 7: Review summary
    - Add navigation buttons (Next, Back, Submit)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_
  
  - [ ] 7.2 Implement step validation logic
    - Create validateStep() function for each step
    - Display inline validation errors
    - Prevent navigation to next step if validation fails
    - _Requirements: 2.9_
  
  - [ ] 7.3 Implement image upload functionality
    - Create uploadImage() function to upload to Supabase Storage
    - Handle upload failures gracefully (non-blocking)
    - Store image URLs in preferences state
    - _Requirements: 2.7, 2.8_
  
  - [ ] 7.4 Implement preference submission
    - Create handleSubmit() to send preferences to n8n webhook
    - Store preferences in session
    - Navigate to results display on success
    - _Requirements: 2.1, 3.3, 4.1_
  
  - [ ]* 7.5 Write property tests for preference capture
    - **Property 2: Date Input Acceptance**
    - **Property 6: Non-Blocking Upload Failure**
    - **Property 7: Validation Error Display**
    - **Validates: Requirements 2.2, 2.8, 2.9**
  
  - [ ]* 7.6 Write unit tests for preference capture
    - Test stepped navigation (one step at a time)
    - Test back button functionality
    - Test review summary displays all inputs
    - Test submission with all fields filled
    - Test submission with optional fields empty
    - _Requirements: 2.1, 2.7_

- [ ] 8. Checkpoint - Ensure frontend components render correctly
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 9. Create n8n Venue Match Workflow
  - [ ] 9.1 Set up webhook trigger
    - Create POST webhook endpoint /api/match-venues
    - Define input payload validation
    - _Requirements: 4.1, 5.1_
  
  - [ ] 9.2 Implement database query logic
    - Query Supabase venues table with filters
    - Filter by guest capacity (capacity_min <= guestCount <= capacity_max)
    - Filter by budget (price_min >= budgetMin AND price_max <= budgetMax)
    - Filter by location (text match or proximity)
    - Return candidate venues
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_
  
  - [ ] 9.3 Implement AI ranking integration
    - Format prompt with candidate venues and preferences
    - Send HTTP request to Google Gemini API with authentication
    - Parse AI response to extract match scores and reasoning
    - Handle API failures with retry logic (3 attempts, exponential backoff)
    - _Requirements: 5.1, 5.2, 5.3, 12.1, 12.3, 12.4_
  
  - [ ] 9.4 Implement response formatting
    - Limit results to top 1-3 venues
    - Merge AI scores/reasoning with venue data
    - Return formatted MatchVenuesResponse
    - Handle "no venues found" case with helpful message
    - _Requirements: 5.4, 5.5, 6.8_
  
  - [ ] 9.5 Implement error handling
    - Catch database query failures
    - Catch AI API timeouts
    - Log errors to Supabase
    - Return appropriate ErrorResponse
    - _Requirements: 5.6, 9.1, 9.3, 12.5_
  
  - [ ]* 9.6 Write property tests for venue matching workflow
    - **Property 11: Multi-Constraint Venue Filtering**
    - **Property 12: AI Response Completeness**
    - **Property 13: Result Count Constraint**
    - **Property 14: Timeout Error Handling**
    - **Property 33: API Retry with Exponential Backoff**
    - **Validates: Requirements 4.2, 4.3, 4.4, 4.5, 5.2, 5.3, 5.4, 5.5, 5.6, 12.4**
  
  - [ ]* 9.7 Write unit tests for workflow edge cases
    - Test empty candidate venues list
    - Test AI API returns malformed response
    - Test database connection failure
    - Test retry exhaustion scenario
    - _Requirements: 5.6, 6.8, 12.4, 12.5_

- [ ] 10. Implement Results Display component
  - [ ] 10.1 Create ResultsDisplay component
    - Fetch session data and venue matches
    - Display 1-3 venue cards based on results
    - Render venue photos from Supabase Storage
    - Display venue name, location, capacity, price, amenities
    - Display AI-generated match reasoning
    - Add "Select Venue" button for each card
    - Implement responsive card layout (vertical stack on mobile)
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 10.5_
  
  - [ ] 10.2 Implement "no results" state
    - Display helpful message when venues array is empty
    - Suggest adjusting preferences
    - Add button to return to preference capture
    - _Requirements: 6.8, 9.2_
  
  - [ ] 10.3 Implement loading and error states
    - Show loading spinner while fetching results
    - Display error message if API call fails
    - Provide retry button
    - _Requirements: 9.3_
  
  - [ ]* 10.4 Write property tests for results display
    - **Property 15: Venue Card Display Count**
    - **Property 16: Venue Card Completeness**
    - **Property 17: Venue Selection Mechanism**
    - **Property 28: Mobile Vertical Card Stacking**
    - **Validates: Requirements 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 10.5**
  
  - [ ]* 10.5 Write unit tests for results display
    - Test rendering with 1 venue
    - Test rendering with 3 venues
    - Test "no results" message display
    - Test loading state
    - Test error state with retry button
    - _Requirements: 6.1, 6.8, 9.3_

- [ ] 11. Implement Booking Brief Preview component
  - [ ] 11.1 Create BookingBriefPreview component
    - Generate booking brief from preferences and selected venue
    - Display all brief fields (dates, guest count, budget, style, location)
    - Show venue name and contact email
    - Add optional couple email input field
    - Add "Send Inquiry" button
    - Implement responsive layout
    - _Requirements: 7.1, 7.2_
  
  - [ ] 11.2 Implement brief generation logic
    - Create generateBrief() function
    - Format dates as readable strings
    - Format budget as currency range
    - Combine style options and description
    - Add timestamp
    - _Requirements: 7.1, 7.6_
  
  - [ ] 11.3 Implement inquiry submission
    - Create handleSendInquiry() function
    - Call n8n inquiry submission webhook
    - Handle loading state during submission
    - Navigate to confirmation on success
    - Display error message on failure
    - _Requirements: 7.3, 7.7_
  
  - [ ]* 11.4 Write property tests for booking brief
    - **Property 18: Booking Brief Generation**
    - **Property 21: Conditional Couple Email Copy**
    - **Validates: Requirements 7.1, 7.2, 7.5, 7.6**
  
  - [ ]* 11.5 Write unit tests for booking brief
    - Test brief generation with all fields
    - Test brief generation with optional fields empty
    - Test submission success flow
    - Test submission failure with error display
    - _Requirements: 7.1, 7.3, 7.7_

- [ ] 12. Create n8n Inquiry Submission Workflow
  - [ ] 12.1 Set up webhook trigger
    - Create POST webhook endpoint /api/submit-inquiry
    - Define input payload validation
    - _Requirements: 7.3_
  
  - [ ] 12.2 Implement email template formatting
    - Load HTML email template
    - Populate template with booking brief data
    - Format dates, budget, and other fields
    - _Requirements: 7.6_
  
  - [ ] 12.3 Implement email sending to venue
    - Send HTTP request to Resend API
    - Include venue email as recipient
    - Include formatted booking brief as HTML body
    - Handle authentication
    - Implement retry logic (3 attempts, exponential backoff)
    - _Requirements: 7.3, 12.2, 12.3, 12.4_
  
  - [ ] 12.4 Implement optional couple email copy
    - Check if couple email is provided
    - Send copy of booking brief to couple email
    - Handle failure gracefully (don't block main inquiry)
    - _Requirements: 7.5_
  
  - [ ] 12.5 Implement inquiry logging
    - Store inquiry record in Supabase inquiries table
    - Include session_id, venue_id, brief content, timestamp, status
    - _Requirements: 7.4, 11.3_
  
  - [ ] 12.6 Implement response formatting
    - Return SubmitInquiryResponse with success status
    - Include inquiry ID and timestamp
    - Indicate whether couple copy was sent
    - _Requirements: 7.3, 7.5_
  
  - [ ] 12.7 Implement error handling
    - Catch email sending failures
    - Log errors to Supabase
    - Return ErrorResponse with retry option
    - _Requirements: 7.7, 12.5_
  
  - [ ]* 12.8 Write property tests for inquiry workflow
    - **Property 19: Inquiry Email Transmission**
    - **Property 20: Inquiry Logging**
    - **Property 22: Email Failure Error Response**
    - **Property 32: External API Authentication**
    - **Property 34: Post-Retry Error Handling**
    - **Validates: Requirements 7.3, 7.4, 7.7, 11.3, 12.2, 12.3, 12.5**
  
  - [ ]* 12.9 Write unit tests for inquiry workflow
    - Test successful email sending
    - Test couple copy sent when email provided
    - Test couple copy not sent when email not provided
    - Test inquiry logging with all fields
    - Test email failure with retry
    - _Requirements: 7.3, 7.4, 7.5, 7.7_

- [ ] 13. Implement Confirmation Screen component
  - [ ] 13.1 Create ConfirmationScreen component
    - Display success message
    - Show venue name and submission timestamp
    - Summarize what was sent
    - Display suggested next steps
    - Show couple email confirmation if applicable
    - Add "Search Again" button to reset flow
    - _Requirements: 8.1, 8.2, 8.3, 8.4_
  
  - [ ]* 13.2 Write property tests for confirmation screen
    - **Property 23: Confirmation Screen Information**
    - **Property 24: Couple Email Confirmation**
    - **Validates: Requirements 8.2, 8.4**
  
  - [ ]* 13.3 Write unit tests for confirmation screen
    - Test confirmation with couple email provided
    - Test confirmation without couple email
    - Test "Search Again" button resets session
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [ ] 14. Checkpoint - Ensure all workflows and components are functional
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 15. Implement responsive design and mobile optimizations
  - [ ] 15.1 Add mobile-specific styles
    - Ensure all pages render correctly at 320px width
    - Set minimum tap target size to 44x44 pixels for all interactive elements
    - Implement vertical card stacking on mobile
    - Optimize image loading for mobile bandwidth
    - Test single-input-per-screen layout on mobile
    - _Requirements: 1.4, 10.1, 10.2, 10.3, 10.4, 10.5_
  
  - [ ]* 15.2 Write property tests for responsive design
    - **Property 1: Mobile Viewport Rendering**
    - **Property 25: Touch Target Sizing**
    - **Property 26: Mobile Image Optimization**
    - **Property 27: Mobile Single-Input Layout**
    - **Property 28: Mobile Vertical Card Stacking**
    - **Validates: Requirements 1.4, 10.1, 10.2, 10.3, 10.4, 10.5**
  
  - [ ]* 15.3 Write unit tests for mobile rendering
    - Test all components at 320px viewport
    - Test touch target sizes
    - Test image optimization
    - _Requirements: 1.4, 10.1, 10.2, 10.3_

- [ ] 16. Implement error handling and user feedback
  - [ ] 16.1 Create error display components
    - Build ErrorMessage component for inline errors
    - Build ErrorBoundary for React error catching
    - Implement retry buttons where applicable
    - _Requirements: 9.1, 9.3, 9.4, 9.5_
  
  - [ ] 16.2 Add error messages throughout application
    - Add "no venues found" message with suggestions
    - Add timeout error message with retry
    - Add upload failure message (non-blocking)
    - Add validation error messages
    - Ensure all messages use plain language (no technical jargon)
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6_
  
  - [ ]* 16.3 Write unit tests for error handling
    - Test "no venues found" display
    - Test timeout error with retry button
    - Test upload failure allows continuation
    - Test validation errors display inline
    - _Requirements: 9.1, 9.2, 9.3, 9.4_

- [ ] 17. Implement routing and navigation
  - [ ] 17.1 Set up React Router
    - Configure routes for all pages (/, /preferences, /results, /booking-brief, /confirmation)
    - Implement navigation guards for session validation
    - Handle browser back/forward buttons
    - _Requirements: 1.1, 2.1, 6.1, 7.1, 8.1_
  
  - [ ]* 17.2 Write unit tests for routing
    - Test navigation from landing to preferences
    - Test navigation from results to booking brief
    - Test session validation on protected routes
    - _Requirements: 1.1, 2.1, 6.1_

- [ ] 18. Seed database with sample venue data
  - [ ] 18.1 Create venue seed script
    - Generate 20-30 sample venues with varied attributes
    - Include diverse locations, capacities, prices, styles
    - Upload sample venue images to Supabase Storage
    - Insert venues into database
    - _Requirements: 4.1, 11.4_
  
  - [ ]* 18.2 Write unit tests for seed script
    - Test venue data validation
    - Test image upload
    - Test database insertion
    - _Requirements: 4.1, 11.4_

- [ ] 19. Integration testing and end-to-end flows
  - [ ]* 19.1 Write E2E test for complete user journey
    - Test landing → preferences → results → booking brief → confirmation
    - Test with all fields filled
    - Test with optional fields empty
    - _Requirements: All_
  
  - [ ]* 19.2 Write E2E test for "no results" flow
    - Test with preferences that match no venues
    - Verify helpful message and suggestions
    - Test adjusting preferences and retrying
    - _Requirements: 6.8, 9.2_
  
  - [ ]* 19.3 Write E2E test for error recovery
    - Test API timeout with retry
    - Test upload failure with continuation
    - Test email failure with retry
    - _Requirements: 5.6, 7.7, 9.3_

- [ ] 20. Final checkpoint - Ensure all tests pass and application is functional
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 21. Deployment preparation
  - [ ] 21.1 Configure environment variables
    - Set up .env files for development and production
    - Configure Supabase URL and anon key
    - Configure n8n webhook URLs
    - Configure Google Gemini API key
    - Configure Resend API key
    - _Requirements: All_
  
  - [ ] 21.2 Build and optimize for production
    - Run production build
    - Optimize bundle size
    - Configure AWS S3 + CloudFront or Amplify deployment
    - Set up n8n workflows in production environment
    - _Requirements: All_
  
  - [ ]* 21.3 Write deployment verification tests
    - Test production API endpoints
    - Test environment variable configuration
    - Test database connectivity
    - _Requirements: All_

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties (minimum 100 iterations each)
- Unit tests validate specific examples and edge cases
- The implementation uses TypeScript throughout for type safety
- n8n workflows are configured via the n8n UI but tested programmatically via webhook calls
