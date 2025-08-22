import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech – AI/ML",
      institution: "CMR College of Engineering and Technology",
      duration: "2021 – 2025",
      grade: "CGPA: 7.82/10",
      type: "undergraduate",
      description: "Specialized in Artificial Intelligence and Machine Learning with focus on deep learning, computer vision, and data analytics."
    },
    {
      degree: "Class XII",
      institution: "Sri Gayatri Junior College",
      duration: "2019 – 2021",
      grade: "97.2%",
      type: "intermediate",
      description: "TSBIE Board with exceptional performance in Mathematics, Physics, and Chemistry."
    },
    {
      degree: "Class X",
      institution: "Tejaswi High School",
      duration: "2018 – 2019",
      grade: "9.2/10",
      type: "secondary",
      description: "SSC Board with strong foundation in core subjects and extracurricular activities."
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-gradient">
            Education
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A strong academic foundation in technology and sciences, building the pathway to innovation
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary/20"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                }`}>
                  <div className="card-elegant p-6 rounded-xl hover-lift group">
                    {/* Institution Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <GraduationCap size={24} />
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={16} className="mr-1" />
                        {edu.duration}
                      </div>
                    </div>

                    {/* Degree */}
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      {edu.institution}
                    </h4>

                    {/* Grade */}
                    <div className="flex items-center mb-3">
                      <Award size={16} className="text-accent mr-2" />
                      <span className="font-semibold text-accent">{edu.grade}</span>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm">
                      {edu.description}
                    </p>

                    {/* Education Type Badge */}
                    <div className="mt-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        edu.type === 'undergraduate' 
                          ? 'bg-primary/10 text-primary' 
                          : edu.type === 'intermediate'
                          ? 'bg-accent/10 text-accent'
                          : 'bg-secondary/10 text-secondary'
                      }`}>
                        {edu.type.charAt(0).toUpperCase() + edu.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Highlights */}
        <div className="mt-16 animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Academic Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 card-elegant rounded-xl hover-scale">
              <div className="text-3xl font-bold text-primary mb-2">97.2%</div>
              <div className="text-muted-foreground">Highest Score in Intermediate</div>
            </div>
            <div className="text-center p-6 card-elegant rounded-xl hover-scale">
              <div className="text-3xl font-bold text-accent mb-2">7.82</div>
              <div className="text-muted-foreground">Current CGPA in B.Tech</div>
            </div>
            <div className="text-center p-6 card-elegant rounded-xl hover-scale">
              <div className="text-3xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground">Years of Technical Education</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;