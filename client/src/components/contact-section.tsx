import { useState } from "react";
import { Mail, Linkedin, Github, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || "Contact from Portfolio");
    const body = encodeURIComponent(
      `Hi Dhruvesh,\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );
    
    const mailtoLink = `mailto:dhruvesh3466@protonmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: "Opening email client...",
      description: "Your default email application will open with the message pre-filled.",
    });
    
    // Reset form after a short delay
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-cyber-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-green">Get In Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on cybersecurity projects or discuss development opportunities? Let's connect!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-cyber-blue/20 rounded-lg flex items-center justify-center">
                <Mail className="text-cyber-blue" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">Email</h3>
                <p className="text-slate-400">dhruvesh3466@protonmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-cyber-green/20 rounded-lg flex items-center justify-center">
                <Linkedin className="text-cyber-green" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">LinkedIn</h3>
                <p className="text-slate-400">linkedin.com/in/mvs-dhruvesh-370416172</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Github className="text-purple-400" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">GitHub</h3>
                <p className="text-slate-400">github.com/Dhruvesh16</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                <Globe className="text-amber-500" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-slate-200">VaultSpec</h3>
                <p className="text-slate-400">vaultspec.in</p>
              </div>
            </div>
          </div>
          
          <div className="glass-effect rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-slate-300 font-medium mb-2">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-slate-800 border-slate-600 text-slate-200 focus:border-cyber-blue focus:ring-cyber-blue/20"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-slate-300 font-medium mb-2">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-slate-800 border-slate-600 text-slate-200 focus:border-cyber-blue focus:ring-cyber-blue/20"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="subject" className="text-slate-300 font-medium mb-2">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-slate-800 border-slate-600 text-slate-200 focus:border-cyber-blue focus:ring-cyber-blue/20"
                  placeholder="Project Collaboration"
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-slate-300 font-medium mb-2">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-slate-800 border-slate-600 text-slate-200 focus:border-cyber-blue focus:ring-cyber-blue/20 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyber-blue to-cyber-green hover:from-blue-600 hover:to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
