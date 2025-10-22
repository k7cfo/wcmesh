import { MessageSquare } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t-2 border-wcm-green py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and tagline */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/wcmesh-logo-horizontal.png" alt="West Coast Mesh" className="h-8 w-auto" />
            </div>
            <p className="font-mono text-sm text-wcm-gray">Building the decentralized future, one packet at a time.</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-mono text-wcm-green font-bold mb-4">{":[LINKS]"}</h3>
            <ul className="space-y-2 font-mono text-sm">
              <li>
                <a
                  href="https://github.com/meshcore-dev/MeshCore/blob/main/docs/faq.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wcm-gray hover:text-wcm-green transition-colors"
                >
                  {"> Wiki"}
                </a>
              </li>
              <li>
                <a
                  href="https://meshcore.co.uk/apps.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wcm-gray hover:text-wcm-green transition-colors"
                >
                  {"> Apps"}
                </a>
              </li>
              <li>
                <a
                  href="https://flasher.meshcore.co.uk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wcm-gray hover:text-wcm-green transition-colors"
                >
                  {"> Web Flasher"}
                </a>
              </li>
              <li>
                <a
                  href="https://map.wcmesh.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wcm-gray hover:text-wcm-green transition-colors"
                >
                  {"> Map"}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/k7cfo/wcmesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wcm-gray hover:text-wcm-green transition-colors"
                >
                  {"> GitHub WCMESH"}
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/meshcore-dev/MeshCore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wcm-gray hover:text-wcm-green transition-colors"
                >
                  {"> GitHub MeshCore"}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-wcm-green font-bold mb-4">{":[CONNECT]"}</h3>
            <a
              href="https://discord.com/invite/wcmesh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 border-2 border-wcm-green text-wcm-green hover:bg-wcm-green hover:text-black transition-colors font-mono font-bold"
            >
              <MessageSquare className="w-5 h-5" />
              <span>JOIN DISCORD</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-wcm-green pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-wcm-gray max-w-3xl text-center sm:text-left leading-relaxed">
            © 2025 West Coast Mesh. All rights reserved. West Coast Mesh is not responsible for the actions of its
            members or the placement of equipment. This network is provided "as is" without warranty of any kind,
            expressed or implied. West Coast Mesh is not intended to be used as a life-saving or emergency service. In
            case of emergency, dial 911. Use of this network is at your own risk.
          </p>
          <div className="flex items-center gap-4">
            <img src="/images/meshcore-logo.png" alt="MeshCore" className="h-6 w-auto" />
            <img src="/images/wcmesh-logo-horizontal-green.svg" alt="WCM" className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  )
}
