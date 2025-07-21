# AI/ML Developer Portfolio Template

A modern, responsive portfolio website template designed specifically for AI/ML developers and computer vision specialists.

🌐 **Live Demo:** [https://kenzn2.github.io](https://kenzn2.github.io)

## ✨ Features

- **Modern Design**: Clean, professional layout with developer-focused aesthetics
- **Fully Responsive**: Perfect display on desktop, tablet, and mobile devices
- **AI/ML Focused**: Sections tailored for showcasing AI/ML projects and skills
- **Working Contact Form**: EmailJS integration for functional contact form
- **Mobile Navigation**: Hamburger menu with smooth animations
- **Project Showcase**: Dedicated section for AI/ML projects with tech stacks
- **Skills Categories**: Organized display of programming languages, frameworks, and tools
- **Social Links**: Footer with social media integration
- **Fast Loading**: Optimized assets and clean code structure

## 🚀 Quick Start

### 1. Fork/Clone the Repository

```bash
git clone https://github.com/kenzn2/kenzn2.github.io.git
cd kenzn2.github.io
```

### 2. Customize Your Information

Edit `index.html` and update the following sections:

#### Personal Information
```html
<!-- Update your name -->
<span class="header__name">YOUR NAME</span>

<!-- Update hero section -->
<h1 class="hero__title">
    Your Name <br>
    <span class="text-primary">AI/ML developer</span><br>
    Your Specialization
</h1>
```

#### About Section
Replace the content in `.about__paragraph` elements with your background, education, and experience.

#### Projects Section
Update the project cards with your own projects:
```html
<article class="project-card">
    <div class="project-card__image">
        <img src="assets/images/project/your-project.jpg" alt="Your Project">
    </div>
    <div class="project-card__content">
        <div class="project-card__tech">
            <span class="tech-tag">Python</span>
            <!-- Add your tech stack -->
        </div>
        <h3 class="project-card__title">Your Project Title</h3>
        <p class="project-card__description">
            Your project description
        </p>
        <div class="project-card__links">
            <a href="your-github-link" class="btn btn--secondary" target="_blank">GitHub ~></a>
        </div>
    </div>
</article>
```

#### Skills Section
Update the skill categories and tags to match your expertise.

#### Contact Information
```html
<!-- Update contact details -->
<a href="mailto:your-email@gmail.com" class="contact-method">
    <span class="contact-method__icon">✉</span>
    <span class="contact-method__text">your-email@gmail.com</span>
</a>
```

### 3. Replace Images

Replace the following images with your own:
- `assets/images/profile/hero-image.png` - Your profile photo
- `assets/images/profile/about-image.png` - Your about section photo
- `assets/images/project/` - Your project screenshots

### 4. Setup EmailJS (Optional)

To enable the contact form:

1. Create account at [EmailJS](https://www.emailjs.com/)
2. Create email service and template
3. Update the configuration in `scripts/main.js`:

```javascript
setupEmailJS() {
    emailjs.init("YOUR_USER_ID");
}

setupContactForm() {
    // Update service and template IDs
    const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        form
    );
}
```

### 5. Deploy

#### GitHub Pages (Recommended)
1. Rename repository to `your-username.github.io`
2. Push your changes
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://your-username.github.io`

#### Other Platforms
- **Netlify**: Connect your GitHub repo for automatic deployments
- **Vercel**: Import your GitHub repository
- **Traditional Hosting**: Upload all files to your web hosting

## 🛠️ Customization

### Color Scheme
The color palette is defined in CSS custom properties at the top of `styles/main.css`:

```css
:root {
    --color-primary: #C778DD;
    --color-bg-primary: #282C33;
    --color-bg-secondary: #1E2328;
    /* Modify these to match your brand */
}
```

### Typography
The template uses Fira Code font. To change:

```html
<!-- In index.html head section -->
<link href="https://fonts.googleapis.com/css2?family=Your-Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

```css
/* In styles/main.css */
:root {
    --font-family: 'Your-Font', monospace;
}
```

### Layout
The responsive design uses CSS Grid and Flexbox. Breakpoints are defined at:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 📁 Project Structure

```
portfolio/
├── assets/
│   └── images/
│       ├── icon/          # Social media icons
│       ├── profile/       # Profile photos
│       └── project/       # Project screenshots
├── scripts/
│   └── main.js           # JavaScript functionality
├── styles/
│   └── main.css          # All styling
├── index.html            # Main HTML file
└── README.md             # This file
```

## 🎯 Perfect For

- AI/ML Engineers
- Data Scientists
- Computer Vision Specialists
- Deep Learning Researchers
- Python Developers
- Recent Graduates in AI/CS
- Freelance AI Developers

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source. Feel free to use it for your own portfolio with attribution.

## 🤝 Contributing

Found a bug or want to contribute? Please open an issue or submit a pull request.

## 💡 Credits

Designed and developed by [Kenzn2](https://github.com/kenzn2)

---

⭐ If this template helps you land your dream AI/ML job, please give it a star!
