import Link from 'next/link'
import { Mail, FolderGit2, Github } from 'lucide-react'

export function Footer() {
  return (
    <footer className="mt-20 border-t py-8 text-sm text-muted-foreground">
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>&copy; {new Date().getFullYear()} Love Singhal. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/contact" className="hover:text-foreground inline-flex items-center gap-1"><Mail className="size-3" /> Contact</Link>
          <Link href="/projects" className="hover:text-foreground inline-flex items-center gap-1"><FolderGit2 className="size-3" /> Projects</Link>
          <a href="https://github.com/" target="_blank" className="hover:text-foreground inline-flex items-center gap-1" rel="noreferrer"><Github className="size-3" /> GitHub</a>
        </div>
      </div>
    </footer>
  )
}
