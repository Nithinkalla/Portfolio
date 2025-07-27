import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, Linkedin, Loader2 } from "lucide-react"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  })
  const { toast } = useToast()

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      message: ""
    }

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message"
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error !== "")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I will get back to you soon.",
      })
      
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "nithinkalla2004@gmail.com",
      href: "mailto:nithinkalla2004@gmail.com",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7893893697",
      href: "tel:+917893893697",
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/nithinkalla",
      href: "https://www.linkedin.com/in/nithinkalla",
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white" data-testid="contact-title">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300" data-testid="contact-description">
            I'm always interested in new opportunities and collaborations. Let's connect!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white" data-testid="contact-info-title">
              Let's Connect
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed" data-testid="contact-info-description">
              Whether you have a project in mind, want to discuss opportunities, or just want to say hello, I'd love to hear from you. Feel free to reach out through any of these channels.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4" data-testid={`contact-info-${info.title.toLowerCase()}`}>
                  <div className={`w-12 h-12 ${info.color} rounded-lg flex items-center justify-center`}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{info.title}</p>
                    <a 
                      href={info.href} 
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`${info.color.split(' ')[2]} hover:underline`}
                      data-testid={`contact-link-${info.title.toLowerCase()}`}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-dark-surface rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                  Full Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your full name"
                  className="mt-2 bg-white dark:bg-dark-bg"
                  data-testid="input-name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-name">{errors.name}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email address"
                  className="mt-2 bg-white dark:bg-dark-bg"
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-email">{errors.email}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  className="mt-2 bg-white dark:bg-dark-bg"
                  data-testid="input-message"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1" data-testid="error-message">{errors.message}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
