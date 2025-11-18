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
      year: "2025",
      color: "accent",
      githubUrl: "https://github.com/mokshagna2754/brain-stroke-ml-project"
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
      year: "2025",
      color: "primary",
      githubUrl: "https://github.com/mokshagna2754/Major_Project",
      images: ["/data hiding1.png", "/data hiding2.png"]
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
    },
    {
      id: 5,
      title: "FlavourFlow",
      category: "Full-Stack Development",
      description: "Modern food ordering and management system built with TypeScript and advanced frontend technologies",
      longDescription: "A comprehensive food ordering platform built with TypeScript for robust type safety and modern React patterns. Features include real-time order tracking, menu management, analytics, and intuitive user interface.",
      icon: <Users className="w-6 h-6" />,
      technologies: ["TypeScript", "React", "Food Ordering", "Order Management", "Modern Frontend"],
      achievements: [
        "Real-time order tracking system",
        "Menu management and analytics",
        "Intuitive user interface",
        "Type-safe implementation"
      ],
      status: "Completed",
      year: "2025",
      color: "primary",
      githubUrl: "https://github.com/mokshagna2754/vibe-order-dash",
      images: ["/flavourflow1.jpeg", "/flavourflow2.jpeg", "/flavourflow3.jpeg", "/flavourflow4.jpeg", "/flavourflow5.jpeg"]
    },
    {
      id: 6,
      title: "Aura Calendar",
      category: "UI/UX Design",
      description: "Beautiful and functional calendar application with modern design principles",
      longDescription: "A sophisticated calendar application featuring modern UI/UX design, built with TypeScript for type safety and maintainability. The application provides an elegant user experience with intuitive navigation and visual appeal.",
      icon: <Users className="w-6 h-6" />,
      technologies: ["TypeScript", "React", "Calendar UI", "UX Design", "Modern Design"],
      achievements: [
        "Modern and intuitive calendar interface",
        "Type-safe implementation",
        "Excellent user experience",
        "Beautiful design aesthetics"
      ],
      status: "Completed",
      year: "2025",
      color: "accent",
      githubUrl: "https://github.com/mokshagna2754/aura-calender",
      images: ["/aura calender.png", "/aura calender1.png"]
    },
    {
      id: 7,
      title: "Inventory Optimization System",
      category: "Data Science & AI",
      description: "Python-based system for optimizing inventory management using machine learning",
      longDescription: "An intelligent inventory optimization system leveraging Python and machine learning algorithms to optimize stock levels, reduce costs, and improve supply chain efficiency.",
      icon: <Brain className="w-6 h-6" />,
      technologies: ["Python", "Machine Learning", "Data Science", "Inventory Management", "Optimization"],
      achievements: [
        "Cost reduction through intelligent optimization",
        "Predictive inventory management",
        "Supply chain efficiency improvement",
        "ML-driven decision making"
      ],
      status: "Completed",
      year: "2025",
      color: "primary",
      githubUrl: "https://github.com/mokshagna2754/inventory-optimization"
    },
    {
      id: 8,
      title: "Automation Tools",
      category: "DevOps & Automation",
      description: "JavaScript-based automation tools for streamlining development workflows",
      longDescription: "Comprehensive automation tools built with JavaScript to streamline development workflows, improve productivity, and reduce manual tasks in software development processes.",
      icon: <Shield className="w-6 h-6" />,
      technologies: ["JavaScript", "Automation", "DevOps", "Workflow Optimization"],
      achievements: [
        "Development workflow automation",
        "Productivity improvements",
        "Reduced manual tasks",
        "Efficient tool integration"
      ],
      status: "In Progress",
      year: "2025",
      color: "accent",
      githubUrl: "https://github.com/mokshagna2754/automation"
    },
    {
      id: 9,
      title: "AI Assistant",
      category: "AI & Chatbots",
      description: "Intelligent AI assistant built with JavaScript and modern web technologies",
      longDescription: "An advanced AI assistant application leveraging JavaScript and modern web technologies to provide intelligent, interactive user experiences with natural language processing capabilities.",
      icon: <Brain className="w-6 h-6" />,
      technologies: ["JavaScript", "AI", "Natural Language Processing", "Interactive UI"],
      achievements: [
        "Natural language understanding",
        "Interactive AI assistant",
        "Modern web technologies",
        "User-friendly interface"
      ],
      status: "In Progress",
      year: "2025",
      color: "primary",
      githubUrl: "https://github.com/mokshagna2754/assistant"
    },
    {
      id: 10,
      title: "Currency Converter",
      category: "Web Development",
      description: "Real-time currency conversion application with live exchange rates",
      longDescription: "A web-based currency converter application providing real-time exchange rates and seamless currency conversion functionality for international transactions.",
      icon: <ExternalLink className="w-6 h-6" />,
      technologies: ["Web Development", "APIs", "Real-time Data", "Finance"],
      achievements: [
        "Real-time exchange rates",
        "Multi-currency support",
        "User-friendly interface",
        "Accurate conversions"
      ],
      status: "Completed",
      year: "2025",
      color: "accent",
      githubUrl: "https://github.com/mokshagna2754/currency-convertor"
    },
    {
      id: 14,
      title: "Balloon Insight",
      category: "Data Analytics & Visualization",
      description: "Advanced data insight and visualization platform built with TypeScript",
      longDescription: "A sophisticated data insight platform that provides advanced analytics and visualization capabilities. Built with TypeScript for robust type safety and scalable architecture.",
      icon: <Brain className="w-6 h-6" />,
      technologies: ["TypeScript", "Data Analytics", "Visualization", "Advanced Analytics"],
      achievements: [
        "Advanced data visualization",
        "Type-safe analytics implementation",
        "Scalable architecture",
        "Interactive insights platform"
      ],
      status: "In Progress",
      year: "2025",
      color: "primary",
      githubUrl: "https://github.com/mokshagna2754/balloon-insight"
    },
    {
      id: 15,
      title: "Skin Gleam AI",
      category: "Healthcare AI & Dermatology",
      description: "AI-powered skincare analysis and recommendation system",
      longDescription: "An intelligent skincare analysis platform using AI and machine learning to provide personalized skincare recommendations and skin condition analysis using advanced computer vision techniques.",
      icon: <Users className="w-6 h-6" />,
      technologies: ["TypeScript", "AI", "Computer Vision", "Healthcare", "Machine Learning"],
      achievements: [
        "AI-powered skin analysis",
        "Personalized recommendations",
        "Advanced computer vision integration",
        "Healthcare-focused AI implementation"
      ],
      status: "Completed",
      year: "2025",
      color: "accent",
      githubUrl: "https://github.com/mokshagna2754/skin-gleam-ai",
      images: ["/derma lens1.jpeg", "/derma lens2.jpeg", "/derma lens3.jpeg"]
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
              {/* Project Image */}
              {project.images && project.images.length > 0 && (
                <div className="relative w-full h-48 overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}
              
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
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 text-sm font-medium transition-colors"
                    >
                      <Github size={16} />
                    </a>
                  )}
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

                {/* Project Images Gallery */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Project Screenshots</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedProject.images.map((imageUrl, imgIndex) => (
                        <div key={imgIndex} className="rounded-lg overflow-hidden border border-border">
                          <img 
                            src={imageUrl} 
                            alt={`${selectedProject.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

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

                {/* GitHub Link */}
                {selectedProject.githubUrl && (
                  <div className="flex justify-end gap-2">
                    <a 
                      href={selectedProject.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 text-sm font-medium transition-colors hover-scale"
                    >
                      <Github size={16} />
                      View on GitHub
                      <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Projects Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center p-6 card-elegant rounded-xl hover-scale">
            <div className="text-3xl font-bold text-primary mb-2">12+</div>
            <div className="text-muted-foreground">Total Projects</div>
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