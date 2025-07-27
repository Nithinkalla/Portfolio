export function AboutSection() {
  const skills = [
    "Python", "Java", "JavaScript", "React.js", 
    "Machine Learning", "Android Development", "AWS", "MySQL"
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white" data-testid="about-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6" data-testid="about-description-1">
                I'm an aspiring Software Engineer currently pursuing B.Tech in Computer Science Engineering at Malla Reddy University with a CGPA of 8.68. With hands-on experience in full-stack development, machine learning, and Android applications, I'm passionate about creating innovative solutions that make a difference.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8" data-testid="about-description-2">
                My expertise spans across Python, Java, JavaScript, and the MEAN stack, with a particular interest in building scalable, AI-driven applications. I've successfully developed projects ranging from virtual try-on systems to art classification models, always focusing on practical implementations that solve real-world problems.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-tag px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium cursor-pointer"
                  data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl" data-testid="profile-avatar">
              KN
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300" data-testid="info-location">
                <i className="fas fa-map-marker-alt text-blue-600"></i>
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300" data-testid="info-education">
                <i className="fas fa-graduation-cap text-blue-600"></i>
                <span>B.Tech CSE - 2025</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-300" data-testid="info-cgpa">
                <i className="fas fa-star text-blue-600"></i>
                <span>CGPA: 8.68</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
