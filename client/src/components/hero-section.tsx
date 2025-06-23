import { Mail, Shield, Lock, Code, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg">
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-slate to-cyber-dark opacity-90"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Professional Avatar */}
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-green p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-cyber-slate flex items-center justify-center">
                <Shield className="text-4xl sm:text-5xl text-cyber-blue" size={64} />
              </div>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-slate-50">Hi, I'm </span>
            <span className="bg-gradient-to-r from-cyber-blue to-cyber-green bg-clip-text text-transparent">Dhruvesh</span>
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-8 space-y-2">
            <div className="animate-float">Jr. Penetration Tester</div>
            <div className="animate-float" style={{ animationDelay: "0.5s" }}>Full-Stack Developer</div>
            <div className="animate-float" style={{ animationDelay: "1s" }}>Android Developer</div>
          </div>
          
          <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed">
            Building secure digital solutions and cybersecurity tools. Founder of{" "}
            <span className="text-cyber-green font-semibold">VaultSpec</span> - 
            pioneering the next generation of cybersecurity technology.
          </p>
          
          <div className="flex justify-center">
            <Button 
              variant="outline"
              onClick={scrollToContact}
              className="border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="mr-2" size={18} />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-cyber-blue opacity-20 animate-float">
        <Lock size={32} />
      </div>
      <div className="absolute bottom-20 right-10 text-cyber-green opacity-20 animate-float" style={{ animationDelay: "1s" }}>
        <Code size={40} />
      </div>
      <div className="absolute top-1/2 left-5 text-cyber-blue opacity-20 animate-float" style={{ animationDelay: "2s" }}>
        <Smartphone size={24} />
      </div>
    </section>
  );
}
