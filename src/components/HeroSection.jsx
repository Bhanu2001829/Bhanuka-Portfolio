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
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 z-10">
        {/* Text content */}
        <div className="text-center lg:text-left space-y-6 w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="opacity-0 animate-fade-in block">Hi, I&apos;m</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 block">Bhanuka</span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2 block">Rajasinghe</span>
          </h1>

          {/* Roles */}
          <div className="my-4 opacity-0 animate-fade-in-delay-3">
            <div className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground h-12 flex flex-wrap items-center justify-center lg:justify-start">
              <span className="mr-2">I&apos;m a</span>
              <span className="text-primary font-semibold">{currentText}</span>
              <span className="animate-pulse text-primary">|</span>
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I craft reliable digital experiences with precision. Specializing in full-stack development and quality assurance.
          </p>

          <div className="pt-6 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button text-base sm:text-lg px-6 py-3 hover:scale-105 transition-transform"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center opacity-0 animate-fade-in-delay-3">
          <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden border-[4px] border-primary/20 shadow-xl group transition-all duration-500">
            <img
              src="/images/bhanuka.JPG"
              alt="Bhanuka Rajasinghe"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Scroll icon */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};
