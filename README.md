# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# DeWitt Wood - Custom Woodworking Landing Page

A professional landing page for a custom woodworking shop built with React and TypeScript.

## Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Professional Landing Page**: Showcases woodworking services and craftsmanship
- **Component-Based Architecture**: Modular React components for easy maintenance
- **TypeScript**: Type-safe development for better code quality
- **Smooth Navigation**: Smooth scrolling between sections
- **Interactive Contact Form**: Complete inquiry form for potential customers

## Sections

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Gallery**: Showcase of woodworking projects and craftsmanship
- **About**: Information about the craftsman and process
- **Contact Form**: Professional inquiry form for project requests
- **Footer**: Contact information and social links

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

Build the project for production:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## Customization

### Content Updates

- Update business information in component files
- Replace placeholder images with actual woodworking photos
- Modify contact information in `Footer.tsx`
- Customize project gallery in `Gallery.tsx`

### Styling

- Color scheme can be modified in `App.css` CSS variables
- Component-specific styles are organized in the main CSS file
- Responsive breakpoints can be adjusted in media queries

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `App.tsx`
3. Update navigation in `Header.tsx`
4. Add corresponding styles in `App.css`

## Technologies Used

- **React 18**: Frontend framework
- **TypeScript**: Type-safe JavaScript
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with Grid and Flexbox
- **ESLint**: Code linting and formatting

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Landing section
│   ├── Gallery.tsx         # Project showcase
│   ├── About.tsx           # About section
│   ├── InquiryForm.tsx     # Contact form
│   └── Footer.tsx          # Footer section
├── App.tsx                 # Main app component
├── App.css                 # Main styles
├── index.css               # Global styles
└── main.tsx                # App entry point
```

## License

This project is created for DeWitt Wood custom woodworking business.

## Notes for Development

- Image placeholders are included and should be replaced with actual photos
- Contact information needs to be updated with real business details
- Form submission currently logs to console - implement backend integration as needed
- Social media links in footer need to be updated with actual profiles

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
