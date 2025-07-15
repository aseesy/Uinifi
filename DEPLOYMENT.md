# Deployment Guide for uinifi.ai

This guide will help you deploy the UiNifi AI application to Cloudflare Pages with your custom domain.

## Prerequisites

- Cloudflare account with `uinifi.ai` domain
- GitHub repository connected to Cloudflare Pages
- Node.js 18+ for local development

## Step 1: Cloudflare Pages Setup

1. **Log into Cloudflare Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to Pages section

2. **Create New Project**
   - Click "Create a project"
   - Choose "Connect to Git"
   - Select your GitHub repository

3. **Configure Build Settings**
   - **Project name**: `uinifi-ai`
   - **Production branch**: `main` (or your default branch)
   - **Framework preset**: `Create React App`
   - **Build command**: `npm run build`
   - **Build output directory**: `build`
   - **Root directory**: `/` (leave empty)

4. **Environment Variables** (Optional)
   - Add any environment variables if needed
   - Most React apps don't need additional env vars for basic deployment

## Step 2: Custom Domain Configuration

1. **Add Custom Domain**
   - In your Pages project settings
   - Go to "Custom domains" tab
   - Click "Set up a custom domain"
   - Enter: `uinifi.ai`

2. **DNS Configuration**
   - Cloudflare will automatically create the necessary DNS records
   - Ensure SSL/TLS encryption mode is set to "Full" or "Full (strict)"
   - Enable "Always Use HTTPS" in SSL/TLS settings

3. **Domain Settings**
   - **Always Use HTTPS**: Enabled
   - **HSTS**: Enabled (recommended)
   - **Security Level**: Medium or High

## Step 3: Build and Deploy

1. **Trigger First Deployment**
   - Push your code to the main branch
   - Cloudflare Pages will automatically build and deploy
   - Monitor the build logs for any issues

2. **Verify Deployment**
   - Visit `https://uinifi.ai` to confirm the site is live
   - Test all functionality and responsive design
   - Check mobile navigation and touch targets

## Step 4: Performance Optimization

1. **Enable Cloudflare Features**
   - **Auto Minify**: Enable for JS, CSS, and HTML
   - **Brotli**: Enable for better compression
   - **Early Hints**: Enable for faster loading
   - **Rocket Loader**: Enable for JavaScript optimization

2. **Caching Rules**
   - Static assets: Cache for 1 year
   - HTML files: Cache for 1 hour
   - API responses: Cache as needed

## Step 5: SEO and Analytics

1. **Google Analytics** (Optional)
   - Add Google Analytics tracking code
   - Configure goals and events

2. **Search Console**
   - Add `uinifi.ai` to Google Search Console
   - Submit sitemap when available

3. **Social Media**
   - Add Open Graph meta tags
   - Configure Twitter Card meta tags

## Troubleshooting

### Build Failures
- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check for syntax errors in React components

### Domain Issues
- Ensure DNS propagation (can take up to 24 hours)
- Check SSL certificate status
- Verify domain ownership in Cloudflare

### Performance Issues
- Enable Cloudflare's performance features
- Optimize images and assets
- Use lazy loading for components

## Monitoring

1. **Cloudflare Analytics**
   - Monitor traffic and performance
   - Set up alerts for downtime

2. **Error Tracking**
   - Consider adding error tracking (Sentry, etc.)
   - Monitor JavaScript errors in production

## Security

1. **Security Headers**
   - The `_redirects` file includes security headers
   - Consider additional CSP headers if needed

2. **Content Security Policy**
   - Add CSP headers for additional security
   - Test thoroughly before deployment

## Updates and Maintenance

1. **Automatic Deployments**
   - Every push to main branch triggers deployment
   - Preview deployments available for pull requests

2. **Rollback**
   - Previous deployments can be rolled back instantly
   - Use Cloudflare Pages dashboard for rollbacks

## Support

- **Cloudflare Pages Documentation**: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- **Cloudflare Support**: Available in dashboard
- **React Documentation**: [reactjs.org](https://reactjs.org)

---

Your site should now be live at `https://uinifi.ai`! 🚀 