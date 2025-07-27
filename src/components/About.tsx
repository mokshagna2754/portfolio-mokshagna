import { Brain, Code, History, Trophy } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI/ML Innovation",
      description: "Passionate about cutting-edge artificial intelligence and machine learning technologies"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with modern web technologies and cloud platforms"
    },
    {
      icon: <History className="w-6 h-6" />,
      title: "Historical Curiosity",
      description: "Fascinated by history and how past innovations shape our technological future"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Competitive Spirit",
      description: "Active badminton player who brings the same competitive drive to coding challenges"
    }
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-gradient">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              Driven by <span className="text-gradient">Innovation</span> and <span className="text-gradient">Creativity</span>
            </h3>
            
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                As a passionate AI/ML developer and data analyst, I'm on a mission to solve real-world problems 
                through intelligent automation and innovative technology solutions. My journey in artificial 
                intelligence is fueled by curiosity and a deep desire to create meaningful impact.
              </p>
              
              <p>
                When I'm not coding or training models, you'll find me exploring historical narratives, 
                competing on the badminton court, or diving deep into the latest advancements in generative AI. 
                This diverse range of interests helps me approach technical challenges with creativity and 
                a unique perspective.
              </p>
              
              <p>
                My technical expertise spans across cloud platforms, generative AI, and full-stack development, 
                always with a focus on delivering scalable, efficient solutions that make a difference.
              </p>
            </div>
          </div>

          {/* Right Content - Interest Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-in-right">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="card-elegant p-6 rounded-xl hover-lift group"
              >
                <div className="text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                  {interest.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {interest.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-scale-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
            <div className="text-muted-foreground">Certifications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Internships</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">95%</div>
            <div className="text-muted-foreground">Accuracy Achieved</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;