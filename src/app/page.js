'use client'
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ChevronDown, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const GitHubIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600">Tilon Bobb</a>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" onClick={() => scrollToSection('home')} className={`hover:text-blue-600 transition-colors ${activeSection === 'home' ? 'text-blue-600 font-medium' : ''}`}>Home</a>
            <a href="#about" onClick={() => scrollToSection('about')} className={`hover:text-blue-600 transition-colors ${activeSection === 'about' ? 'text-blue-600 font-medium' : ''}`}>About</a>
            <a href="#experience" onClick={() => scrollToSection('experience')} className={`hover:text-blue-600 transition-colors ${activeSection === 'experience' ? 'text-blue-600 font-medium' : ''}`}>Experience</a>
            <a href="#projects" onClick={() => scrollToSection('projects')} className={`hover:text-blue-600 transition-colors ${activeSection === 'projects' ? 'text-blue-600 font-medium' : ''}`}>Projects</a>
            <a href="#skills" onClick={() => scrollToSection('skills')} className={`hover:text-blue-600 transition-colors ${activeSection === 'skills' ? 'text-blue-600 font-medium' : ''}`}>Skills</a>
            <a href="#education" onClick={() => scrollToSection('education')} className={`hover:text-blue-600 transition-colors ${activeSection === 'education' ? 'text-blue-600 font-medium' : ''}`}>Education</a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className={`hover:text-blue-600 transition-colors ${activeSection === 'contact' ? 'text-blue-600 font-medium' : ''}`}>Contact</a>
          </nav>
          
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 md:hidden">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <span className="text-2xl font-bold text-blue-600">Tilon Bobb</span>
              <button onClick={toggleMenu}>
                <X size={24} />
              </button>
            </div>
            <nav className="container mx-auto px-4 py-8 flex flex-col space-y-6">
              <a href="#home" onClick={() => scrollToSection('home')} className="text-xl hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" onClick={() => scrollToSection('about')} className="text-xl hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" onClick={() => scrollToSection('experience')} className="text-xl hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" onClick={() => scrollToSection('projects')} className="text-xl hover:text-blue-600 transition-colors">Projects</a>
              <a href="#skills" onClick={() => scrollToSection('skills')} className="text-xl hover:text-blue-600 transition-colors">Skills</a>
              <a href="#education" onClick={() => scrollToSection('education')} className="text-xl hover:text-blue-600 transition-colors">Education</a>
              <a href="#contact" onClick={() => scrollToSection('contact')} className="text-xl hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="h-screen flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 z-0"></div>
          <div className="container mx-auto px-4 md:px-6 z-10 mt-16">
            <div className="max-w-3xl">
              <p className="text-blue-600 font-medium mb-2">Hey! I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Tilon Bobb</h1>
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-6">Software Engineer & Data Scientist</h2>
              <p className="text-lg text-gray-600 mb-8">Building innovative solutions with expertise in software engineering, data science, and machine learning.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center">Get in Touch</a>
                <a href="#projects" onClick={() => scrollToSection('projects')} className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors text-center">View Projects</a>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="https://github.com/Kingtilon1" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <GitHubIcon />
                </a>
                <a href="https://linkedin.com/in/tilonbobb1" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <LinkedInIcon />
                </a>
                <a href="mailto:bobbtilon@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-gray-500 hover:text-blue-600 transition-colors">
              <ChevronDown size={32} />
            </a>
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              About Me
              <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4"></span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                I'm a Software Engineer & Data Scientist with a BSc in Computer Science from Brooklyn College and currently pursuing an MS in Data Science at CUNY School of Professional Studies with a 3.9 GPA. I am passionate about leveraging data and technology to solve real-world problems, with expertise in software engineering and machine learning.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Throughout my career, I've developed scalable applications, implemented machine learning models, and created data-driven solutions. I thrive in collaborative environments and enjoy tackling complex challenges.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                When I'm not coding, you can find me playing basketball, enjoying video games, or exploring anime and manga series across different genres.
              </p>
              
              <div className="flex flex-col md:flex-row md:justify-center gap-8 mt-12">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">Enthusiastic Problem Solver</h3>
                  <p className="text-gray-600 text-center">
                    "Tilon took challenges head on. He asked questions, dug in, surfaced the things he didn't understand, and often figured it out himself."
                  </p>
                  <p className="mt-4 font-medium">- Joel Oliveira, Engineering Manager at ezCater</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-2">Insightful Collaborator</h3>
                  <p className="text-gray-600 text-center">
                    "Tilon possesses a keen interest in software engineering and problem-solving, coupled with a notable talent for vocalizing insightful perspectives within the team."
                  </p>
                  <p className="mt-4 font-medium">- Kim Flores, Software Engineer at ezCater</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              Work Experience
              <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4"></span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">Scale AI</h3>
                    <p className="text-lg font-medium">LLM QA Engineer (Contractor)</p>
                  </div>
                  <p className="text-gray-600 mt-2 md:mt-0">July 2024 - Present</p>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Facilitated integration of custom ML pipelines, conducting peer code reviews on 100+ submissions improving system efficiency by 25%</li>
                  <li>Evaluated generated responses using a low-to-high field scoring system, enhancing model accuracy by ranking based on key attributes</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">Co-Founder & Lead Developer, BIBLIT AI Bible Study Assistant</h3>
                    <p className="text-lg font-medium">Church Of God Initiative</p>
                  </div>
                  <p className="text-gray-600 mt-2 md:mt-0">November 2024 - February 2025</p>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Designed and built scalable cloud architecture using Next.js, Firebase, and Pinecone, preparing for 10K+ concurrent users post-launch</li>
                  <li>Implemented distributed vector search system with 26K+ Q&A pairs, optimizing response time to &lt;200ms</li>
                  <li>Led system design reviews with team, making technology decisions for authentication (Clerk) and payment systems (Stripe)</li>
                  <li>Collaborated with leadership to align product features with security and compliance needs, ensuring scalable, high-availability infrastructure</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">ezCater</h3>
                    <p className="text-lg font-medium">Software Engineer Intern</p>
                  </div>
                  <p className="text-gray-600 mt-2 md:mt-0">June 2023 - November 2023</p>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Implemented and deployed a new feature with UI modifications using feature flags, enabling A/B testing in production, leading to a 7.66% increase in bookings per user and 8.25% increase in revenue per user, contributing to an estimated $1.7 million boost in annual bookings</li>
                  <li>Executed Contentful Content Management System (CMS) with Ruby on Rails, automating deployment processes and streamlining content management, reducing time to deploy changes</li>
                  <li>Revamped the "Caterers Near Me" page using Ruby on Rails, resulting in a 6% increase in paid search conversions, a 3% rise in average order value, and a +12.55% lift in conversion rates from paid search, driving significant business impact</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">Outlier</h3>
                    <p className="text-lg font-medium">AI Training Expert (Freelance)</p>
                  </div>
                  <p className="text-gray-600 mt-2 md:mt-0">February 2024 - July 2024</p>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Improved code generation quality by training and evaluating large language models (including GPT-4.0), achieving higher accuracy and faster processing times</li>
                  <li>Constructed over 120 optimized code solutions with clear explanations, addressing complex coding challenges and contributing to the improvement of AI model capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              Featured Projects
              <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Medicare Fraud Detection</h3>
                  <p className="text-gray-600 mb-4">Python, R, Machine Learning, SQL</p>
                  <p className="text-gray-700 mb-4">
                    Developed a multi-dataset AI-driven system for detecting Medicare fraud using XGBoost, Random Forest, and Anomaly Detection. Addressed extreme class imbalance (fraud cases &lt; 0.03%) and built an interactive R Shiny dashboard.
                  </p>
                  <div className="flex space-x-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Machine Learning</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Healthcare</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">BIBLIT - Bible Study AI Assistant</h3>
                  <p className="text-gray-600 mb-4">Next.js, Firebase, OpenAI, Pinecone, Jira, Clerk, Stripe</p>
                  <p className="text-gray-700 mb-4">
                    Engineered a RAG-based Bible study application serving 40+ waitlisted users, using OpenAI's GPT-4 for intelligent theological responses. Implemented vector similarity search with Pinecone for 26K+ Q&A pairs.
                  </p>
                  <div className="flex space-x-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Full Stack</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">AI</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">NVIDIA GitHub AI Assistant</h3>
                  <p className="text-gray-600 mb-4">NVIDIA NIMs, LlamaIndex, Pinecone</p>
                  <p className="text-gray-700 mb-4">
                    Built an open-source assistant that helps developers understand GitHub repositories by providing intelligent responses to queries about contribution guidelines, setup, and documentation using NVIDIA NIMs and LlamaIndex.
                  </p>
                  <div className="flex space-x-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">AI</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Developer Tools</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Medical Documentation Assistant</h3>
                  <p className="text-gray-600 mb-4">Azure AI Agent Service, Semantic Kernel</p>
                  <p className="text-gray-700 mb-4">
                    Built HIPAA-compliant multi-agent system that reduced clinical documentation time by 35% while maintaining 88% accuracy compared to manual transcription. Architected end-to-end solution with real-time audio transcription.
                  </p>
                  <div className="flex space-x-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Healthcare</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">AI</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Drug Response Classification</h3>
                  <p className="text-gray-600 mb-4">Python, Decision Trees, Random Forest</p>
                  <p className="text-gray-700 mb-4">
                    Engineered a machine learning pipeline achieving 97.37% accuracy for predicting patient drug responses based on clinical data. Optimized tree-based algorithms and feature selection.
                  </p>
                  <div className="flex space-x-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Machine Learning</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Healthcare</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Redis Server</h3>
                  <p className="text-gray-600 mb-4">C, Networking, TCP Sockets, Concurrency</p>
                  <p className="text-gray-700 mb-4">
                    Built a simplified Redis server from scratch, focusing on core features like memory management and byte stream handling. Configured TCP socket communication and gained hands-on experience with concurrency.
                  </p>
                  <div className="flex space-x-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Systems Programming</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Networking</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a href="https://github.com/Kingtilon1" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                View More Projects on GitHub
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              Technical Skills
              <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4"></span>
            </h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Python</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">JavaScript</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">R</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">SQL</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Java</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">C++</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">HTML/CSS</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Next.js</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">React</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Ruby on Rails</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">PyTorch</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Flask</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Django</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Node.js</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">FastAPI</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Database Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Firebase</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">MongoDB</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Pinecone</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Azure SQL</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Azure Cosmos DB</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Git</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">GitHub</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Jira</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Vercel</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Azure AI Foundry</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">VS Code</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">Data Science & ML</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">NumPy</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Pandas</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Scikit-learn</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Matplotlib</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Seaborn</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Tidyverse</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Dplyr</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600 mb-4">AI & Cloud Services</h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">OpenAI</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">NVIDIA NIMs</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Azure AI</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">LlamaIndex</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Semantic Kernel</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Clerk</span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">Stripe</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 relative">
              Education
              <span className="block w-20 h-1 bg-blue-600 mx-auto mt-4"></span>
            </h2>
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">CUNY School of Professional Studies</h3>
                    <p className="text-lg font-medium">Master of Science in Data Science</p>
                  </div>
                  <p className="text-gray-600 mt-2 md:mt-0">August 2023 - December 2024</p>
                </div>
                <p className="text-gray-700">New York, NY</p>
                <p className="text-gray-700 font-medium mt-2">GPA: 3.9/4.0</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-600">CUNY Brooklyn College</h3>
                    <p className="text-lg font-medium">Bachelor of Science in Computer Science</p>
                  </div>
                  <p className="text-gray-600 mt-2 md:mt-0">August 2019 - May 2023</p>
                </div>
                <p className="text-gray-700">New York, NY</p>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto mt-12">
              <h3 className="text-xl font-bold mb-6">Relevant Coursework</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">Data Structures and Algorithms</div>
                <div className="bg-blue-50 p-4 rounded-lg">Operating Systems</div>
                <div className="bg-blue-50 p-4 rounded-lg">Data Processing</div>
                <div className="bg-blue-50 p-4 rounded-lg">Statistics</div>
                <div className="bg-blue-50 p-4 rounded-lg">Machine Learning</div>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto mt-12">
              <h3 className="text-xl font-bold mb-6">Certifications & Achievements</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium">NVIDIA Developer Contest 2024</p>
                  <p className="text-gray-700">Built a GitHub Open Source Assistant using NVIDIA NIMs and LlamaIndex</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium">Hack.Diversity Fellowship</p>
                  <p className="text-gray-700">Selected among the final 15 out of 300 candidates for the fellowship</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium">Featured Speaker, Hack.Diversity Event (2024)</p>
                  <p className="text-gray-700">Addressed CEOs, tech founders, and executives on diversity in tech</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-blue-600 text-white">
  <div className="container mx-auto px-4 md:px-6">
    <h2 className="text-3xl font-bold text-center mb-12 relative">
      Get In Touch
      <span className="block w-20 h-1 bg-white mx-auto mt-4"></span>
    </h2>
    <div className="max-w-3xl mx-auto">
      <p className="text-center text-lg mb-8">
        I'm currently open to new opportunities and collaborations. Feel free to reach out if you want to connect!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <a href="mailto:bobbtilon@gmail.com" className="bg-opacity-10 bg-white hover:bg-opacity-20 p-6 rounded-lg flex flex-col items-center transition-colors" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>          <Mail size={32} color="white" className="mb-4" />
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p className="text-center">bobbtilon@gmail.com</p>
        </a>
        
        <a href="https://github.com/Kingtilon1" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg flex flex-col items-center transition-colors" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
  <div className="mb-4 text-white">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
  </div>
  <h3 className="text-xl font-bold mb-2">GitHub</h3>
  <p className="text-center">Kingtilon1</p>
</a>

<a href="https://linkedin.com/in/tilonbobb1" target="_blank" rel="noopener noreferrer" className="bg-white bg-opacity-10 hover:bg-opacity-20 p-6 rounded-lg flex flex-col items-center transition-colors" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
  <div className="mb-4 text-white">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  </div>
  <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
  <p className="text-center">tilonbobb1</p>
</a>
      </div>
      
      <div className="text-center">
        <p className="text-xl mb-4">Location</p>
        <p className="text-lg">New York, NY</p>
      </div>
    </div>
  </div>
</section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Tilon Bobb</h3>
              <p className="text-gray-400">Software Engineer & Data Scientist</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="https://github.com/Kingtilon1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <GitHubIcon />
              </a>
              <a href="https://linkedin.com/in/tilonbobb1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <LinkedInIcon />
              </a>
              <a href="mailto:bobbtilon@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Tilon Bobb. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;