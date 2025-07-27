import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container-custom">
        <div className="text-center">
          {/* Main Footer Content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold font-poppins mb-4 text-gradient">
              Mokshagna Bingi
            </h3>
            <p className="text-secondary-foreground/80 max-w-md mx-auto">
              AI/ML Developer passionate about creating intelligent solutions 
              and pushing the boundaries of technology.
            </p>
          </div>

          {/* Made With Love Section */}
          <div className="flex items-center justify-center gap-2 text-secondary-foreground/60 mb-6">
            <span>Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>using</span>
            <Code size={16} className="text-blue-400" />
            <span>and lots of</span>
            <Coffee size={16} className="text-amber-400" />
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-secondary-foreground/20">
            <p className="text-secondary-foreground/60 text-sm">
              © {currentYear} Mokshagna Bingi. All rights reserved.
            </p>
            <p className="text-secondary-foreground/40 text-xs mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;