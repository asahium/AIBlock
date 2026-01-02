# Human-Only Filter

**Reclaim Your Internet** — A filter that separates human content from AI-generated noise.

## About

In a world where 90% of online content will soon be synthetically generated, genuine human content becomes the new luxury. Human-Only Filter brings it back.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to GitHub Pages

1. Update `astro.config.mjs` with your GitHub username and repository name:
   ```js
   export default defineConfig({
     site: 'https://YOUR_USERNAME.github.io',
     base: '/YOUR_REPO_NAME',
   });
   ```

2. Create `.github/workflows/deploy.yml` with the following content:
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: "20"
             cache: npm
         - name: Install dependencies
           run: npm ci
         - name: Build
           run: npm run build
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

3. Enable GitHub Pages in your repository settings (Settings → Pages → Source: GitHub Actions)

4. Push to `main` branch to trigger deployment

## Tech Stack

- **Astro** - Static site generator
- **CSS** - Custom properties, animations, glassmorphism
- **JavaScript** - Intersection Observer API, parallax effects

## License

MIT

