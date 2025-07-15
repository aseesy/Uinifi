# UiNifi AI

A modern React application with intelligent UI/UX solutions, built with Tailwind CSS and designed for deployment on Cloudflare Pages at [uinifi.ai](https://uinifi.ai).

## Features

- 🎨 **Design System**: Consistent, scalable design patterns
- 🚀 **Rapid Development**: Component library and development tools
- 🤖 **AI Integration**: Smart features for enhanced UX
- 📱 **Mobile-First**: Responsive design with touch-friendly interfaces
- 🎯 **Performance**: Optimized for fast loading and smooth interactions

## Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefixing
- **Google Fonts** - Inter & Lora typography

## Design System

- **Primary Color**: `#275559` (Teal)
- **Secondary Color**: `#4DA8B0` (Light Teal)
- **Typography**: Inter (body), Lora (headings)
- **Touch Targets**: 44px minimum for mobile
- **Responsive**: Mobile-first approach

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo>
cd uinifi-ai
```

2. Install dependencies:
```bash
npm install
```

3. Install Tailwind CSS:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

4. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Deployment to Cloudflare Pages

### Automatic Deployment

1. Connect your GitHub repository to Cloudflare Pages
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Output directory**: `build`
   - **Node.js version**: 18 (or higher)
   - **Custom domain**: `uinifi.ai`
3. Set up DNS records in Cloudflare:
   - Add A record pointing to Cloudflare Pages IP
   - Enable HTTPS and force SSL

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the `build` folder contents to Cloudflare Pages

## Project Structure

```
uinifi-ai/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.js             # Main React component
│   ├── index.js           # React entry point
│   └── index.css          # Tailwind CSS and custom styles
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── postcss.config.js      # PostCSS configuration
└── README.md             # This file
```

## Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## Customization

### Colors

Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  primary: '#275559',
  secondary: '#4DA8B0',
  // Add more colors as needed
}
```

### Components

The app includes reusable button components:
- `.btn-primary` - Primary action buttons
- `.btn-secondary` - Secondary action buttons
- `.btn-success` - Success state buttons
- `.btn-ghost` - Subtle action buttons

### Mobile Navigation

The app includes a mobile-first navigation system with:
- Fixed bottom navigation on mobile
- Responsive desktop navigation
- Touch-friendly 44px minimum targets

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License. 