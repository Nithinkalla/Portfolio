import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Aspiring Software Engineer"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="hero-name">
            KALLA NITHIN
          </h1>
          <div className="text-xl md:text-2xl mb-8 typing-animation inline-block" data-testid="hero-tagline">
            {typedText}
          </div>
          <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto" data-testid="hero-description">
            Passionate about building scalable, AI-driven solutions with expertise in full-stack development, machine learning, and mobile applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              data-testid="button-view-work"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              data-testid="button-contact"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
