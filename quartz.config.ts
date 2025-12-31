import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 * Digital Garden / Цифровий сад
 *
 * A refined, timeless design inspired by letterpress printing
 * and classic book typography
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
        header: "Newsreader",
        body: "Newsreader",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#FDFBF7",           // Aged cream paper
          lightgray: "#F0EBE3",       // Soft parchment
          gray: "#9A918A",            // Warm stone
          darkgray: "#5C564F",        // Deep warm gray
          dark: "#2C2825",            // Rich charcoal ink
          secondary: "#6B7F6B",       // Muted sage (sophisticated green)
          tertiary: "#8B6B5C",        // Warm terracotta
          highlight: "rgba(107, 127, 107, 0.08)",
          textHighlight: "#F7EED0",   // Soft golden highlight
        },
        darkMode: {
          light: "#1A1817",           // Deep warm black
          lightgray: "#2A2624",       // Warm dark gray
          gray: "#6B635A",            // Muted warm gray
          darkgray: "#C9C2B8",        // Soft warm light
          dark: "#F0EBE3",            // Cream white text
          secondary: "#9DB39D",       // Soft sage
          tertiary: "#C4A594",        // Warm blush
          highlight: "rgba(157, 179, 157, 0.10)",
          textHighlight: "#3D3530",
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
