import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Eye, Download, X, FileText, GraduationCap, Code, Bot, Smartphone } from "lucide-react"

export function ResumeSection() {
  const [modalOpen, setModalOpen] = useState(false)

  const downloadResume = () => {
    // Create a download link for the resume
    const link = document.createElement('a')
    link.href = '/resume.pdf' // This would be served from the public directory
    link.download = 'Kalla_Nithin_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const highlights = [
    {
      icon: GraduationCap,
      text: "B.Tech CSE (8.68 CGPA)",
      color: "text-blue-600"
    },
    {
      icon: Code,
      text: "Full-Stack Developer",
      color: "text-blue-600"
    },
    {
      icon: Bot,
      text: "ML Engineer",
      color: "text-blue-600"
    },
    {
      icon: Smartphone,
      text: "Android Developer",
      color: "text-blue-600"
    }
  ]

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white" data-testid="resume-title">
            Resume
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300" data-testid="resume-description">
            Download my complete resume to learn more about my experience and qualifications.
          </p>
        </div>
        
        <div className="bg-white dark:bg-dark-bg rounded-xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white" data-testid="resume-subtitle">
                Professional Resume
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed" data-testid="resume-details">
                My comprehensive resume includes detailed information about my education, technical skills, projects, certifications, and achievements. It showcases my journey as an aspiring software engineer with hands-on experience in full-stack development and machine learning.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 text-gray-600 dark:text-gray-300"
                    data-testid={`resume-highlight-${index}`}
                  >
                    <highlight.icon className={`w-5 h-5 ${highlight.color}`} />
                    <span>{highlight.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="w-32 h-40 bg-gray-100 dark:bg-dark-surface-light rounded-lg flex items-center justify-center shadow-inner" data-testid="resume-preview">
                <FileText className="w-12 h-12 text-red-500" />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                  <DialogTrigger asChild>
                    <Button 
                      className="bg-blue-600 text-white hover:bg-blue-700"
                      data-testid="button-view-resume"
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      View Resume
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-hidden">
                    <DialogHeader>
                      <DialogTitle>Resume Preview</DialogTitle>
                    </DialogHeader>
                    <div className="p-4">
                      <div className="bg-gray-100 dark:bg-dark-surface-light rounded-lg p-8 text-center">
                        <FileText className="w-16 h-16 text-red-500 mb-4 mx-auto" />
                        <p className="text-gray-600 dark:text-gray-300 mb-4" data-testid="resume-preview-message">
                          Resume preview would be displayed here
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          In a real implementation, you would integrate a PDF viewer library to display the resume inline
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                
                <Button
                  variant="outline"
                  onClick={downloadResume}
                  className="border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                  data-testid="button-download-resume"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
