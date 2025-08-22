import { Briefcase, MapPin, Calendar, TrendingUp, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "UI/UX & App Development Intern",
      company: "Centle",
      duration: "May 2025 – Present",
      location: "Remote/Hyderabad",
      type: "Current Position",
      achievements: [
        "Developed Python algorithms for ride-sharing with ML-based demand prediction",
        "Implemented route optimization using machine learning",
        "Created mobile-first UI/UX designs for digital products",
        "Collaborated on Flutter app development and web platforms"
      ],
      technologies: ["Python", "UI/UX Design", "Flutter", "ML Algorithms", "Figma", "Route Optimization"],
      color: "primary"
    },
    {
      role: "AI/ML Virtual Intern",
      company: "AICTE – Google",
      duration: "Apr – Jun 2024",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Improved object detection accuracy to 95%",
        "Reduced latency in image retrieval by 30%",
        "Hands-on experience with Vertex AI and prompt design",
        "Implemented real-time AI solutions"
      ],
      technologies: ["Vertex AI", "TensorFlow", "Computer Vision", "Prompt Engineering", "Real-time Processing"],
      color: "accent"
    },
    {
      role: "AI/ML Virtual Intern",
      company: "AICTE – AWS",
      duration: "Jan – Mar 2024",
      location: "Remote",
      type: "Internship",
      achievements: [
        "Achieved 92%+ image classification accuracy using CNNs",
        "Implemented EC2 auto-scaling and S3 optimization strategies",
        "Enhanced system availability and performance",
        "Gained proficiency in AWS automation and large-scale deployment"
      ],
      technologies: ["AWS EC2", "S3", "TensorFlow", "CNNs", "Auto-scaling", "Cloud Architecture"],
      color: "primary"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-gradient">
            Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Professional journey in AI/ML development and cloud technologies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`animate-slide-up card-elegant rounded-xl overflow-hidden hover-lift group ${
                index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
              }`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  {/* Left Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-full ${
                        exp.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                      } group-hover:scale-110 transition-transform duration-300`}>
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {exp.role}
                        </h3>
                        <p className={`text-lg font-semibold ${
                          exp.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`}>
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exp.color === 'primary' 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-accent/10 text-accent'
                      }`}>
                        {exp.type}
                      </span>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <TrendingUp size={16} className="text-accent" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <Award size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Content - Technologies */}
                  <div className="lg:w-1/3">
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Border */}
              <div className={`h-1 ${
                exp.color === 'primary' ? 'bg-gradient-to-r from-primary to-primary-glow' : 'bg-gradient-to-r from-accent to-accent-glow'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-scale-in">
          <div className="text-center p-6 card-elegant rounded-xl hover-scale">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-muted-foreground">Months of Experience</div>
          </div>
          <div className="text-center p-6 card-elegant rounded-xl hover-scale">
            <div className="text-3xl font-bold text-accent mb-2">3</div>
            <div className="text-muted-foreground">Major Internships</div>
          </div>
          <div className="text-center p-6 card-elegant rounded-xl hover-scale">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Highest Accuracy Achieved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;