# Digital Garden / Цифровий сад

A personal knowledge base built with [Quartz v4](https://quartz.jzhao.xyz/).

## Features

- 🔍 **Full-text search** - Find anything instantly
- 🔗 **Backlinks** - See what links to each page
- 📊 **Graph view** - Visualize connections between notes
- 🌙 **Dark/light mode** - Easy on the eyes
- 📱 **Mobile friendly** - Works everywhere
- ⚡ **Fast** - Static site, no database
- 🎨 **Hover previews** - Preview links without clicking

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npx quartz build --serve

# Build for production
npx quartz build
```

## Adding Content

1. Create/edit markdown files in `content/`
2. Use `[[wikilinks]]` for internal links
3. Use Obsidian-style callouts: `> [!note]`
4. Commit and push to deploy

## Structure

```
content/
├── index.md          # Home page
├── about.md          # About page
├── projects.md       # Projects
└── notes/            # Notes folder
    ├── index.md
    ├── pkm-intro.md
    ├── markdown-tips.md
    └── building-in-public.md
```

## Deployment

Automatically deploys to GitHub Pages on push to `main`.

Built with [Quartz](https://quartz.jzhao.xyz/) by [@jackyzha0](https://github.com/jackyzha0).
