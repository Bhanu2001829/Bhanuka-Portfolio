import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [roles, setRoles] = useState([]);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const rolesList = [
      "Software Engineer",
      "QA Engineer", 
      "Full Stack Developer"
    ];
    setRoles(rolesList);
  }, []);

  useEffect(() => {
    if (roles.length === 0) return;

    const currentRole = roles[currentRoleIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        setTypingSpeed(100);
      } else {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, roles, typingSpeed]);

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="w-full max-w-[1800px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24 z-10">
        {/* Text content - left side */}
        <div className="text-center lg:text-left space-y-8 lg:space-y-12 w-full lg:w-1/2">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="opacity-0 animate-fade-in block">Hi, I&apos;m</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 block ">
              Bhanuka
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2 block">
              Rajasinghe
            </span>
          </h1>

          {/* Roles Section */}
          <div className="my-6 lg:my-8 opacity-0 animate-fade-in-delay-3">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-muted-foreground h-16 lg:h-20 flex flex-wrap items-center justify-center lg:justify-start">
              <span className="mr-3">I&#39;m a</span>
              <span className="text-primary font-semibold min-w-[10px]">
                {currentText}
              </span>
              <span className="animate-pulse text-primary">|</span>
            </div>
          </div>

          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I craft reliable digital experiences with precision. Specializing in full-stack development and quality assurance.
          </p>

          <div className="pt-8 opacity-0 animate-fade-in-delay-4">
            <a 
              href="#projects" 
              className="cosmic-button text-xl px-10 py-5 hover:scale-105 transition-transform"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Photo container - right side */}
        <div className="w-full lg:w-1/2 flex justify-center opacity-0 animate-fade-in-delay-3">
          <div className="relative w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden border-[6px] border-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
            <img
              src="/images/bhanuka.JPG"
              alt="Bhanuka Rajasinghe"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary" />
      </div>
    </section>
  );
};