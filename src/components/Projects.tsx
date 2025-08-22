import { useState } from 'react';
import { ExternalLink, Github, Eye, Shield, Brain, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Malpractice Detection in Exams",
      category: "Computer Vision & AI",
      description: "Advanced AI system analyzing exam hall footage and multi-modal data to detect cheating behaviors",
      longDescription: "Our system analyzes exam hall footage and multi-modal data using advanced algorithms to detect cheating by identifying unauthorized objects and multiple persons. It adapts to evolving cheating tactics in real time while ensuring transparency, privacy, and ethical standards.",
      icon: <Eye className="w-6 h-6" />,
      technologies: ["Computer Vision", "Multi-modal AI", "Real-time Processing", "Object Detection", "Python", "Privacy Tech"],
      achievements: [
        "Real-time cheating detection system",
        "Multi-modal data analysis capability",
        "Unauthorized object identification",
        "Privacy-preserving design with ethical standards"
      ],
      status: "Completed",
      year: "2024",
      color: "primary"
    },
    {
      id: 2,
      title: "Brain Stroke Detection System",
      category: "Healthcare AI",
      description: "ML-based diagnosis system using SVM, Decision Tree, AdaBoost, and Passive-Aggressive algorithms",
      longDescription: "We proposed a machine learning-based diagnosis method for identifying brain stroke using four advanced algorithms: SVM, Decision Tree, AdaBooster, and Passive-Aggressive. Led a 5-member team to develop this comprehensive diagnostic system for early stroke detection.",
      icon: <Brain className="w-6 h-6" />,
      technologies: ["Python", "SVM", "Decision Trees", "AdaBoost", "Passive-Aggressive", "Medical AI"],
      achievements: [
        "Project Lead managing 5-member team",
        "4 ML algorithms implementation (SVM, DT, AdaBoost, Passive-Aggressive)",
        "Medical symptom-based stroke prediction",
        "High accuracy diagnostic system"
      ],
      status: "Completed",
      year: "2024",
      color: "accent"
    },
    {
      id: 3,
      title: "Effective Data Hiding Scheme Using ML",
      category: "Cybersecurity & ML",
      description: "Advanced LSB-based image steganography system with encryption for secure data hiding",
      longDescription: "Designed and implemented a sophisticated image steganography system that uses Least Significant Bit (LSB) manipulation combined with machine learning techniques for enhanced security. The system ensures imperceptible data hiding while maintaining image quality through advanced encryption methods.",
      icon: <Shield className="w-6 h-6" />,
      technologies: ["Python", "OpenCV", "Machine Learning", "Cryptography", "Image Processing", "LSB Steganography"],
      achievements: [
        "Achieved PSNR ~30dB for quality assurance",
        "SSIM ~1 for structural similarity",
        "Secure, imperceptible data hiding mechanism",
        "Advanced encryption implementation"
      ],
      status: "Completed",
      year: "2024",
      color: "primary"
    },
    {
      id: 4,
      title: "Continuous Remote Alcohol Monitoring (CRAM)",
      category: "IoT & Monitoring",
      description: "Best Project Award winner - IoT-based system for continuous alcohol monitoring",
      longDescription: "Developed an innovative IoT-based system for continuous remote alcohol monitoring, combining hardware sensors with intelligent software algorithms. This project won the Best Project Award for its innovative approach to public safety and health monitoring.",
      icon: <Award className="w-6 h-6" />,
      technologies: ["IoT", "Sensors", "Real-time Monitoring", "Python", "Hardware Integration"],
      achievements: [
        "Best Project Award winner",
        "Continuous monitoring capability",
        "Real-time data transmission",
        "Innovative IoT implementation"
      ],
      status: "Award Winner",
      year: "2024",
      color: "accent"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-gradient">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Innovative solutions showcasing expertise in AI/ML, cybersecurity, and healthcare technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`card-elegant rounded-xl overflow-hidden hover-lift group animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-full ${
                    project.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Award Winner'
                        ? 'bg-yellow-100 text-yellow-800'
                        : project.color === 'primary'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-accent/10 text-accent'
                    }`}>
                      {project.status}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className={`text-sm font-medium mb-3 ${
                  project.color === 'primary' ? 'text-primary' : 'text-accent'
                }`}>
                  {project.category}
                </p>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    onClick={() => setSelectedProject(project)}
                    variant="outline"
                    size="sm"
                    className="flex-1 hover-scale"
                  >
                    <Eye size={16} className="mr-2" />
                    View Details
                  </Button>
                </div>
              </div>

              {/* Bottom Border */}
              <div className={`h-1 ${
                project.color === 'primary' 
                  ? 'bg-gradient-to-r from-primary to-primary-glow' 
                  : 'bg-gradient-to-r from-accent to-accent-glow'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
            <div className="bg-background rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full ${
                      selectedProject.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                    }`}>
                      {selectedProject.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                      <p className={`font-medium ${
                        selectedProject.color === 'primary' ? 'text-primary' : 'text-accent'
                      }`}>
                        {selectedProject.category}
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setSelectedProject(null)}
                    variant="outline"
                    size="sm"
                  >
                    ✕
                  </Button>
                </div>

                <p className="text-muted-foreground mb-6">{selectedProject.longDescription}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {selectedProject.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <Award size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center p-6 card-elegant rounded-xl hover-scale">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Major Projects</div>
          </div>
          <div className="text-center p-6 card-elegant rounded-xl hover-scale">
            <div className="text-3xl font-bold text-accent mb-2">1</div>
            <div className="text-muted-foreground">Award Winner</div>
          </div>
          <div className="text-center p-6 card-elegant rounded-xl hover-scale">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-muted-foreground">Team Members Led</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;