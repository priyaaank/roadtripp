# RoadTripp Adventures 🚗✨

A beautiful Jekyll travel blog for documenting family road trips and adventures. Features a stunning timeline layout, detailed day-by-day itineraries, and responsive design optimized for sharing your travel memories.

## 🌟 Features

- **Timeline Homepage**: Beautiful vertical timeline with alternating layout
- **Detailed Trip Pages**: Day-by-day itineraries with photos and highlights
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Flat Color Scheme**: Modern coral red (#F25F5C) and sunny yellow (#ffe066)
- **GitHub Pages Ready**: Automated deployment with GitHub Actions
- **SEO Optimized**: Built-in SEO tags and social sharing

## 🚀 Live Demo

- **Standalone Demo**: Open `demo.html` in your browser
- **GitHub Pages**: [Your Site URL will be here after deployment]

## 📱 Sample Trips Included

1. **Grand Canyon Family Adventure** (5 days) - Arizona, USA
2. **Yellowstone Wildlife Expedition** (7 days) - Wyoming, USA  
3. **Leh Ladakh High Altitude Adventure** (8 days) - India

## 🛠️ GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. **Create a new repository** on GitHub named `roadtripp` (or your preferred name)
2. **Make sure it's public** (required for free GitHub Pages)

### Step 2: Update Configuration

1. **Edit `_config.yml`**:
   ```yaml
   url: "https://YOURUSERNAME.github.io"
   baseurl: "/REPOSITORY-NAME"
   repository: "YOURUSERNAME/REPOSITORY-NAME"
   ```

2. **Replace placeholders**:
   - `YOURUSERNAME` → Your GitHub username
   - `REPOSITORY-NAME` → Your repository name (e.g., `roadtripp`)

### Step 3: Push Your Code

```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: RoadTripp Adventures travel blog"

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/YOURUSERNAME/REPOSITORY-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click Settings** tab
3. **Scroll to "Pages"** in left sidebar
4. **Source**: Select "GitHub Actions"
5. **The site will automatically deploy** when you push changes

### Step 5: Access Your Site

Your site will be available at:
```
https://YOURUSERNAME.github.io/REPOSITORY-NAME
```

## 🔧 Local Development

### Option 1: Docker (Recommended for M2 Macs)

```bash
# Start development server
docker-compose up

# Your site will be available at http://localhost:4000
```

### Option 2: Native Ruby/Jekyll

```bash
# Install dependencies
bundle install

# Start development server
bundle exec jekyll serve --livereload

# Your site will be available at http://localhost:4000
```

## 📝 Adding New Trips

1. **Create a new file** in `_trips/` folder:
   ```bash
   touch _trips/your-trip-name.md
   ```

2. **Add trip details** using the frontmatter format:
   ```yaml
   ---
   title: "Your Amazing Trip"
   date: 2024-01-15
   duration: "5 Days"
   location: "Destination, Country"
   featured_image: "/assets/images/trip-main.jpg"
   summary: "Brief description of your trip"
   excerpt: "What makes this trip special"
   itinerary:
     - day: 1
       title: "Day 1 Title"
       # ... day details
   ---
   ```

3. **Add photos** to `assets/images/` folder
4. **Commit and push** to trigger automatic deployment

## 🎨 Customization

### Colors
Edit `_sass/main.scss` to change the color scheme:
```scss
:root {
  --primary-color: #F25F5C;    // Coral red
  --secondary-color: #ffe066;  // Sunny yellow
  --accent-color: #45b7d1;     // Blue accent
}
```

### Site Information
Update `_config.yml` with your details:
- Site title and description
- Author information
- Social media links
- Contact details

## 📁 File Structure

```
roadtripp/
├── _config.yml              # Site configuration
├── _layouts/                # Page templates
├── _includes/               # Reusable components
├── _sass/                   # Stylesheets
├── _trips/                  # Your trip content
├── assets/
│   ├── css/
│   ├── js/
│   └── images/              # Upload your photos here
├── .github/workflows/       # GitHub Actions
├── demo.html               # Standalone demo
└── index.md                # Homepage
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

- **Quick Preview**: Open `demo.html` in your browser
- **Documentation**: Check `LOCAL_SETUP.md` for detailed setup instructions
- **Issues**: Create an issue on GitHub for bugs or feature requests

## 🌟 Features Roadmap

- [ ] Search functionality
- [ ] Photo galleries with lightbox
- [ ] Travel statistics dashboard
- [ ] Map integration
- [ ] Trip comparison tool
- [ ] Export to PDF functionality

---

**Happy Travels!** 🗺️ Document your adventures and share them with the world using RoadTripp Adventures.

*Built with ❤️ using Jekyll and deployed on GitHub Pages* 