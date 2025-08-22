import { useState } from 'react';
import { Database, Code, Brain, Cloud, Palette, Users } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('technical');

  const skillCategories = {
    technical: {
      title: "Technical Skills",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "Python", level: 90, category: "Programming" },
        { name: "JavaScript", level: 78, category: "Programming" },
        { name: "Machine Learning", level: 88, category: "AI/ML" },
        { name: "TensorFlow", level: 85, category: "AI/ML" },
        { name: "AWS", level: 80, category: "Cloud" },
        { name: "SQL", level: 85, category: "Database" },
        { name: "Docker", level: 75, category: "DevOps" },
        { name: "React", level: 78, category: "Web Dev" },
        { name: "Flask/FastAPI", level: 82, category: "Backend" },
        { name: "Flutter", level: 75, category: "Mobile Dev" }
      ]
    },
    data: {
      title: "Data & Analytics",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "Pandas", level: 90, category: "Data Processing" },
        { name: "NumPy", level: 88, category: "Data Processing" },
        { name: "Power BI", level: 85, category: "Visualization" },
        { name: "Tableau", level: 80, category: "Visualization" },
        { name: "MySQL", level: 85, category: "Database" },
        { name: "BigQuery", level: 75, category: "Big Data" },
        { name: "Matplotlib", level: 85, category: "Visualization" },
        { name: "Seaborn", level: 83, category: "Visualization" },
        { name: "VBA", level: 75, category: "Automation" },
        { name: "Matlab", level: 70, category: "Scientific Computing" },
        { name: "Scikit-learn", level: 85, category: "ML Libraries" },
        { name: "Time-Series Analysis", level: 78, category: "Analytics" }
      ]
    },
    ai: {
      title: "AI & ML",
      icon: <Brain className="w-5 h-5" />,
      skills: [
        { name: "Deep Learning", level: 87, category: "Neural Networks" },
        { name: "Computer Vision", level: 85, category: "CV" },
        { name: "NLP", level: 80, category: "Language" },
        { name: "LangChain", level: 78, category: "LLM" },
        { name: "Hugging Face", level: 82, category: "Models" },
        { name: "Prompt Engineering", level: 88, category: "LLM" },
        { name: "RAG", level: 75, category: "Retrieval" },
        { name: "LLM Fine-tuning", level: 75, category: "Models" }
      ]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        { name: "AWS EC2", level: 80, category: "Compute" },
        { name: "AWS S3", level: 85, category: "Storage" },
        { name: "Azure AI", level: 75, category: "AI Services" },
        { name: "Docker", level: 75, category: "Containerization" },
        { name: "Kubernetes", level: 70, category: "Orchestration" },
        { name: "GitHub", level: 88, category: "Version Control" },
        { name: "REST APIs", level: 85, category: "Integration" },
        { name: "Streamlit", level: 82, category: "Deployment" },
        { name: "WordPress", level: 78, category: "CMS" },
        { name: "POSIT", level: 72, category: "Analytics" }
      ]
    },
    soft: {
      title: "Soft Skills",
      icon: <Users className="w-5 h-5" />,
      skills: [
        { name: "Team Leadership", level: 85, category: "Leadership" },
        { name: "Public Speaking", level: 80, category: "Communication" },
        { name: "Analytical Thinking", level: 90, category: "Problem Solving" },
        { name: "Creativity", level: 88, category: "Innovation" },
        { name: "Event Coordination", level: 82, category: "Management" },
        { name: "Project Management", level: 78, category: "Organization" },
        { name: "Collaboration", level: 87, category: "Teamwork" },
        { name: "Adaptability", level: 85, category: "Flexibility" }
      ]
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-gradient">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent, scalable solutions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            {skillCategories[activeCategory].title}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className="card-elegant p-6 rounded-xl hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.category}</p>
                  </div>
                  <span className="font-bold text-primary">{skill.level}%</span>
                </div>
                
                {/* Skill Progress Bar */}
                <div className="skill-bar h-3">
                  <div
                    className="skill-progress h-full rounded-full"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1 + 0.5}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-scale-in">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Technical Skills</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">5+</div>
            <div className="text-muted-foreground">Programming Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Frameworks & Tools</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">3+</div>
            <div className="text-muted-foreground">Cloud Platforms</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;