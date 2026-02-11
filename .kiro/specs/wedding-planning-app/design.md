# Design Document: Wedding Planning Web App

## Overview

The wedding planning web application is a frontend-only React application that provides users with a landing page and an AI-powered chatbot interface for wedding planning assistance. The application uses React with Vite as the build tool and Tailwind CSS for styling. The architecture follows a simple two-page structure with client-side routing, where the chatbot functionality is provided through an embedded n8n chat interface.

### Key Design Decisions

1. **Frontend-Only Architecture**: No backend implementation is required as all AI processing is handled by the external n8n service
2. **React Router for Navigation**: Client-side routing provides seamless navigation without page reloads
3. **Iframe Embedding**: The n8n chat interface will be embedded using an iframe element for security and isolation
4. **Configuration-Based Embed URL**: The n8n embed link will be stored in a configuration file for easy updates without code changes
5. **Tailwind CSS Utility-First Approach**: All styling will use Tailwind utility classes for consistency and maintainability

## Architecture

### Application Structure

```
wedding-planning-app/
├── src/
│   ├── components/
│   │   ├── ChatEmbed.jsx          # n8n chat iframe component
│   │   └── NavigationButton.jsx   # Reusable button component
│   ├── pages/
│   │   ├── LandingPage.jsx        # Landing page component
│   │   └── ChatPage.jsx           # Chat page component
│   ├── config/
│   │   └── chatConfig.js          # Configuration for n8n embed URL
│   ├── App.jsx                    # Main app component with routing
│   ├── main.jsx                   # Application entry point
│   └── index.css                  # Tailwind CSS imports
├── index.html                     # HTML template
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind configuration
└── package.json                   # Dependencies and scripts
```

### Component Hierarchy

```
App
├── Router
    ├── Route "/" → LandingPage
    │   └── NavigationButton
    └── Route "/chat" → ChatPage
        └── ChatEmbed
```

### Routing Strategy

The application uses React Router v6 for client-side routing:
- **Route "/"**: Renders the LandingPage component
- **Route "/chat"**: Renders the ChatPage component
- **Fallback**: Any undefined routes redirect to "/"

## Components and Interfaces

### 1. App Component (App.jsx)

**Purpose**: Root component that sets up routing and provides the application shell.

**Interface**:
```javascript
function App()
  Returns: JSX.Element
```

**Responsibilities**:
- Configure React Router with BrowserRouter
- Define routes for "/" and "/chat"
- Handle fallback routing for undefined paths
- Provide consistent layout wrapper if needed

**Implementation Notes**:
- Uses `<BrowserRouter>` from react-router-dom
- Uses `<Routes>` and `<Route>` for route configuration
- Includes a catch-all route that redirects to "/"

---

### 2. LandingPage Component (pages/LandingPage.jsx)

**Purpose**: Main landing page that introduces the wedding planning app and provides navigation to the chat interface.

**Interface**:
```javascript
function LandingPage()
  Returns: JSX.Element
```

**Responsibilities**:
- Display welcome message and app description
- Render NavigationButton to direct users to chat page
- Provide responsive layout for all device sizes
- Apply wedding-themed styling with gradient accents

**Implementation Notes**:
- Uses Tailwind CSS for all styling
- Centers content vertically and horizontally
- Includes heading, description text, and call-to-action button
- Applies gradient background or gradient accent elements

---

### 3. ChatPage Component (pages/ChatPage.jsx)

**Purpose**: Dedicated page for the AI chatbot interface that embeds the n8n chat.

**Interface**:
```javascript
function ChatPage()
  Returns: JSX.Element
```

**Responsibilities**:
- Render ChatEmbed component with configured URL
- Provide full-height layout for chat interface
- Handle loading states while iframe loads
- Display error message if embed URL is invalid

**Implementation Notes**:
- Uses full viewport height (h-screen) for chat area
- Includes optional header with back navigation
- Passes embed URL from config to ChatEmbed component
- Shows loading spinner while iframe is loading

---

### 4. ChatEmbed Component (components/ChatEmbed.jsx)

**Purpose**: Embeds the n8n chat interface using an iframe.

**Interface**:
```javascript
function ChatEmbed({ embedUrl })
  Parameters:
    - embedUrl: string (URL of the n8n chat interface)
  Returns: JSX.Element
```

**Responsibilities**:
- Render iframe with provided embed URL
- Configure iframe attributes for security and functionality
- Handle iframe loading states
- Ensure responsive sizing

**Implementation Notes**:
- Uses iframe element with src set to embedUrl
- Applies security attributes: `sandbox="allow-scripts allow-same-origin allow-forms"`
- Sets `allow` attribute for necessary permissions
- Uses Tailwind classes for full width and height
- Includes `onLoad` handler to manage loading state

---

### 5. NavigationButton Component (components/NavigationButton.jsx)

**Purpose**: Reusable button component for navigation with gradient styling.

**Interface**:
```javascript
function NavigationButton({ to, children })
  Parameters:
    - to: string (destination route)
    - children: ReactNode (button content)
  Returns: JSX.Element
```

**Responsibilities**:
- Render styled button with gradient background
- Navigate to specified route when clicked
- Provide hover and focus states
- Ensure accessibility with proper ARIA attributes

**Implementation Notes**:
- Uses React Router's `useNavigate` hook for navigation
- Applies gradient background using Tailwind: `bg-gradient-to-r from-[#f391cc] to-[#70cedd]`
- Includes hover effects (scale, brightness)
- Ensures minimum touch target size (44x44px) for mobile
- Uses semantic `<button>` element

---

### 6. Chat Configuration (config/chatConfig.js)

**Purpose**: Centralized configuration for the n8n chat embed URL.

**Interface**:
```javascript
export const chatConfig = {
  embedUrl: string
}
```

**Implementation Notes**:
- Exports a configuration object with embedUrl property
- Can be easily updated without modifying component code
- Could be extended to support environment variables in the future

## Data Models

### Configuration Model

```javascript
{
  embedUrl: string  // URL of the n8n chat interface to embed
}
```

**Validation Rules**:
- embedUrl must be a valid URL string
- embedUrl must use HTTPS protocol for security
- embedUrl should point to a valid n8n chat endpoint

### Route Model

```javascript
{
  path: string,      // Route path (e.g., "/", "/chat")
  element: JSX.Element  // Component to render
}
```

## Styling System

### Color Palette

**Primary Colors**:
- Black: `#000000` - Used for primary text
- White: `#FFFFFF` - Used for backgrounds and light text

**Accent Gradient**:
- Start: `#f391cc` (pink)
- End: `#70cedd` (cyan)
- Applied to: buttons, decorative elements, headings

### Tailwind Configuration

The `tailwind.config.js` will extend the default theme with custom colors:

```javascript
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'wedding-pink': '#f391cc',
        'wedding-cyan': '#70cedd',
      },
    },
  },
  plugins: [],
}
```

### Responsive Breakpoints

- Mobile: `< 768px` (default Tailwind sm)
- Tablet: `768px - 1024px` (Tailwind md to lg)
- Desktop: `> 1024px` (Tailwind xl and above)

### Typography

- Headings: Large, bold, potentially with gradient text effect
- Body text: Readable size (16px base), appropriate line height
- Button text: Medium weight, uppercase or sentence case

## Error Handling

### Invalid Embed URL

**Scenario**: The configured embed URL is invalid, empty, or unreachable.

**Handling**:
1. ChatEmbed component validates the embedUrl prop
2. If invalid, display error message: "Unable to load chat interface. Please check the configuration."
3. Provide fallback UI with contact information or alternative action
4. Log error to console for debugging

### Iframe Loading Failure

**Scenario**: The iframe fails to load the n8n chat interface.

**Handling**:
1. Use iframe `onError` event handler
2. Display user-friendly error message
3. Offer retry button or link back to landing page
4. Set timeout for loading state (e.g., 10 seconds)

### Route Not Found

**Scenario**: User navigates to an undefined route.

**Handling**:
1. React Router catch-all route (`path="*"`)
2. Redirect to landing page ("/")
3. Optionally display brief notification about redirect

### Network Issues

**Scenario**: User has poor or no internet connection.

**Handling**:
1. Browser will handle iframe loading failures naturally
2. Display loading indicator with timeout
3. Show error message if loading takes too long
4. Provide retry mechanism

## Testing Strategy

### Unit Testing

Unit tests will verify individual component behavior and logic:

**LandingPage Component**:
- Renders welcome content correctly
- NavigationButton is present and functional
- Responsive classes are applied

**ChatPage Component**:
- Renders ChatEmbed with correct props
- Displays loading state initially
- Handles missing embed URL gracefully

**ChatEmbed Component**:
- Renders iframe with correct src attribute
- Applies security attributes correctly
- Handles loading and error states
- Validates embed URL format

**NavigationButton Component**:
- Renders children content
- Navigates to correct route on click
- Applies gradient styling
- Handles keyboard interaction (Enter, Space)

**Routing**:
- "/" route renders LandingPage
- "/chat" route renders ChatPage
- Undefined routes redirect to "/"
- Browser back/forward navigation works correctly

### Integration Testing

Integration tests will verify component interactions:

**Navigation Flow**:
- User can navigate from landing page to chat page
- User can navigate back using browser back button
- URL updates correctly during navigation

**Chat Embedding**:
- n8n chat interface loads successfully in iframe
- Chat interface is interactive and functional
- Chat interface displays correctly on different screen sizes

### Manual Testing Checklist

**Responsive Design**:
- Test on mobile device (< 768px)
- Test on tablet device (768px - 1024px)
- Test on desktop device (> 1024px)
- Verify touch targets are appropriately sized on mobile

**Visual Design**:
- Verify color scheme matches specification
- Check gradient rendering on different browsers
- Ensure text contrast meets accessibility standards
- Verify consistent spacing and alignment

**Performance**:
- Measure initial page load time
- Verify chat page loads within 2 seconds
- Check bundle size is optimized
- Test on slower network connections

**Browser Compatibility**:
- Test on Chrome, Firefox, Safari, Edge
- Verify iframe embedding works across browsers
- Check gradient rendering consistency

**Accessibility**:
- Test keyboard navigation
- Verify screen reader compatibility
- Check color contrast ratios
- Ensure focus indicators are visible


## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Undefined Route Redirection

*For any* undefined route path (any path that is not "/" or "/chat"), navigating to that path should result in the application redirecting to the landing page at "/".

**Validates: Requirements 4.2**

### Property 2: Navigation State Consistency

*For any* sequence of navigation actions (forward navigation, back button, forward button), the browser URL and the rendered component should always be consistent with each other.

**Validates: Requirements 4.3, 4.4, 4.5**

### Example-Based Tests

The following behaviors should be verified with specific example tests:

**Example 1: Root Route Renders Landing Page**
- Navigate to "/" and verify LandingPage component is rendered
- **Validates: Requirements 2.1**

**Example 2: Landing Page Contains Navigation Button**
- Render LandingPage and verify NavigationButton is present
- **Validates: Requirements 2.2**

**Example 3: Navigation Button Routes to Chat**
- Click NavigationButton and verify navigation to "/chat"
- **Validates: Requirements 2.3**

**Example 4: Chat Route Renders Chat Page**
- Navigate to "/chat" and verify ChatPage component is rendered
- **Validates: Requirements 3.1**

**Example 5: Chat Page Embeds n8n Interface**
- Render ChatPage and verify iframe element exists with correct src attribute from config
- **Validates: Requirements 3.2, 5.2**

**Example 6: Two Routes Exist**
- Verify that routes for "/" and "/chat" are defined in the router configuration
- **Validates: Requirements 4.1**

**Example 7: Configuration Exports Embed URL**
- Import chatConfig and verify embedUrl property exists and is a string
- **Validates: Requirements 5.1**

**Example 8: Invalid Embed URL Shows Error**
- Render ChatEmbed with invalid or empty embedUrl and verify error message is displayed
- **Validates: Requirements 5.5**

**Example 9: Loading Indicator During Iframe Load**
- Render ChatPage and verify loading indicator is present before iframe onLoad event fires
- **Validates: Requirements 8.3**

### Edge Cases

The following edge cases should be tested to ensure robust behavior:

**Edge Case 1: Responsive Breakpoints**
- Test layout at mobile breakpoint (< 768px)
- Test layout at tablet breakpoint (768px - 1024px)
- Test layout at desktop breakpoint (> 1024px)
- **Validates: Requirements 7.1, 7.2, 7.3**

**Edge Case 2: Touch Target Sizes on Mobile**
- Verify interactive elements meet minimum 44x44px size on mobile viewports
- **Validates: Requirements 7.4**

### Testing Implementation Notes

**Unit Tests**:
- Use React Testing Library for component testing
- Use React Router's MemoryRouter for routing tests
- Mock iframe loading for ChatEmbed tests
- Test component rendering, user interactions, and state changes

**Property Tests**:
- Property 1: Generate random invalid route paths and verify redirect behavior
- Property 2: Generate random navigation sequences and verify URL/component consistency

**Integration Tests**:
- Test full navigation flow from landing page to chat page
- Test browser back/forward navigation
- Test iframe embedding with actual embed URL

**Manual Testing**:
- Visual design verification (colors, gradients, spacing)
- Cross-browser compatibility
- Performance measurements
- Accessibility testing with screen readers
