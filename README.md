# Amore AI Wedding Planner

An AI-powered wedding planning application that helps couples plan their dream wedding with personalized recommendations, budget tracking, and vendor connections.

## Features

- AI-powered wedding planning assistant
- Budget tracking and cost breakdowns
- Curated vendor network
- Image-based inspiration support
- Dark mode support
- Fully responsive design

## Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Chat Integration**: n8n Chat Widget
- **Icons**: Lucide React

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd team2accproject
```

2. Install dependencies:
```bash
npm install
```

## Configuration

### n8n Chat Integration

The application uses n8n for the AI chat functionality. To configure:

1. Open `src/config/chatConfig.js`
2. Update the webhook URL with your n8n instance:

```javascript
export const chatConfig = {
  webhookUrl: 'https://your-n8n-instance.app.n8n.cloud/webhook/your-webhook-id',
  instanceId: 'your-instance-id'
};
```

3. Configure your n8n workflow with:
   - Webhook trigger
   - AI agent/LLM integration
   - Response formatting

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # ui components
│   ├── ChatDemo.jsx    # Landing page chat demo
│   ├── ChatEmbed.jsx   # n8n chat integration
│   ├── FeaturesTestimonials.jsx
│   ├── Logo.jsx
│   └── Navigation.jsx
├── pages/              # Page components
│   ├── LandingPage.jsx
│   ├── ChatPage.jsx
│   ├── AboutPage.jsx
│   └── TestimonialsPage.jsx
├── config/             # Configuration files
│   └── chatConfig.js   # n8n chat configuration
├── lib/                # Utility functions
│   └── utils.js
├── App.jsx             # Main app component
├── main.jsx            # Application entry point
└── index.css           # Global styles & theme
```

## License

This project is private and proprietary.

## Support

For support, please contact the development team or open an issue in the repository.
