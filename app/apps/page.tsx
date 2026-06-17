import { Download, ExternalLink, Smartphone, Apple, Globe } from "lucide-react"

export default function AppsPage() {
  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Page Header */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <header className="mb-8">
            <h1 className="font-mono text-3xl sm:text-4xl font-bold text-wcm-green mb-4">{":[APPS]"}</h1>
            <div className="h-1 w-24 bg-wcm-green mx-auto" />
          </header>
          <article className="font-mono text-xl text-muted-foreground leading-relaxed mb-12">
            Download MeshCore applications for your device or access the web client.
          </article>

          <div className="space-y-12">
            {/* Android Section */}
            <section className="border border-wcm-green bg-muted p-8">
              <header className="flex items-center justify-center gap-3 mb-6">
                <Smartphone className="w-8 h-8 text-wcm-green" />
                <h2 className="font-mono text-2xl font-bold text-wcm-green">Android</h2>
              </header>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://files.liamcottle.net/MeshCore/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm bg-wcm-green text-primary-foreground hover:bg-wcm-green/90 transition-colors border-2 border-wcm-green"
                >
                  <Download className="w-4 h-4" />
                  Download APK
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.liamcottle.meshcore.android"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm bg-wcm-green text-primary-foreground hover:bg-wcm-green/90 transition-colors border-2 border-wcm-green"
                >
                  <ExternalLink className="w-4 h-4" />
                  Download from Google Play
                </a>
              </div>
            </section>

            {/* Apple iOS Section */}
            <section className="border border-wcm-green bg-muted p-8">
              <header className="flex items-center justify-center gap-3 mb-6">
                <Apple className="w-8 h-8 text-wcm-green" />
                <h2 className="font-mono text-2xl font-bold text-wcm-green">Apple iOS</h2>
              </header>
              <div className="flex justify-center">
                <a
                  href="https://apps.apple.com/us/app/meshcore/id6742354151"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm bg-wcm-green text-primary-foreground hover:bg-wcm-green/90 transition-colors border-2 border-wcm-green"
                >
                  <ExternalLink className="w-4 h-4" />
                  Get From App Store
                </a>
              </div>
            </section>

            {/* Web Client Section */}
            <section className="border border-wcm-green bg-muted p-8">
              <header className="flex items-center justify-center gap-3 mb-6">
                <Globe className="w-8 h-8 text-wcm-green" />
                <h2 className="font-mono text-2xl font-bold text-wcm-green">Web Client</h2>
              </header>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://app.meshcore.nz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 font-mono text-sm bg-wcm-green text-primary-foreground hover:bg-wcm-green/90 transition-colors border-2 border-wcm-green"
                >
                  <ExternalLink className="w-4 h-4" />
                  Start Meshcore Web Client
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}
