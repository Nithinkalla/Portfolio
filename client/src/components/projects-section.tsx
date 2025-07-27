import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      id: "virtual-tryon",
      title: "Virtual Try-On System",
      description: "An ML-powered virtual try-on system with personalized outfit recommendations using collaborative and content-based filtering algorithms.",
      technologies: ["Python", "Machine Learning", "React.js", "Flask"],
      techColors: ["blue", "green", "purple", "orange"],
      icon: "fas fa-tshirt",
      gradient: "from-purple-500 to-pink-600",
      githubUrl: "https://github.com/Nithinkalla",
    },
    {
      id: "art-classification",
      title: "Art Style Classification",
      description: "Machine learning model to categorize artworks by visual features using computer vision and advanced ML techniques for accurate classification.",
      technologies: ["Python", "OpenCV", "Scikit-Learn", "Matplotlib"],
      techColors: ["blue", "red", "yellow", "green"],
      icon: "fas fa-palette",
      gradient: "from-indigo-500 to-cyan-600",
      githubUrl: "https://github.com/Nithinkalla",
    },
    {
      id: "mobile-apps",
      title: "Mobile Applications",
      description: "Collection of Android applications featuring learning apps, recipe search, and user authentication with Firebase backend and ML Kit integration.",
      technologies: ["Java", "Android", "Firebase", "ML Kit"],
      techColors: ["orange", "green", "yellow", "purple"],
      icon: "fas fa-mobile-alt",
      gradient: "from-emerald-500 to-teal-600",
      githubUrl: "https://github.com/Nithinkalla",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300",
      green: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300",
      purple: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300",
      orange: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300",
      red: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300",
      yellow: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300",
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white" data-testid="projects-title">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="projects-description">
            Here are some of my recent projects that showcase my skills in full-stack development, machine learning, and mobile applications.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card bg-white dark:bg-dark-surface rounded-xl shadow-lg overflow-hidden"
              data-testid={`project-card-${project.id}`}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <i className={`${project.icon} text-3xl`}></i>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white" data-testid={`project-title-${project.id}`}>
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed" data-testid={`project-description-${project.id}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs ${getColorClasses(project.techColors[techIndex])}`}
                      data-testid={`project-tech-${project.id}-${tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <Button
                    asChild
                    className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
                    data-testid={`project-github-${project.id}`}
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-surface-light"
                    data-testid={`project-demo-${project.id}`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700"
            data-testid="button-view-all-projects"
          >
            <a href="https://github.com/Nithinkalla" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
