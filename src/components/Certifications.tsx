import { Award, Trophy, Star, Calendar } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Best Project Award",
      subtitle: "Continuous Remote Alcohol Monitoring (CRAM)",
      issuer: "Academic Institution",
      year: "2024",
      type: "award",
      color: "gold",
      description: "Recognized for innovative IoT-based alcohol monitoring system"
    },
    {
      title: "2nd Prize – MPSTAR Contest",
      subtitle: "Azura 2k24",
      issuer: "Competition",
      year: "2024",
      type: "award",
      color: "silver",
      description: "Technical competition achievement in emerging technologies"
    }
  ];

  const professionalCerts = [
    {
      category: "Microsoft Learn",
      count: "38 Badges, 7 Trophies",
      specializations: ["Azure AI Fundamentals", "Data Fundamentals", "Cloud Computing"],
      color: "primary",
      icon: "🎯"
    },
    {
      category: "Salesforce Trailblazer",
      count: "73 Badges, 7 Superbadges",
      specializations: ["Agentic AI", "Prompt Engineering", "CRM Solutions"],
      color: "accent",
      icon: "🚀"
    },
    {
      category: "AWS & Google Cloud",
      count: "5+ Certifications",
      specializations: ["CCops 2025", "Vertex AI Prompt Design", "Cloud Architecture"],
      color: "primary",
      icon: "☁️"
    },
    {
      category: "Other Specializations",
      count: "3+ Certifications",
      specializations: ["Broadcom Virtualization", "DevOps", "Data Analytics"],
      color: "accent",
      icon: "⚡"
    }
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-gradient">
            Certifications & Awards
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Recognition for excellence in AI/ML, cloud technologies, and innovative project development
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">🏆 Awards & Achievements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`card-elegant p-6 rounded-xl hover-lift animate-slide-up group ${
                  cert.color === 'gold' ? 'border-l-4 border-yellow-400' : 'border-l-4 border-gray-400'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${
                    cert.color === 'gold' 
                      ? 'bg-yellow-100 text-yellow-600' 
                      : 'bg-gray-100 text-gray-600'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <Trophy size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className={`font-semibold mb-2 ${
                      cert.color === 'gold' ? 'text-yellow-600' : 'text-gray-600'
                    }`}>
                      {cert.subtitle}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>{cert.issuer}</span>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{cert.year}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">🎓 Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {professionalCerts.map((cert, index) => (
              <div
                key={index}
                className="card-elegant p-6 rounded-xl hover-lift animate-slide-up group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {cert.category}
                    </h4>
                    <div className={`text-lg font-semibold mb-3 ${
                      cert.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`}>
                      {cert.count}
                    </div>
                    <div className="space-y-2">
                      {cert.specializations.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center gap-2">
                          <Star size={14} className={cert.color === 'primary' ? 'text-primary' : 'text-accent'} />
                          <span className="text-muted-foreground text-sm">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-scale-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">120+</div>
            <div className="text-muted-foreground">Total Badges</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Major Awards</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">4+</div>
            <div className="text-muted-foreground">Platforms</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="card-elegant p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">Continuous Learning Journey</h3>
            <p className="text-muted-foreground mb-6">
              Always exploring new technologies and earning certifications to stay at the forefront of AI/ML innovation. 
              Currently working towards advanced cloud certifications and specialized AI credentials.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Next: AWS Solutions Architect
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Learning: Advanced MLOps
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;