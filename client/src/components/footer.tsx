import { Shield, Linkedin, Github, Twitter, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="text-cyber-blue mr-2" size={24} />
            <span className="text-xl font-bold text-slate-200">Dhruvesh</span>
            <span className="text-slate-400 ml-2">• Cybersecurity Professional</span>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/mvs-dhruvesh-370416172/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyber-blue transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Dhruvesh16" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyber-green transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href="mailto:dhruvesh3466@protonmail.com" className="text-slate-400 hover:text-purple-400 transition-colors duration-300">
              <Twitter size={24} />
            </a>
            <a href="https://vaultspec.in" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-amber-500 transition-colors duration-300">
              <Globe size={24} />
            </a>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 Dhruvesh. All rights reserved. • Built with security in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
