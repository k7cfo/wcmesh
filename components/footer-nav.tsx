import Link from "next/link"
import { MessageSquare, MapPin, Zap, FolderOpen } from "lucide-react"

export function FooterNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-muted border-t border-wcm-green">
      <div className="container mx-auto px-2 py-3">
        <ul className="flex items-center justify-center gap-2 sm:gap-6 font-mono text-xs sm:text-sm">
          {/* Discord Link */}
          <li>
            <a
              href="https://discord.gg/wcmesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-foreground hover:text-wcm-green transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">Discord</span>
            </a>
          </li>

          {/* Apps Link */}
          <li>
            <Link
              href="/apps"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-foreground hover:text-wcm-green transition-colors"
            >
              <FolderOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Apps</span>
            </Link>
          </li>

          {/* Web Flasher Link */}
          <li>
            <a
              href="https://flasher.meshcore.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-foreground hover:text-wcm-green transition-colors"
            >
              <Zap className="w-4 h-4" />
              <span className="hidden sm:inline">Flasher</span>
            </a>
          </li>

          {/* Map Link */}
          <li>
            <a
              href="https://map.wcmesh.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-foreground hover:text-wcm-green transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">Map</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
