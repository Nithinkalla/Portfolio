import { Github, Linkedin, Mail, Code } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ]

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Nithinkalla",
      icon: Github,
      color: "bg-gray-700 hover:bg-gray-600"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nithinkalla",
      icon: Linkedin,
      color: "bg-blue-600 hover:bg-blue-500"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/nithinkalla/",
      icon: Code,
      color: "bg-yellow-600 hover:bg-yellow-500"
    },
    {
      name: "Email",
      url: "mailto:nithinkalla2004@gmail.com",
      icon: Mail,
      color: "bg-red-600 hover:bg-red-500"
    }
  ]

  return (
    <footer className="bg-gray-900 dark:bg-dark-bg text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" data-testid="footer-name">Kalla Nithin</h3>
            <p className="text-gray-300 leading-relaxed" data-testid="footer-description">
              Aspiring Software Engineer passionate about creating innovative solutions with modern technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-quick-links-title">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-social-title">Connect With Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`w-10 h-10 ${social.color} rounded-lg flex items-center justify-center transition-colors`}
                  data-testid={`footer-social-${social.name.toLowerCase()}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p data-testid="footer-copyright">
            &copy; 2024 Kalla Nithin. All rights reserved. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  )
}
