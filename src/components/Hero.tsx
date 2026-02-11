import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Award, Cloud, Database, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "AI/ML Developer | Cloud Analyst | Gen AI Enthusiast";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Animated moving gradient layer */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{ 
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.25) 0%, rgba(249, 115, 22, 0.15) 50%, rgba(139, 92, 246, 0.2) 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 12s ease infinite'
        }} 
      />
      {/* Floating orbs - visible purple & orange */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-70"
        style={{ 
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(249, 115, 22, 0.2) 70%, transparent 100%)',
          animation: 'float-1 18s ease-in-out infinite'
        }} 
      />
      <div 
        className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] rounded-full blur-3xl pointer-events-none opacity-60"
        style={{ 
          background: 'radial-gradient(circle, rgba(249, 115, 22, 0.35) 0%, rgba(139, 92, 246, 0.25) 70%, transparent 100%)',
          animation: 'float-2 22s ease-in-out infinite'
        }} 
      />
      <div 
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl pointer-events-none opacity-50"
        style={{ 
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          animation: 'float-3 15s ease-in-out infinite'
        }} 
      />
      
      <div className="container-custom relative z-10">
        <div className="text-center">
          {/* Profile Image - animates in first */}
          <div className="mb-8 opacity-0" style={{ animation: 'scale-in 0.7s ease-out 0.1s forwards' }}>
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-2xl animate-pulse-glow">
              MB
            </div>
          </div>

          {/* Name - slides up after avatar */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-4 opacity-0" style={{ animation: 'slide-up 0.8s ease-out 0.4s forwards' }}>
            <span className="text-gradient">Mokshagna</span>{' '}
            <span className="text-foreground">Bingi</span>
          </h1>

          {/* Animated Title */}
          <div className="h-16 md:h-20 flex items-center justify-center mb-6 opacity-0" style={{ animation: 'fade-in 0.6s ease-out 0.7s forwards' }}>
            <p className="text-lg md:text-2xl text-muted-foreground font-medium min-h-[2rem]">
              {text}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-secondary font-medium mb-12 max-w-3xl mx-auto opacity-0" style={{ animation: 'slide-up 0.7s ease-out 1s forwards' }}>
            "Crafting intelligent solutions using code and creativity."
          </p>

          {/* Professional Links Grid */}
          <div className="mb-12 opacity-0" style={{ animation: 'slide-up 0.7s ease-out 1.3s forwards' }}>
            <h3 className="text-lg font-semibold text-muted-foreground mb-6">Connect & Explore</h3>
            
            {/* Primary Social Links */}
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://linkedin.com/in/mokshagna-bingi-a299a6229"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover-lift transition-all duration-300"
                title="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/mokshagna2754"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-lift transition-all duration-300"
                title="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a
                href="mailto:mokshagnabingi2754@gmail.com"
                className="p-3 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 hover-lift transition-all duration-300"
                title="Email"
              >
                <Mail size={24} />
              </a>
            </div>

            {/* Professional Platform Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <a
                href="https://linktr.ee/mokshagnabing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-lg bg-muted hover:bg-muted/80 text-foreground hover-lift transition-all duration-300 group"
                title="All Professional Links"
              >
                <ExternalLink size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">All Links</span>
              </a>
              
              <a
                href="https://www.credly.com/users/mokshagna-bingi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-lg bg-muted hover:bg-muted/80 text-foreground hover-lift transition-all duration-300 group"
                title="Credly Certifications"
              >
                <Award size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Credly</span>
              </a>
              
              <a
                href="https://learn.microsoft.com/en-us/users/mokshagnabingi-7423/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-lg bg-muted hover:bg-muted/80 text-foreground hover-lift transition-all duration-300 group"
                title="Microsoft Learn Profile"
              >
                <BookOpen size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">MS Learn</span>
              </a>
              
              <a
                href="https://www.cloudskillsboost.google/public_profiles/8b41f7a4-9e8e-41be-8ada-ba2f708006d1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-lg bg-muted hover:bg-muted/80 text-foreground hover-lift transition-all duration-300 group"
                title="Google Cloud Skills Boost Profile"
              >
                <Cloud size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">GCP</span>
              </a>

              {/* Trailhead moved into grid for consistent styling */}
              <a
                href="https://www.salesforce.com/trailblazer/h51a7328bingimokshagnabtechaim202125"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-3 rounded-lg bg-muted hover:bg-muted/80 text-foreground hover-lift transition-all duration-300 group"
                title="Salesforce Trailblazer Profile"
              >
                <Database size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Trailhead</span>
              </a>
            </div>

            {/* Removed separate gradient Trailhead button for visual consistency */}

          </div>

          {/* CTA Button */}
          <div className="opacity-0" style={{ animation: 'scale-in 0.6s ease-out 1.6s forwards' }}>
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full hover-scale shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore My Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;