import { Vault, Key, Cloud, Image, Search, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-green">Featured Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of cybersecurity tools and applications I've built to solve real-world problems.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* VaultSpec Organization */}
          <div className="project-card glass-effect rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyber-blue to-cyber-green rounded-lg flex items-center justify-center mr-4">
                <Vault className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyber-blue">VaultSpec</h3>
                <p className="text-slate-400">Cybersecurity Organization</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              A comprehensive cybersecurity organization developing cutting-edge tools for penetration testing, 
              vulnerability assessment, and security automation. Built with scalability and enterprise-grade security in mind.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-cyber-green/20 text-cyber-green rounded-full text-sm">Security Tools</span>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-500 rounded-full text-sm">Automation</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm">Enterprise</span>
            </div>
            <div className="flex gap-4">
              <Button className="flex-1 bg-cyber-blue hover:bg-blue-600 text-white">
                <ExternalLink className="mr-2" size={16} />
                Visit Site
              </Button>
              <Button variant="outline" className="flex-1 border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-white">
                <FaGithub className="mr-2" size={16} />
                GitHub
              </Button>
            </div>
          </div>
          
          {/* Password Manager */}
          <div className="project-card glass-effect rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyber-green to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                <Key className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyber-green">SecureVault</h3>
                <p className="text-slate-400">Password Manager</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              A secure password manager with end-to-end encryption, biometric authentication, and cross-platform sync. 
              Features advanced security measures including zero-knowledge architecture.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-cyber-green/20 text-cyber-green rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-cyber-blue/20 text-cyber-blue rounded-full text-sm">Encryption</span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-500 rounded-full text-sm">Android</span>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-500 rounded-full text-sm">Node.js</span>
            </div>
            <div className="flex gap-4">
              <Button className="flex-1 bg-cyber-green hover:bg-emerald-600 text-white">
                <ExternalLink className="mr-2" size={16} />
                Live Demo
              </Button>
              <Button variant="outline" className="flex-1 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-white">
                <FaGithub className="mr-2" size={16} />
                GitHub
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Secure Drive */}
          <div className="project-card glass-effect rounded-xl p-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-purple-400">SecureDrive</h3>
              <p className="text-slate-400 text-sm">Encrypted Cloud Storage</p>
            </div>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Private cloud storage with client-side encryption and secure file sharing capabilities.
            </p>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1 bg-purple-500 hover:bg-purple-600 text-white">
                Demo
              </Button>
              <Button size="sm" variant="outline" className="flex-1 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white">
                Code
              </Button>
            </div>
          </div>
          
          {/* Private Gallery */}
          <div className="project-card glass-effect rounded-xl p-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Image className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-pink-400">PrivateGallery</h3>
              <p className="text-slate-400 text-sm">Secure Photo Storage</p>
            </div>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Privacy-focused photo gallery with advanced encryption and secure sharing features.
            </p>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1 bg-pink-500 hover:bg-pink-600 text-white">
                Demo
              </Button>
              <Button size="sm" variant="outline" className="flex-1 border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white">
                Code
              </Button>
            </div>
          </div>
          
          {/* Security Scanner */}
          <div className="project-card glass-effect rounded-xl p-6">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-400">VulnScanner</h3>
              <p className="text-slate-400 text-sm">Vulnerability Scanner</p>
            </div>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              Automated vulnerability scanner for web applications with comprehensive reporting.
            </p>
            <div className="flex gap-2">
              <Button size="sm" className="flex-1 bg-red-500 hover:bg-red-600 text-white">
                Demo
              </Button>
              <Button size="sm" variant="outline" className="flex-1 border-red-500 text-red-400 hover:bg-red-500 hover:text-white">
                Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
