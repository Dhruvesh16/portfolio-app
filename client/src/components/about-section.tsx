import { Bug, Layers, Smartphone, Wrench } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-green">About Me</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate about cybersecurity and building robust applications that make the digital world safer.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold text-cyber-blue mb-4">Professional Journey</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                As a junior penetration tester, I specialize in identifying vulnerabilities and strengthening security postures. 
                My passion for cybersecurity drives me to continuously learn and adapt to the evolving threat landscape.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Beyond security, I'm a full-stack developer with expertise in modern web technologies and Android development, 
                allowing me to build comprehensive solutions that prioritize both functionality and security.
              </p>
            </div>
            
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-2xl font-bold text-cyber-green mb-4">VaultSpec Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                I'm building VaultSpec, an organization focused on developing cutting-edge cybersecurity tools and personal 
                productivity applications including password managers, secure cloud storage, and privacy-focused gallery solutions.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-xl p-6 text-center">
                <Bug className="mx-auto text-cyber-blue mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Penetration Testing</h4>
                <p className="text-slate-400 text-sm">Vulnerability Assessment & Ethical Hacking</p>
              </div>
              <div className="glass-effect rounded-xl p-6 text-center">
                <Layers className="mx-auto text-cyber-green mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Full-Stack</h4>
                <p className="text-slate-400 text-sm">Modern Web Applications</p>
              </div>
              <div className="glass-effect rounded-xl p-6 text-center">
                <Smartphone className="mx-auto text-cyber-blue mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Operating Systems</h4>
                <p className="text-slate-400 text-sm">System Administration & Architecture</p>
              </div>
              <div className="glass-effect rounded-xl p-6 text-center">
                <Wrench className="mx-auto text-cyber-green mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Tool Builder</h4>
                <p className="text-slate-400 text-sm">Custom Security Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
