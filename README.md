# Next.js Product Listing Page

A modern e-commerce product listing page built with Next.js, TypeScript, and Tailwind CSS. This application features a responsive design with product filtering, cart management, and wishlist functionality.

🌐 **Live Demo:** [https://nextjs-product-listing-page.netlify.app/]

## Features

- 🛍️ Product listing with category filtering
- 🛒 Shopping cart functionality
- ❤️ Wishlist/Save items feature
- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- 🔍 Category-based filtering
- ⚡ Fast page loads with Next.js

## Deployment

This project is deployed on Netlify. Here's how you can deploy your own instance:

1. Fork this repository
2. Sign up for a [Netlify account](https://www.netlify.com/) if you haven't already
3. Click on "New site from Git" in Netlify
4. Choose your forked repository
5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click on "Deploy site"

### Environment Variables

Make sure to configure the following environment variables in your Netlify dashboard:

- `NEXT_PUBLIC_API_URL` (if applicable)
- Any other environment variables your project uses

## Tech Stack

- **Frontend Framework:** Next.js 15.3
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context
- **HTTP Client:** Axios
- **Development Tools:**
  - ESLint
  - PostCSS
  - Autoprefixer

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone [https://github.com/Gaurav2k50/nextjs-product-listing-page.git]
cd nextjs-product-listing-page
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
src/
├── components/        # React components
│   ├── CategoryBar   # Category filtering component
│   ├── Navbar        # Navigation component
│   └── ProductCard   # Product display component
├── context/          # React Context for state management
│   └── ShopContext   # Shopping cart and wishlist state
├── pages/            # Next.js pages
├── types/            # TypeScript type definitions
└── utils/            # Utility functions and API calls
```

## Available Scripts

- `npm run dev` - Runs the development server
- `npm run build` - Builds the application for production
- `npm start` - Runs the built application
- `npm run lint` - Runs ESLint for code quality

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
