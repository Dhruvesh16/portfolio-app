import { Shield, Code, Wrench, CheckCircle } from "lucide-react";

export default function SkillsSection() {
  const securitySkills = [
    "Penetration Testing",
    "Vulnerability Assessment", 
    "Network Security",
    "OWASP Top 10",
    "Security Auditing",
    "Burp Suite & Metasploit"
  ];

  const developmentSkills = [
    "React & Node.js",
    "Python & Django", 
    "Android (Java/Kotlin)",
    "Database Design",
    "RESTful APIs",
    "Docker & AWS"
  ];

  const toolsSkills = [
    "Kali Linux & Parrot OS",
    "Wireshark & Nmap",
    "Git & GitHub",
    "VS Code & Android Studio", 
    "Postman & Insomnia",
    "Firebase & MongoDB"
  ];

  return (
    <section id="skills" className="py-20 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-green">Skills & Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive skill set spanning cybersecurity, development, and tool creation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Security Skills */}
          <div className="skill-card glass-effect rounded-xl p-8">
            <div className="text-center mb-6">
              <Shield className="mx-auto text-cyber-blue mb-4" size={48} />
              <h3 className="text-2xl font-bold text-cyber-blue">Cybersecurity</h3>
            </div>
            <ul className="space-y-3">
              {securitySkills.map((skill, index) => (
                <li key={index} className="flex items-center text-slate-300">
                  <CheckCircle className="text-cyber-green mr-3 flex-shrink-0" size={16} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Development Skills */}
          <div className="skill-card glass-effect rounded-xl p-8">
            <div className="text-center mb-6">
              <Code className="mx-auto text-cyber-green mb-4" size={48} />
              <h3 className="text-2xl font-bold text-cyber-green">Development</h3>
            </div>
            <ul className="space-y-3">
              {developmentSkills.map((skill, index) => (
                <li key={index} className="flex items-center text-slate-300">
                  <CheckCircle className="text-cyber-blue mr-3 flex-shrink-0" size={16} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tools & Technologies */}
          <div className="skill-card glass-effect rounded-xl p-8">
            <div className="text-center mb-6">
              <Wrench className="mx-auto text-amber-500 mb-4" size={48} />
              <h3 className="text-2xl font-bold text-amber-500">Tools & Tech</h3>
            </div>
            <ul className="space-y-3">
              {toolsSkills.map((skill, index) => (
                <li key={index} className="flex items-center text-slate-300">
                  <CheckCircle className="text-cyber-green mr-3 flex-shrink-0" size={16} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
