# 🚀 GitHub Pages Deployment Guide

This guide will walk you through deploying your RoadTripp Adventures blog to GitHub Pages with automatic deployment.

## 📋 Prerequisites

- A GitHub account
- Git installed on your computer
- Your RoadTripp site files ready

## 🛠️ Step-by-Step Deployment

### 1. Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click the "+" icon** in the top right → "New repository"
3. **Repository name**: Choose a name (e.g., `roadtripp`, `family-adventures`)
4. **Description**: "Our family travel blog documenting road trip adventures"
5. **Visibility**: Must be **Public** for free GitHub Pages
6. **Initialize**: ❌ Don't check any boxes (we have existing files)
7. **Click "Create repository"**

### 2. Configure Your Site

**Update `_config.yml`** with your specific details:

```yaml
# Replace these with YOUR details:
url: "https://YOURUSERNAME.github.io"
baseurl: "/REPOSITORY-NAME"
repository: "YOURUSERNAME/REPOSITORY-NAME"
title: "Your Family Adventures"
author: "Your Family Name"
email: your.email@example.com
```

**Example** (if your GitHub username is `johndoe` and repository is `family-trips`):
```yaml
url: "https://johndoe.github.io"
baseurl: "/family-trips"
repository: "johndoe/family-trips"
```

### 3. Push Your Code to GitHub

**Open terminal/command prompt** in your project folder:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: RoadTripp Adventures travel blog"

# Add your GitHub repository as remote
# Replace with YOUR repository URL from step 1
git remote add origin https://github.com/YOURUSERNAME/REPOSITORY-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab (at the top of your repo)
3. **Scroll down** and click "Pages" in the left sidebar
4. **Source**: Select "GitHub Actions" (not "Deploy from a branch")
5. **The GitHub Actions workflow** is already configured in `.github/workflows/jekyll.yml`

### 5. Verify Deployment

1. **Go to "Actions" tab** in your repository
2. **You should see a workflow running** called "Deploy Jekyll to GitHub Pages"
3. **Wait for it to complete** (usually 2-3 minutes)
4. **Green checkmark** = successful deployment
5. **Red X** = something went wrong (check the logs)

### 6. Access Your Live Site

Your site will be available at:
```
https://YOURUSERNAME.github.io/REPOSITORY-NAME
```

**Example**: `https://johndoe.github.io/family-trips`

## 🔄 Making Updates

After your initial deployment, any future updates are automatic:

1. **Edit your files** locally
2. **Commit changes**: `git add . && git commit -m "Add new trip"`
3. **Push to GitHub**: `git push`
4. **GitHub Actions automatically rebuilds** and deploys your site

## 🐛 Troubleshooting

### Build Failing?

**Check the Actions tab** for error details:

1. **Go to repository → Actions**
2. **Click the failed workflow**
3. **Click the failed job**
4. **Read the error logs**

**Common Issues:**

- **YAML syntax error** in `_config.yml` or trip files
- **Missing required fields** in trip front matter
- **Invalid file paths** for images
- **Sass/CSS errors** in stylesheet files

### Site Not Loading?

- **Wait 5-10 minutes** after first deployment
- **Check the URLs** in `_config.yml` match your repository
- **Make sure repository is public**
- **Try hard refresh** in browser (Ctrl+F5 / Cmd+Shift+R)

### Images Not Showing?

- **Check file paths** in your markdown files
- **Ensure images are in `assets/images/`** folder
- **Use relative paths** starting with `/assets/images/`
- **Commit and push images** to repository

## 🎨 Customizing Your Deployment

### Custom Domain (Optional)

1. **Buy a domain** (like `yourfamily.com`)
2. **Add CNAME file** to repository root:
   ```
   yourfamily.com
   ```
3. **Configure DNS** with your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: YOURUSERNAME.github.io
   ```
4. **Enable custom domain** in repository Settings → Pages

### Environment Variables

For sensitive configuration, use **repository secrets**:

1. **Settings → Secrets and variables → Actions**
2. **Add repository secrets**
3. **Reference in workflow**: `${{ secrets.SECRET_NAME }}`

## 📈 Advanced Features

### Analytics Integration

Add to `_includes/head.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### SEO Optimization

The site includes built-in SEO with:
- Meta descriptions
- Social sharing tags
- Sitemap generation
- Schema markup

### Performance

GitHub Pages automatically:
- Compresses CSS/JS
- Optimizes images
- Enables CDN
- Provides HTTPS

## 🎯 Next Steps

1. **Add your first trip** in `_trips/` folder
2. **Upload your photos** to `assets/images/`
3. **Customize colors** in `_sass/main.scss`
4. **Update about page** with your family info
5. **Share your site** with friends and family!

## 📞 Need Help?

- **Preview locally first**: Open `demo.html` in browser
- **Check documentation**: See `README.md` and `LOCAL_SETUP.md`
- **Create an issue**: Use GitHub Issues for bugs
- **Discord/forums**: Jekyll and GitHub Pages communities

---

🌟 **Congratulations!** Your family travel blog is now live on the internet!

**Share your adventures** and inspire other families to explore the world! 🗺️✨ 