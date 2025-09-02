
# Demo
https://ef-portfolio01.vercel.app/

![Portfolio Preview](src/assets/default-preview.png)

# Modern Portfolio Template

A modern, responsive portfolio template built with React, TypeScript, and Vite. Features smooth animations, optimized performance, and accessibility-first design.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite 6
- **Fully Responsive**: Works seamlessly on all devices

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/elijah-farrell/portfolio-template.git
cd portfolio-template
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 📝 Customization

### Personal Information
Edit the following files to customize your portfolio:

1. `src/components/sections/Hero.tsx`:
   - Update your name, title, and description (currently shows placeholder text like "[Your Name]", "[Your Professional Title]")
   - Modify social media links (GitHub, LinkedIn, Twitter, Instagram, Email)
   - Update profile picture in `src/assets/pfp.jpg`

2. `src/components/sections/Projects.tsx`:
   - Add your projects and their details
   - Update project images in `src/assets/` directory
   - Customize project descriptions, technologies, and links

3. `src/components/sections/About.tsx`:
   - Update your personal story and background
   - Modify the about section image in `src/assets/about-pfp.jpg`

4. `src/components/sections/Services.tsx`:
   - Customize the services you offer
   - Update service descriptions and icons

5. `src/components/sections/Experience.tsx`:
   - Add your work experience and timeline
   - Update company details and achievements

6. `src/components/sections/Contact.tsx`:
   - Customize contact information and form
   - Update email addresses and contact details

### Styling
- Theme customization: `src/styles/theme.ts`
- Global styles: `src/styles/GlobalStyles.tsx`
- Component-specific styles are defined within each component file

## 🚀 Deployment

This template is configured for Vercel deployment by default.

### Other Platforms (Github, Netlify, etc.)

- Follow the platform-specific deployment instructions

## 📦 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Lint code

## 🔧 System Requirements

- Node.js 18+
- npm 7+

## 📄 License

MIT License - feel free to use this template for your portfolio!
