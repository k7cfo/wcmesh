"use client"

import Link from "next/link"
import { useState } from "react"
import { X } from "lucide-react"

export function FrequencyBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const frequencies = [
    {
      region: "SoCal",
      freq: "927.875",
      bandwidth: "62.5kHz",
      spreadFactor: "7",
      codingRate: "5",
    },
    {
      region: "San Francisco",
      freq: "910.525",
      bandwidth: "62.5kHz",
      spreadFactor: "7",
      codingRate: "5",
    },
    {
      region: "Sacramento",
      freq: "909.875",
      bandwidth: "62.5kHz",
      spreadFactor: "9",
      codingRate: "5",
    },
    {
      region: "Central Valley",
      freq: "910.525",
      bandwidth: "62.5kHz",
      spreadFactor: "7",
      codingRate: "5",
    },
    {
      region: "Central Coast",
      freq: "910.525",
      bandwidth: "62.5kHz",
      spreadFactor: "7",
      codingRate: "5",
    },
    {
      region: "Pacific No. West",
      freq: "910.525",
      bandwidth: "62.5kHz",
      spreadFactor: "7",
      codingRate: "5",
    },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 bg-muted text-foreground">
        <div className="container mx-auto px-4 py-2 sm:py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity shrink-0">
              <img src="/images/wcmesh-logo-horizontal-white.svg" alt="West Coast Mesh" className="h-6 sm:h-8 w-auto" />
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="font-mono text-xs sm:text-sm text-wcm-green hover:text-wcm-yellow transition-colors cursor-pointer"
            >
              {">"} Click for setup information in your area
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-muted border-2 border-wcm-green p-6 sm:p-8 max-w-4xl w-full mx-4 shadow-[0_0_30px_rgba(156,242,91,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-mono text-xl sm:text-2xl text-wcm-green font-bold">
                {":[REGIONAL FREQUENCY SETTINGS]"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-wcm-green hover:text-wcm-yellow transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Frequency Table */}
            <div className="overflow-x-auto">
              <table className="w-full font-mono text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-wcm-green">
                    <th className="text-left py-3 px-4 text-wcm-green">Region</th>
                    <th className="text-left py-3 px-4 text-wcm-green">Frequency</th>
                    <th className="text-left py-3 px-4 text-wcm-green">Bandwidth</th>
                    <th className="text-left py-3 px-4 text-wcm-green">Spread Factor</th>
                    <th className="text-left py-3 px-4 text-wcm-green">Coding Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {frequencies.map((freq, index) => (
                    <tr key={index} className="border-b border-wcm-green/30 hover:bg-wcm-green/10 transition-colors">
                      <td className="py-3 px-4 text-foreground font-bold">{freq.region}</td>
                      <td className="py-3 px-4 text-foreground">{freq.freq}</td>
                      <td className="py-3 px-4 text-foreground">{freq.bandwidth}</td>
                      <td className="py-3 px-4 text-foreground">{freq.spreadFactor}</td>
                      <td className="py-3 px-4 text-foreground">{freq.codingRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Modal Footer */}
            <div className="mt-6 text-center">
              <p className="font-mono text-xs text-muted-foreground">
                Configure your device with the settings for your region
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
