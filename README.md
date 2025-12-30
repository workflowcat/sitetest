# Digital Garden

A minimal, Obsidian-inspired markdown-based website built with Jekyll and deployed to GitHub Pages.

## Features

- Clean, modern design inspired by Obsidian
- Dark mode with automatic detection
- Responsive layout for mobile
- Markdown-powered content
- Automatic deployment via GitHub Actions

## Local Development

```bash
# Install dependencies
bundle install

# Start local server
bundle exec jekyll serve
```

Visit `http://localhost:4000/sitetest/`

## Structure

```
├── _layouts/        # HTML templates
├── assets/css/      # Stylesheets
├── notes/           # Note content
├── index.md         # Home page
├── about.md         # About page
└── projects.md      # Projects page
```

## Deployment

The site automatically deploys to GitHub Pages when you push to the main branch. The GitHub Actions workflow handles the build and deployment process.

## Adding Content

1. Create a new `.md` file in the appropriate directory
2. Add front matter with at least a `title`
3. Write your content in markdown
4. Commit and push

## License

MIT
