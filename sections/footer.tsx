import { siteConfig } from "@/config/site"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </span>
          <span className="font-mono text-[11px] text-muted-foreground/60">
            Made with ☕ in Indore
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
