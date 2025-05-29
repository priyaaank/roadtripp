# RoadTripp Adventures - Jekyll Travel Blog

A beautiful, responsive Jekyll theme designed for documenting family road trips with a stunning timeline layout, day-by-day itineraries, and bright, cheerful colors.

## Features

### 🎨 Design
- **Timeline Homepage**: Vertical timeline with alternating left/right trip entries
- **Circular Timeline Images**: Featured photos displayed as circular images on the timeline
- **Bright Color Scheme**: Cheerful, travel-inspired color palette with gradients
- **Responsive Design**: Mobile-first approach that looks great on all devices
- **Smooth Animations**: Scroll-triggered animations and hover effects

### 📱 Layouts
- **Home Layout**: Timeline view with newest trips at top, oldest at bottom
- **Trip Layout**: Detailed trip pages with day-by-day itineraries
- **Day Cards**: Each day features photos, highlights, accommodation info, and detailed descriptions
- **Photo Galleries**: Grid layouts with lightbox functionality
- **Navigation**: Previous/next trip navigation and back-to-timeline links

### 🚀 Technical Features
- **Jekyll Collections**: Trips stored as markdown files in `_trips` collection
- **YAML Front Matter**: Rich metadata for trip details, dates, locations, and itineraries
- **SCSS Architecture**: Modular stylesheets for easy customization
- **GitHub Pages Ready**: Optimized for deployment on GitHub Pages
- **SEO Optimized**: Built-in SEO tags and social media integration
- **Progressive Enhancement**: Works without JavaScript, enhanced with JS

## Quick Start

### 1. Clone and Setup
```bash
git clone https://github.com/yourusername/roadtripp.git
cd roadtripp
bundle install
```

### 2. Configure Your Site
Edit `_config.yml`:
```yaml
title: "Your Blog Name"
email: your-email@example.com
description: "Your travel blog description"
url: "https://yourusername.github.io"
github_username: yourusername
twitter_username: yourusername
```

### 3. Add Your First Trip
Create a new file in `_trips/` folder:
```markdown
---
layout: trip
title: "Your Amazing Trip"
date: 2024-01-15
duration: "5 Days"
location: "Destination, State"
featured_image: "/assets/images/trip-main.jpg"
summary: "Brief trip description"
excerpt: "Timeline excerpt"

itinerary:
  - day: 1
    title: "Day One Adventure"
    date: "January 15, 2024"
    description: "What you did on day one..."
    highlights:
      - "Highlight one"
      - "Highlight two"
    photos:
      - url: "/assets/images/day1-photo1.jpg"
        caption: "Photo caption"
    accommodation:
      name: "Hotel Name"
      address: "Hotel Address"
---

Your trip overview content goes here...
```

### 4. Add Images
Place your images in the `assets/images/` directory. For best results:
- **Featured images**: 800x600px for main trip images
- **Day photos**: 600x400px for day-specific images
- **Timeline images**: Square format (400x400px) works best for circular display

### 5. Run Locally
```bash
bundle exec jekyll serve
```
Visit `http://localhost:4000` to see your site.

## Deployment

### GitHub Pages (Recommended)
1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to repository Settings > Pages
4. Select "Deploy from a branch" and choose "main" branch
5. Your site will be available at `https://yourusername.github.io/repository-name`

### Custom Domain (Optional)
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## Customization

### Colors
Edit the color variables in `_sass/main.scss`:
```scss
:root {
  --primary-color: #ff6b6b;     // Main accent color
  --secondary-color: #4ecdc4;   // Secondary accent
  --accent-color: #45b7d1;      // Third accent color
  --highlight-color: #ffa726;   // Highlight color
  // ... more colors
}
```

### Fonts
Change fonts in `_includes/head.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update the font variables in `_sass/main.scss`:
```scss
--font-primary: 'YourFont', sans-serif;
--font-heading: 'YourHeadingFont', serif;
```

### Layout Modifications
- **Timeline**: Edit `_layouts/home.html` and `_sass/_timeline.scss`
- **Trip Pages**: Edit `_layouts/trip.html` and `_sass/_trip.scss`
- **Navigation**: Edit `_includes/header.html` and `_sass/_header.scss`

## File Structure

```
roadtripp/
├── _config.yml           # Site configuration
├── _layouts/            
│   ├── default.html     # Base layout
│   ├── home.html        # Timeline homepage
│   └── trip.html        # Individual trip pages
├── _includes/           
│   ├── head.html        # HTML head section
│   ├── header.html      # Site header/navigation
│   └── footer.html      # Site footer
├── _sass/               
│   ├── main.scss        # Main styles and variables
│   ├── _header.scss     # Header styles
│   ├── _timeline.scss   # Timeline styles
│   ├── _trip.scss       # Trip page styles
│   ├── _footer.scss     # Footer styles
│   └── _responsive.scss # Responsive styles
├── _trips/              # Trip collection
│   ├── trip-1.md
│   └── trip-2.md
├── assets/
│   ├── css/
│   │   └── style.scss   # Main CSS file
│   ├── js/
│   │   └── main.js      # JavaScript functionality
│   └── images/          # Image assets
├── index.md             # Homepage
├── about.md             # About page
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Content Guidelines

### Trip Front Matter
- **title**: Trip name (required)
- **date**: Trip start date in YYYY-MM-DD format (required)
- **duration**: Trip length (e.g., "5 Days", "1 Week")
- **location**: Destination (e.g., "Arizona, USA")
- **featured_image**: Main trip image path (required)
- **summary**: Detailed description for trip page
- **excerpt**: Short description for timeline

### Itinerary Structure
Each day in the itinerary can include:
- **day**: Day number
- **title**: Day title/theme
- **date**: Specific date
- **featured_image**: Main image for the day
- **description**: Detailed day description (supports Markdown)
- **highlights**: Array of day highlights
- **photos**: Array of photo objects with url and caption
- **accommodation**: Object with name, address, and optional notes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This theme is available as open source under the [MIT License](LICENSE).

## Support

For questions or issues:
- Check the [documentation](https://github.com/yourusername/roadtripp/wiki)
- Open an [issue](https://github.com/yourusername/roadtripp/issues)
- Start a [discussion](https://github.com/yourusername/roadtripp/discussions)

---

Made with ❤️ for families who love road trips! 