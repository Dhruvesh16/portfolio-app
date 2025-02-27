import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import { FaJava, FaReact, FaHtml5, FaCss3Alt, FaGithub, FaLinkedin, FaBuilding, FaShieldAlt, FaMoon, FaSun } from 'react-icons/fa'
import { SiKotlin, SiJavascript, SiGnubash, SiProtonmail } from 'react-icons/si'
import { GiMountainClimbing } from 'react-icons/gi'
import { TbBrandAndroid } from 'react-icons/tb'

function App() {
  // Add theme state
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark'; // Default to dark theme
  });
  
  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };
  
  // Apply theme on initial render
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  }

  return (
    <div className="app-container">
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <div className="nav-logo">
            <motion.span 
              className="logo-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {"<Dhruvesh />"}
            </motion.span>
          </div>
          <motion.div 
            className="nav-links"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#home">Home</a>
            <a href="#organizations">Organizations</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            
            {/* Theme toggle button */}
            <motion.button
  className="theme-toggle"
  onClick={toggleTheme}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  aria-label="Toggle theme"
>
  <FaMoon className="moon-icon" />
  <FaSun className="sun-icon" />
</motion.button>
          </motion.div>
        </div>
      </motion.nav>

      <motion.section 
        id="home" 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container">
          <motion.div 
            className="profile-image-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <img 
              src="/images/profile.jpg" 
              alt="Dhruvesh Portrait" 
              className="profile-image" 
            />
          </motion.div>
          <motion.h1 {...fadeInUp}>Hi, I'm Dhruvesh</motion.h1>
          <motion.p 
            className="hero-text"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Full Stack Developer & AOSP Developer
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        id="organizations" 
        className="organizations-section"
        {...staggerContainer}
      >
        <div className="container">
          <motion.h2 {...fadeInUp}>My Organizations</motion.h2>
          <motion.div className="organizations-grid" {...staggerContainer}>
            <motion.div 
              className="organization-card"
              {...fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <div className="organization-logo">
                <FaBuilding size={40} />
              </div>
              <h3>Velosta</h3>
              <span className="organization-role">Co-Founder</span>
              <p>A travel tertiary platform providing innovative solutions for modern travelers.</p>
            </motion.div>
            
            <motion.div 
              className="organization-card"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="organization-logo">
                <FaShieldAlt size={40} />
              </div>
              <h3>VaultSpec</h3>
              <span className="organization-role">Founder</span>
              <p>Cybersecurity startup creating secure products for consumers and businesses.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="skills" 
        className="skills-section"
        {...staggerContainer}
      >
        <div className="container">
          <motion.h2 {...fadeInUp}>Skills & Technologies</motion.h2>
          <motion.div className="skills-grid" {...staggerContainer}>
            {[
              { icon: FaJava, text: "Java" },
              { icon: SiKotlin, text: "Kotlin" },
              { icon: FaReact, text: "React" },
              { icon: SiJavascript, text: "JavaScript" },
              { icon: FaHtml5, text: "HTML5" },
              { icon: FaCss3Alt, text: "CSS3" },
              { icon: SiGnubash, text: "Penetration Testing" }
            ].map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-card"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <skill.icon className="skill-icon" />
                <span>{skill.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="projects" 
        className="projects-section"
        {...staggerContainer}
      >
        <div className="container">
          <motion.h2 {...fadeInUp}>AOSP Projects</motion.h2>
          <motion.div className="projects-grid" {...staggerContainer}>
            {[
              { 
                icon: GiMountainClimbing, 
                title: "Everest-AOSP",
                description: "Lead Developer & Maintainer" 
              },
              { 
                icon: TbBrandAndroid, 
                title: "droidxUI",
                description: "Core Developer" 
              },
              { 
                icon: TbBrandAndroid, 
                title: "ProjectFlare",
                description: "Core Developer" 
              }
            ].map((project, index) => (
              <motion.div 
                key={index}
                className="project-card"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <project.icon className="project-icon" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section 
        id="contact" 
        className="contact-section"
        {...staggerContainer}
      >
        <div className="container">
          <motion.h2 {...fadeInUp}>Connect With Me</motion.h2>
          <motion.div className="contact-links" {...staggerContainer}>
            {[
              { icon: FaGithub, text: "GitHub", href: "https://github.com/Dhruvesh16" },
              { icon: FaLinkedin, text: "LinkedIn", href: "https://www.linkedin.com/in/mvs-dhruvesh-370416172/" },
              { icon: SiProtonmail, text: "Email", href: "mailto:dhruvesh3466@protonmail.com" }
            ].map((contact, index) => (
              <motion.a 
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <contact.icon className="contact-icon" />
                <span>{contact.text}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default App