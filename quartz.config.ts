import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 * Digital Garden / Цифровий сад
 *
 * A refined, paper-like aesthetic with warm tones
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Digital Garden",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "uk-UA",
    baseUrl: "workflowcat.github.io/sitetest",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Source Serif 4",
        body: "Source Serif 4",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f5",          // Warm paper white
          lightgray: "#f0ebe3",      // Cream
          gray: "#b8b0a4",           // Warm gray
          darkgray: "#5c5650",       // Dark warm gray
          dark: "#2d2926",           // Almost black, warm
          secondary: "#8b5e3c",      // Warm brown/terracotta
          tertiary: "#6b8f71",       // Sage green
          highlight: "rgba(139, 94, 60, 0.08)",
          textHighlight: "#f7e8c8",  // Soft yellow highlight
        },
        darkMode: {
          light: "#1a1816",          // Dark warm
          lightgray: "#2a2622",      // Dark cream
          gray: "#6b635a",           // Muted warm
          darkgray: "#d4cdc4",       // Light warm
          dark: "#f0ebe3",           // Cream text
          secondary: "#c9a87c",      // Golden brown
          tertiary: "#8fb896",       // Soft sage
          highlight: "rgba(201, 168, 124, 0.12)",
          textHighlight: "#4a3f2f",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
