# Setup Guide for RoadTripp Adventures

## Quick Demo

To see the design immediately, open `demo.html` in your browser. This shows the complete timeline layout with bright colors and responsive design.

## Jekyll Setup Options

### Option 1: Use GitHub Pages (Recommended)

1. **Create a GitHub repository** and push this code
2. **Enable GitHub Pages** in repository settings
3. **Your site will be live** at `https://yourusername.github.io/repository-name`

GitHub Pages will automatically build and deploy your Jekyll site.

### Option 2: Local Development

If you want to run Jekyll locally, you have a few options:

#### Using Docker (Easiest)
```bash
# Run Jekyll in Docker (no local Ruby installation needed)
docker run --rm -it \
  -v "$PWD":/usr/src/app \
  -p 4000:4000 \
  jekyll/jekyll:latest \
  jekyll serve --host 0.0.0.0
```

#### Using rbenv (macOS/Linux)
```bash
# Install rbenv and Ruby
brew install rbenv
rbenv install 3.1.0
rbenv global 3.1.0

# Install Jekyll
gem install jekyll bundler
bundle install
bundle exec jekyll serve
```

#### Using GitHub Codespaces
1. Open this repository in GitHub Codespaces
2. Run `bundle install`
3. Run `bundle exec jekyll serve`

## Adding Your Content

### 1. Configure Your Site
Edit `_config.yml`:
```yaml
title: "Your Family Blog Name"
email: your-email@example.com
description: "Your blog description"
url: "https://yourusername.github.io"
github_username: yourusername
twitter_username: yourusername
```

### 2. Add Your First Trip
Create a new file in `_trips/your-trip-name.md`:

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

### 3. Add Images
- Place images in `assets/images/`
- Use descriptive filenames
- Recommended sizes:
  - Main trip images: 1200x800px
  - Day photos: 600x400px
  - Timeline images: 400x400px (square)

### 4. Customize Colors
Edit `_sass/main.scss` to change the color scheme:
```scss
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  --accent-color: #your-color;
}
```

## Features Included

✅ **Timeline Homepage** - Vertical timeline with alternating left/right entries  
✅ **Circular Timeline Images** - Featured photos as circular markers  
✅ **Bright Color Scheme** - Cheerful, travel-inspired palette  
✅ **Responsive Design** - Mobile-first approach  
✅ **Day-by-Day Itineraries** - Detailed trip breakdowns  
✅ **Photo Galleries** - Grid layouts with lightbox  
✅ **SEO Optimized** - Built-in meta tags and social sharing  
✅ **GitHub Pages Ready** - Deploy with zero configuration  

## Troubleshooting

### Jekyll Won't Install
- Use Docker option above
- Or deploy directly to GitHub Pages (no local Jekyll needed)

### Images Not Showing
- Check file paths in your markdown files
- Ensure images are in `assets/images/` directory
- Use forward slashes in paths: `/assets/images/photo.jpg`

### Timeline Not Working
- Ensure trip files are in `_trips/` directory
- Check that front matter includes required fields: `title`, `date`, `featured_image`

## Support

- Check the main `README.md` for detailed documentation
- Open an issue on GitHub for bugs
- The `demo.html` file shows the complete design without Jekyll

---

Happy road tripping! 🚗✨ 