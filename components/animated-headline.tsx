"use client"

import { useEffect, useState } from "react"

const words = ["Cell", "Internet", "Power"]

export function AnimatedHeadline() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentWord = words[currentIndex]

    if (isTyping) {
      // Typing phase
      if (charIndex < currentWord.length) {
        const typingTimeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, 120) // Typing speed: 120ms per character
        return () => clearTimeout(typingTimeout)
      } else {
        // Pause after typing complete
        const pauseTimeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Pause for 2 seconds before erasing
        return () => clearTimeout(pauseTimeout)
      }
    } else {
      // Erasing phase
      if (charIndex > 0) {
        const erasingTimeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, 80) // Erasing speed: 80ms per character (faster than typing)
        return () => clearTimeout(erasingTimeout)
      } else {
        // Move to next word after erasing complete
        const nextWordTimeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % words.length)
          setIsTyping(true)
        }, 500) // Brief pause before starting next word
        return () => clearTimeout(nextWordTimeout)
      }
    }
  }, [charIndex, isTyping, currentIndex])

  return (
    <div className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-wcm-light-gray mb-8 flex flex-wrap items-center justify-center">
      <span>No&nbsp;</span>
      <span className="relative inline-block">
        <span
          className="inline-block text-wcm-green"
          style={{
            textShadow: "1px 1px 0px #9CF25B, 0 0 5px #9CF25B",
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          {displayedText}
          <span className="animate-pulse ml-1">|</span>
        </span>
      </span>
      <span>&nbsp;Needed</span>
    </div>
  )
}
