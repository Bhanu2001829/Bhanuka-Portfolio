import { CheckCircle, GraduationCap, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 relative">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>
        </div>

        <div className="w-full text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">
              Full-Stack Developer & <br />
              <span className="text-primary">Quality Assurance</span> Enthusiast
            </h3>

            <div className="space-y-4">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I build robust, scalable applications with cutting-edge technologies, focusing on both functionality and user experiences.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                With a growing background in QA, I’m developing my skills to ensure projects meet high standards of usability and performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#contact" 
                className="cosmic-button px-6 py-2.5 text-base sm:text-lg hover:scale-105 transition-transform"
              >
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/16qPayUUd8CNgya8HCbLfc380G8FD9gCB/view?usp=sharing"
                className="px-6 py-2.5 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all text-base sm:text-lg text-center hover:scale-105"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Software Development",
                text: "Full-cycle development with React, Node.js, and modern frameworks.",
              },
              {
                icon: <CheckCircle className="h-6 w-6 text-primary" />,
                title: "Quality Assurance",
                text: "Comprehensive testing strategies for bug-free applications.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "Project Leadership",
                text: "End-to-end project management using Agile methodologies.",
              },
            ].map((card, idx) => (
              <div key={idx} className="gradient-border p-4 sm:p-6 card-hover flex items-center">
                <div className="flex items-start gap-4 w-full">
                  <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">{card.icon}</div>
                  <div>
                    <h4 className="font-semibold text-xl mb-2">{card.title}</h4>
                    <p className="text-base text-muted-foreground">{card.text}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Education Card */}
            <div className="gradient-border p-4 sm:p-6 card-hover flex flex-col space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full bg-primary/10 flex-shrink-0">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">Education</h4>
                  <div className="flex flex-col space-y-4 text-sm sm:text-base text-muted-foreground">
                    <div>
                      <div className="text-primary font-semibold">2023 - 2027</div>
                      <div className="font-semibold">BSc (Hons) in Software Engineering</div>
                      <div className="italic text-primary">National Institute of Business Management (NIBM)</div>
                      <div>Specialized in Software Engineering</div>
                    </div>
                    <div>
                      <div className="text-primary font-semibold">2024 - 2025</div>
                      <div className="font-semibold">Higher National Diploma</div>
                      <div className="italic text-primary">National Institute of Business Management (NIBM)</div>
                      <div>Developed strong foundations through focused study in areas such as Robotics, advanced data structures, enterprise-grade applications, mobile development, IoT systems, and cutting-edge technologies.</div>
                    </div>
                    <div>
                      <div className="text-primary font-semibold">2023 - 2024</div>
                      <div className="font-semibold">Diploma in Software Engineering</div>
                      <div className="italic text-primary">National Institute of Business Management (NIBM)</div>
                      <div>Acquired practical skills in designing graphical user interfaces(GUI), implementing object-oriented solutions, applying Agile methodologies, managing databases, and developing dynamic web applications.</div>
                    </div>
                    <div>
                      <div className="text-primary font-semibold">2018 - 2020</div>
                      <div className="font-semibold">A/L in Physical Science</div>
                      <div className="italic text-primary">Walisighe Harischandhra College</div>
                      <div>Maths, Physics, Chemistry, General English</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Education Card */}
          </div>
        </div>
      </div>
    </section>
  );
};
