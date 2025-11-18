export function FrequencyBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-muted text-foreground">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-center gap-4">
          <img src="/images/wcmesh-logo-horizontal-white.svg" alt="West Coast Mesh" className="h-8 w-auto" />
          <p className="font-mono text-xs sm:text-sm text-center">
            <span className="inline-block mr-1">Current Frequency: 927.875</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="inline-block sm:inline mr-1 sm:mr-0">Bandwidth: 62.5kHz</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="inline-block sm:inline mr-1 sm:mr-0">Spread Factor: 9</span>
            <span className="hidden sm:inline mx-2">|</span>
            <span className="inline-block sm:inline">Coding Rate: 5</span>
          </p>
        </div>
      </div>
    </div>
  )
}
