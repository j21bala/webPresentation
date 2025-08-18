import React, { useState, useEffect } from 'react';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // SVG Icons
  const PlayIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z"/>
    </svg>
  );

  const GithubIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const LinkedinIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const MailIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
    </svg>
  );

  const UserIcon = () => (
    <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
    </svg>
  );

  const CodeIcon = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
    </svg>
  );

  const BriefcaseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 002 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2v-8a2 2 0 012-2V8"/>
    </svg>
  );

  const MessageCircleIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black relative overflow-hidden">
      {/* Mouse follower */}
      <div 
        className="fixed w-6 h-6 bg-red-500/30 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px)`,
          mixBlendMode: 'screen'
        }}
      />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-600/20 to-transparent animate-pulse"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-red-500/20 rounded-full animate-bounce"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`
            }}
          />
        ))}
      </div>
      
      {/* Navigation */}
      <nav className={`relative z-20 flex justify-between items-center p-6 bg-black/30 backdrop-blur-sm transition-all duration-1000 ${
        isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
      }`}>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6">
            {['about', 'skills', 'projects', 'contact'].map((section, index) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-sm font-semibold tracking-wider transition-all duration-300 transform hover:scale-110 ${
                  activeSection === section 
                    ? 'text-red-500 scale-110' 
                    : 'text-gray-300 hover:text-red-400'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {section.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          {[GithubIcon, LinkedinIcon, MailIcon].map((Icon, index) => (
            <div
              key={index}
              className={`text-gray-400 hover:text-red-400 cursor-pointer transition-all duration-300 transform hover:scale-125 hover:rotate-6 ${
                isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 0.1 + 0.3}s` }}
            >
              <Icon />
            </div>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <div className={`text-gray-400 text-sm mb-2 transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '0.2s' }}>
            2025
          </div>
          
          <h1 className={`text-6xl md:text-8xl font-bold text-white mb-8 leading-none transition-all duration-1000 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`} style={{ transitionDelay: '0.4s' }}>
            <span className="block animate-pulse">JUAN</span>
            <span className="block animate-pulse" style={{ animationDelay: '0.5s' }}>BALAGUERA</span>
          </h1>

          {/* Content based on active section */}
          <div className="mb-8 min-h-[200px]">
            <div className={`transition-all duration-500 transform ${
              activeSection === 'about' ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
            }`}>
              {activeSection === 'about' && (
                <div className="text-gray-300 leading-relaxed animate-fade-in">
                  <p className="mb-4 transform transition-all duration-700 hover:translate-x-2">
                    Estudiante de ing. de sistemas 6to semestre. En formación como programador junior. Interes por la programación front-end y back-end.
                  </p>
                  <p className="transform transition-all duration-700 hover:translate-x-2">
                    Mi enfoque combina creatividad con la innovación y sobretodo el enfoque práctico y moderno.
                  </p>
                </div>
              )}
            </div>
            
            <div className={`transition-all duration-500 transform ${
              activeSection === 'skills' ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
            }`}>
              {activeSection === 'skills' && (
                <div className="text-gray-300">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {[
                      { title: 'Frontend', tech: 'React, Angular, Tailwind' },
                      { title: 'Backend', tech: 'Java, Python' },
                      { title: 'Tools', tech: 'Git, Docker, AWS, Figma' },
                      { title: 'Mobile', tech: 'En proceso' }
                    ].map((skill, index) => (
                      <div
                        key={skill.title}
                        className="bg-red-900/20 p-4 rounded border border-red-500/30 transform transition-all duration-500 hover:scale-105 hover:bg-red-900/30 hover:border-red-500/50 cursor-pointer"
                        style={{ 
                          animationDelay: `${index * 0.1}s`,
                          animation: 'slideUp 0.8s ease-out forwards'
                        }}
                      >
                        <h3 className="text-red-400 font-semibold mb-2">{skill.title}</h3>
                        <p className="text-sm">{skill.tech}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className={`transition-all duration-500 transform ${
              activeSection === 'projects' ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
            }`}>
              {activeSection === 'projects' && (
                <div className="text-gray-300">
                  <div className="space-y-4">
                    {[
                      { title: 'E-commerce Platform', desc: 'Plataforma completa con React y Node.js', tags: ['React', 'Node.js'] },
                      { title: 'Portfolio Website', desc: 'Sitio web moderno y responsivo', tags: ['Vue.js', 'Tailwind'] },
                      { title: 'Mobile App', desc: 'Aplicación móvil con React Native', tags: ['React Native', 'Firebase'] }
                    ].map((project, index) => (
                      <div
                        key={project.title}
                        className="bg-black/40 p-4 rounded border border-gray-700 hover:border-red-500/50 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/20"
                        style={{ 
                          animationDelay: `${index * 0.2}s`,
                          animation: 'fadeInUp 0.8s ease-out forwards'
                        }}
                      >
                        <h3 className="text-white font-semibold mb-2 transition-colors duration-300 hover:text-red-400">{project.title}</h3>
                        <p className="text-sm mb-2">{project.desc}</p>
                        <div className="flex space-x-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tag}
                              className="bg-red-600 text-xs px-2 py-1 rounded transition-all duration-300 hover:bg-red-500 transform hover:scale-110"
                              style={{ animationDelay: `${(index * 0.2) + (tagIndex * 0.1)}s` }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className={`transition-all duration-500 transform ${
              activeSection === 'contact' ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0'
            }`}>
              {activeSection === 'contact' && (
                <div className="text-gray-300">
                  <p className="mb-4 animate-fade-in">¿Tienes un proyecto en mente? Me encantaría colaborar contigo.</p>
                  <div className="space-y-3">
                    {[
                      { Icon: MailIcon, text: 'tu.email@gmail.com' },
                      { Icon: LinkedinIcon, text: 'linkedin.com/in/tu-perfil' },
                      { Icon: GithubIcon, text: 'github.com/tu-usuario' }
                    ].map(({ Icon, text }, index) => (
                      <div
                        key={text}
                        className="flex items-center space-x-3 hover:text-red-400 transition-all duration-300 cursor-pointer transform hover:translate-x-2 hover:scale-105"
                        style={{ 
                          animationDelay: `${index * 0.1}s`,
                          animation: 'slideInLeft 0.8s ease-out forwards'
                        }}
                      >
                        <Icon />
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className={`flex space-x-4 transition-all duration-1000 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '0.8s' }}>
            <button className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/30 group">
              <div className="transition-transform duration-300 group-hover:rotate-12">
                <PlayIcon />
              </div>
              <span>VER DEMO</span>
            </button>
            <button className="flex items-center space-x-2 border border-gray-600 hover:border-red-500 text-gray-300 hover:text-white px-6 py-3 rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20">
              <span>DESCARGAR CV</span>
            </button>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className={`hidden md:block w-1/2 relative transition-all duration-1500 ${
          isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`} style={{ transitionDelay: '0.6s' }}>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-red-900/20 to-red-900/40"></div>
          <div className="h-full flex items-center justify-center relative z-10">
            {/* Hero Character Silhouette */}
            <div className="w-80 h-96 bg-gradient-to-b from-gray-800 to-black rounded-lg border border-red-500/30 flex items-center justify-center relative overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-red-500/30 group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent"></div>
              <div className="text-red-500/50 text-6xl transition-all duration-500 group-hover:scale-110 group-hover:text-red-400/70">
                <UserIcon />
              </div>
              {/* Overlay effects */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/50"></div>
              <div className="absolute bottom-4 left-4 text-white text-sm transition-all duration-300 group-hover:translate-y-[-2px]">
                <div className="font-semibold">Desarrollador</div>
                <div className="text-gray-400">Full Stack Developer</div>
              </div>
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-lg border border-red-500/50 animate-pulse"></div>
              {/* Floating sparkles */}
              <div className="absolute inset-0">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-red-400 rounded-full animate-ping opacity-70"
                    style={{
                      left: `${30 + i * 20}%`,
                      top: `${20 + i * 15}%`,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Floating Elements */}
          <div className={`absolute top-20 right-20 w-16 h-16 bg-red-600/20 rounded-full border border-red-500/30 flex items-center justify-center backdrop-blur-sm transition-all duration-700 cursor-pointer hover:scale-125 hover:rotate-12 hover:bg-red-600/30 ${
            isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '1s', animation: 'float 3s ease-in-out infinite' }}>
            <CodeIcon />
          </div>
          <div className={`absolute bottom-20 left-20 w-12 h-12 bg-red-600/20 rounded-full border border-red-500/30 flex items-center justify-center backdrop-blur-sm transition-all duration-700 cursor-pointer hover:scale-125 hover:rotate-12 hover:bg-red-600/30 ${
            isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '1.2s', animation: 'float 3s ease-in-out infinite 1s' }}>
            <BriefcaseIcon />
          </div>
          <div className={`absolute top-1/2 right-10 w-10 h-10 bg-red-600/20 rounded-full border border-red-500/30 flex items-center justify-center backdrop-blur-sm transition-all duration-700 cursor-pointer hover:scale-125 hover:rotate-12 hover:bg-red-600/30 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`} style={{ transitionDelay: '1.4s', animation: 'float 3s ease-in-out infinite 2s' }}>
            <MessageCircleIcon />
          </div>
        </div>
      </div>

      {/* Bottom Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800">
        <div 
          className={`h-full bg-gradient-to-r from-red-600 to-red-400 transition-all duration-700 ease-out ${
            activeSection === 'about' ? 'w-1/4' :
            activeSection === 'skills' ? 'w-2/4' :
            activeSection === 'projects' ? 'w-3/4' : 'w-full'
          }`}
          style={{
            boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)'
          }}
        ></div>
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;