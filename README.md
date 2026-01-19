# Shiv Adhesive - Professional Industrial Website

A commercial-grade, B2B industrial website for **Shiv Adhesive**, an adhesive manufacturing company with 25+ years of experience in the packaging and corrugation industry.

## Tech Stack

- **React** + **Vite** - Modern frontend framework and build tool
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **Wouter** - Lightweight routing
- **Lucide React** - Icon library
- **Framer Motion** - Subtle animations
- **Shadcn/UI** - Reusable component library

## Project Structure

```
src/
  components/
    ui/          # Shadcn/UI components (Button, Card, Badge, etc.)
    layout/      # Header and Footer components
  pages/         # Page components (Home, Products, About, Contact)
  data/          # Product data and content
  lib/           # Utility functions
  assets/        # Images and static assets
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify:
   - Drag and drop the `dist` folder to Netlify
   - Or connect your Git repository and set build command: `npm run build` and publish directory: `dist`

### Form Integration

The contact form is currently set up with a success state. To enable actual form submissions:

**Option 1: Formspree**
1. Sign up at [Formspree](https://formspree.io)
2. Create a new form and get your form endpoint
3. Update `src/pages/Contact.tsx` to use the Formspree endpoint

**Option 2: Netlify Forms**
1. Add `netlify` attribute to the form
2. Add hidden input: `<input type="hidden" name="form-name" value="contact" />`
3. Deploy to Netlify - forms will work automatically

## Content Management

### Editing Product Information

Edit `src/data/products.ts` to update product details, features, applications, and packaging information.

### Editing Page Content

- **Home Page**: `src/pages/Home.tsx`
- **Products Page**: `src/pages/Products.tsx`
- **About Page**: `src/pages/About.tsx`
- **Contact Page**: `src/pages/Contact.tsx`

### Editing Contact Information

Update contact details in:
- `src/components/layout/Header.tsx` (top bar)
- `src/components/layout/Footer.tsx` (footer)
- `src/pages/Contact.tsx` (contact page)

## Design System

### Colors (HSL)

- Background: `210 40% 98%` (very light cool grey)
- Foreground: `222 47% 11%` (deep slate)
- Primary: `221 83% 53%` (industrial blue)
- Muted: `215 16% 47%`
- Border: `214 32% 91%`

### Typography

- **Headings**: Oswald (uppercase, bold, tight tracking)
- **Body**: Inter (clean and readable)

### Styling Rules

- Border radius: `0.25rem` only
- No rounded-full elements
- Subtle `shadow-sm` only
- Buttons: square edges, uppercase text, tracking-wide
- Clean spacing, strong hierarchy

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Sticky header with mobile menu
- ✅ Four main pages (Home, Products, About, Contact)
- ✅ Product catalog with detailed information
- ✅ Contact form with success state
- ✅ SEO-friendly structure
- ✅ Accessible navigation
- ✅ Subtle animations with Framer Motion

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - Shiv Adhesive
