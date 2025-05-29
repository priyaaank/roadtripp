# Local Development Setup Guide

## Updated Color Scheme ✨
Your blog now uses the new color scheme:
- **Primary Color**: #F25F5C (coral red)
- **Secondary Color**: #ffe066 (sunny yellow)

## Quick Preview (No Setup Required)

**Open `demo.html` in your browser** to immediately see the new design with your updated colors!

## Local Development Options

### Option 1: Using Docker (Recommended - No Ruby Installation)

This is the easiest way to run Jekyll locally without installing Ruby or dealing with dependencies:

```bash
# Navigate to your project directory
cd /path/to/roadtripp

# Run Jekyll using Docker
docker run --rm -it \
  -v "$PWD":/usr/src/app \
  -p 4000:4000 \
  jekyll/jekyll:latest \
  jekyll serve --host 0.0.0.0 --livereload

# Your site will be available at: http://localhost:4000
```

**Benefits:**
- No local Ruby installation required
- Consistent environment
- Auto-refresh when files change (--livereload)
- Works on macOS, Windows, and Linux

### Option 2: Using rbenv (macOS/Linux)

Install Ruby and Jekyll locally:

```bash
# Install rbenv (if not already installed)
brew install rbenv ruby-build

# Install Ruby 3.1.0
rbenv install 3.1.0
rbenv global 3.1.0

# Restart terminal or run:
source ~/.bashrc  # or ~/.zshrc

# Verify Ruby installation
ruby -v

# Install bundler
gem install bundler

# Navigate to your project
cd /path/to/roadtripp

# Install dependencies
bundle install

# Start the development server
bundle exec jekyll serve --livereload

# Your site will be available at: http://localhost:4000
```

### Option 3: Using GitHub Codespaces (Cloud Development)

1. **Push your code to a GitHub repository**
2. **Click "Code" → "Codespaces" → "Create codespace on main"**
3. **In the terminal, run:**
   ```bash
   bundle install
   bundle exec jekyll serve --host 0.0.0.0
   ```
4. **Access your site through the forwarded port**

### Option 4: Direct GitHub Pages Deployment (No Local Setup)

1. **Create a GitHub repository**
2. **Push your code to the repository**
3. **Go to Settings → Pages**
4. **Select "Deploy from a branch" → "main"**
5. **Your site will be live at `https://yourusername.github.io/repository-name`**

## Troubleshooting Common Issues

### Jekyll Won't Install (macOS)
If you encounter C++ compiler errors:
```bash
# Use Docker option instead, or try:
xcode-select --install
brew install gcc
```

### Port 4000 Already in Use
```bash
# Use a different port
bundle exec jekyll serve --port 4001

# Or kill the process using port 4000
lsof -ti:4000 | xargs kill -9
```

### Permission Errors
```bash
# Install gems to local directory
bundle install --path vendor/bundle
bundle exec jekyll serve
```

### Live Reload Not Working
```bash
# Make sure you're using the --livereload flag
bundle exec jekyll serve --livereload

# Or for Docker:
docker run --rm -it \
  -v "$PWD":/usr/src/app \
  -p 4000:4000 \
  -p 35729:35729 \
  jekyll/jekyll:latest \
  jekyll serve --host 0.0.0.0 --livereload
```

## Development Workflow

### 1. Adding New Trips
Create a new file in `_trips/` folder:
```bash
touch _trips/my-new-trip.md
```

### 2. Adding Images
```bash
# Add images to assets/images/
cp my-photo.jpg assets/images/
```

### 3. Customizing Colors
Edit `_sass/main.scss`:
```scss
:root {
  --primary-color: #F25F5C;    // Your coral red
  --secondary-color: #ffe066;  // Your sunny yellow
  --accent-color: #45b7d1;     // Can be customized
}
```

### 4. Testing Changes
With live reload enabled, your changes will appear automatically in the browser.

## File Structure for Development

```
roadtripp/
├── _config.yml          # Site configuration
├── _layouts/            # Page templates
├── _includes/           # Reusable components
├── _sass/               # Stylesheets (edit these for colors)
├── _trips/              # Your trip content (add new trips here)
├── assets/
│   ├── css/
│   ├── js/
│   └── images/          # Add your photos here
├── demo.html            # Standalone demo (always works)
├── index.md             # Homepage
└── about.md             # About page
```

## Next Steps

1. **Start with Docker option** if you want to avoid Ruby setup
2. **Edit `_config.yml`** to customize site title and info
3. **Add your own trip files** to `_trips/` folder
4. **Upload your photos** to `assets/images/`
5. **Customize colors** in `_sass/main.scss` if desired

## Color Customization Examples

Your current colors work great, but if you want to experiment:

```scss
// Autumn theme
--primary-color: #d2691e;
--secondary-color: #ffd700;

// Ocean theme  
--primary-color: #006994;
--secondary-color: #00b4d8;

// Sunset theme (your current)
--primary-color: #F25F5C;
--secondary-color: #ffe066;
```

## Support

- **Immediate preview**: Open `demo.html` in browser
- **Docker issues**: Make sure Docker Desktop is running
- **Ruby issues**: Use Docker option instead
- **General help**: Check the main `README.md`

Happy coding! 🚗✨ 