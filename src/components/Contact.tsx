import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "mokshagnabingi2754@gmail.com",
      link: "mailto:mokshagnabingi2754@gmail.com",
      color: "primary"
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91-8008291411",
      link: "tel:+918008291411",
      color: "accent"
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      value: "Mokshagna Bingi",
      link: "https://linkedin.com/in/mokshagna-bingi-a299a6229",
      color: "accent"
    },
    {
      icon: <Github size={20} />,
      label: "GitHub",
      value: "View Projects",
      link: "https://github.com/mokshagna",
      color: "primary"
    }
  ];

  const additionalLinks = [
    {
      name: "Microsoft Learn Profile",
      url: "https://learn.microsoft.com/users/mokshagna",
      description: "38 Badges, 7 Trophies in Azure AI & Data"
    },
    {
      name: "Salesforce Trailblazer",
      url: "https://trailblazer.me/mokshagna",
      description: "73 Badges, 7 Superbadges in AI & CRM"
    },
    {
      name: "Linktree Profile",
      url: "https://linktr.ee/mokshagna",
      description: "All social links and portfolio"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4 text-gradient">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ready to collaborate on exciting AI/ML projects or discuss innovative tech solutions? 
            Let's build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground mb-8">Get In Touch</h3>
            
            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 card-elegant rounded-xl hover-lift group transition-all duration-300"
                >
                  <div className={`p-3 rounded-full ${
                    contact.color === 'primary' ? 'bg-primary/10 text-primary' : 'bg-accent/10 text-accent'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    {contact.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {contact.label}
                    </p>
                    <p className="text-muted-foreground">{contact.value}</p>
                  </div>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Additional Links */}
            <div>
              <h4 className="text-xl font-semibold text-foreground mb-4">Professional Profiles</h4>
              <div className="space-y-3">
                {additionalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                          {link.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="card-elegant p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                    rows={5}
                    required
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-semibold hover-scale"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </Button>
              </form>

              {/* Quick Contact Options */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Or reach out directly via:
                </p>
                <div className="flex justify-center gap-4">
                  <a
                    href="mailto:mokshagnabingi2754@gmail.com"
                    className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover-scale transition-all duration-300"
                    title="Send Email"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="https://linkedin.com/in/mokshagna-bingi-a299a6229"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-accent text-accent-foreground hover:bg-accent/90 hover-scale transition-all duration-300"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="https://github.com/mokshagna"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 hover-scale transition-all duration-300"
                    title="GitHub Profile"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Response Time Notice */}
        <div className="mt-12 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 text-accent rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">
              Usually responds within 24 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;