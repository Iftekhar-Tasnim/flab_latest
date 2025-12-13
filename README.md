# F Lab - Official Website

A modern, responsive static multipage website for Frequency Lab (F Lab), showcasing the organization's work in STEM education, robotics, IoT, and innovation.

## 🚀 Overview

F Lab is an educational organization focused on empowering young innovators through Coding, Electronics, and Robotics education. This website serves as the digital presence for showcasing programs, publications, team members, and organizational information.

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Styling with Tailwind CSS
- **JavaScript (Vanilla)** - Client-side interactivity and routing
- **Tailwind CSS v3.4.1** - Utility-first CSS framework
- **DaisyUI v4.12.10** - Component library built on Tailwind
- **Google Fonts** - Space Grotesk (headings) & Inter (body/UI)

## ✨ Features

- ✅ **Client-side Routing** - Hash-based routing for seamless navigation
- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Modern UI/UX** - Clean, professional design with smooth animations
- ✅ **Custom Color Palette** - Brand-consistent colors throughout
- ✅ **Multipage Structure** - 10+ pages with consistent navigation
- ✅ **Dynamic Navigation** - Fixed navbar with scroll effects
- ✅ **Mobile Menu** - Hamburger menu for mobile devices
- ✅ **Performance Optimized** - Fast loading times and efficient CSS
- ✅ **Accessibility** - WCAG compliant design

## 📋 Available Pages

1. **Home** (`/` or `#/`) - Landing page with hero section and highlights
2. **About** (`#/about`) - Organization information and mission
3. **Programmes** (`#/programmes`) - Educational programs and initiatives
4. **Publications** (`#/publications`) - Research papers and articles
5. **Team** (`#/team`) - Board of Directors, Advisors, and Executive Team

7. **Blog** (`#/blog`) - Blog posts and news
8. **Shop** (`#/shop`) - Products and merchandise
9. **Contact Us** (`#/contact`) - Contact information and form
10. **Privacy Policy** (`#/privacy-policy`) - Privacy policy page
11. **Safeguard Policy** (`#/safeguard`) - Safeguard policy page

## 🏗️ Project Structure

```text
web/
├── assets/              # Static assets
│   ├── gallery/        # Gallery images
│   ├── logo/           # Logo files
│   ├── partners/       # Partner logos
│   └── team/           # Team member photos
├── dist/               # Compiled CSS output (generated)
│   └── output.css      # Production CSS file
├── js/                 # JavaScript files
│   ├── main.js         # Main JavaScript functionality
│   └── router.js       # Client-side router
├── pages/              # Additional HTML pages
│   ├── about.html
│   ├── blog.html
│   ├── contact.html

│   ├── programmes.html
│   ├── publications.html
│   ├── shop.html
│   ├── team.html
│   ├── privacy-policy.html
│   └── safeguard.html
├── index.html          # Home page
├── styles.css          # Tailwind CSS source file
├── tailwind.config.js  # Tailwind configuration
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Build CSS for production:**

   ```bash
   npm run build
   ```

4. **For development with watch mode:**

   ```bash
   npm run dev
   ```

   This will watch for changes and automatically rebuild the CSS.

5. **Open the website:**

   - Simply open `index.html` in your browser, or
   - Use a local development server (recommended):

     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```

## 🎨 Custom Colors

The project includes a custom color palette integrated with Tailwind CSS:

### Color Palette

- **Yale Blue** (`yale-blue-*`) - Primary brand color
  - Used for: Primary buttons, links, accents
  - Example: `bg-yale-blue-500`, `text-yale-blue-400`

- **Platinum** (`platinum-*`) - Secondary color
  - Used for: Secondary elements, text, backgrounds
  - Example: `bg-platinum-50`, `text-platinum-600`

- **Fresh Sky** (`fresh-sky-*`) - Accent color
  - Used for: Highlights, special accents
  - Example: `bg-fresh-sky-500`, `text-fresh-sky-400`

- **Prussian Blue** (`prussian-blue-*`) - Dark/Text color
  - Used for: Headings, dark backgrounds, text
  - Example: `bg-prussian-blue-900`, `text-prussian-blue-800`

### Typography

- **Headings**: Exo 2 font family (bold, modern)
- **Body Text**: Nunito font family (readable, friendly)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development mode with watch (auto-rebuilds CSS on changes)
- `npm run build` - Build production CSS (minified)

### Development Workflow

1. Make changes to HTML files in `pages/` or `index.html`
2. Update styles in `styles.css` or use Tailwind classes directly
3. Run `npm run dev` to watch for changes
4. Test in browser
5. Run `npm run build` before deploying

### Adding New Pages

1. Create new HTML file in `pages/` directory
2. Add route to `js/router.js`:

   ```javascript
   this.routes = {
       '/new-page': 'pages/new-page.html',
       // ... other routes
   };
   ```

3. Update navigation links in all pages
4. Ensure consistent structure with other pages

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

The website uses Tailwind's default breakpoints:

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 🔗 Contact Information

- **Email**: <info@flabbd.com>
- **Hotline**: 01886660098
- **Phone**: 01886660098, 01886677379
- **Address**: H-1/F, Rd-09, Block-C, Sec-12, Pallabi, Mirpur, Dhaka, Bangladesh
- **Facebook**: [frequencylab.bd](https://www.facebook.com/frequencylab.bd)
- **LinkedIn**: [frequency-lab-bd](https://www.linkedin.com/company/frequency-lab-bd/)

## 📝 License

Copyright © 2024 Frequency Lab. All rights reserved.

## 🤝 Contributing

This is a private project for Frequency Lab. For contributions or suggestions, please contact the organization directly.

## 📄 Additional Documentation

- `SITE_PLAN.md` - Detailed development plan and site structure
- `SITE_COLORS.md` - Color palette documentation
- `colorpallet_tailwind.txt` - Color values reference

---

## Acknowledgments

Built with ❤️ for Frequency Lab
