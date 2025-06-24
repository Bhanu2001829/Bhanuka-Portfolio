import { CheckCircle,GraduationCap, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-[100vh] w-full flex items-center justify-center p-4 sm:p-6 relative">
      <div className="w-full max-w-[1800px] mx-auto">
        {/* Background graphic element (optional) */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-primary/5 blur-3xl"></div>
        </div>

        <div className="w-full text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-12 md:mb-16 text-center">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full">
          {/* Left Column - Description */}
          <div className="flex flex-col justify-center space-y-8 lg:space-y-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
             Full-Stack Developer & <br />
              <span className="text-primary">Quality Assurance</span> Enthusiast
            </h3>

            <div className="space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
                I build robust, scalable applications with cutting-edge technologies, focusing on both functionality and exceptional user experiences.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
               With a growing background in quality assurance, I’m continuously developing my skills to ensure projects meet reliable standards of performance and usability.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
              <a 
                href="#contact" 
                className="cosmic-button px-8 py-4 text-lg md:text-xl hover:scale-105 transition-transform"
              >
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1RKwjC57jAPO0IkqV1RViWyJrxUQTz_Df/view?usp=sharing"
                className="px-8 py-4 rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 text-lg md:text-xl text-center hover:scale-[1.02]"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Skills Cards */}
          <div className="grid grid-cols-1 gap-6 md:gap-8 h-full">
            <div className="gradient-border p-6 md:p-8 card-hover h-full flex items-center">
              <div className="flex items-start gap-6 w-full">
                <div className="p-3 md:p-4 rounded-full bg-primary/10 flex-shrink-0">
                  <Code className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-2xl md:text-3xl mb-3">Software Development</h4>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Full-cycle development with React, Node.js, and modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 md:p-8 card-hover h-full flex items-center">
              <div className="flex items-start gap-6 w-full">
                <div className="p-3 md:p-4 rounded-full bg-primary/10 flex-shrink-0">
                  <CheckCircle className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-2xl md:text-3xl mb-3">Quality Assurance</h4>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Comprehensive testing strategies for bug-free applications.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="gradient-border p-6 md:p-8 card-hover h-full flex items-center">
              <div className="flex items-start gap-6 w-full">
                <div className="p-3 md:p-4 rounded-full bg-primary/10 flex-shrink-0">
                  <User className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-2xl md:text-3xl mb-3">Project Leadership</h4>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    End-to-end project management using Agile methodologies.
                  </p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="gradient-border p-6 md:p-8 card-hover h-full flex flex-col space-y-6">
              <div className="flex items-start gap-6">
                <div className="p-3 md:p-4 rounded-full bg-primary/10 flex-shrink-0">
                  <GraduationCap className="h-8 w-8 md:h-10 md:w-10 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-2xl md:text-3xl mb-3">Education</h4>
                  <div className="flex flex-col space-y-5 text-lg md:text-xl text-muted-foreground">

                    <div>
                      <div className="text-primary font-semibold">2023 - 2027</div>
                      <div className="font-semibold">BSc (Hons) in Software Enineering</div>
                      <div className="italic text-primary">National Institute of Business Management(NIBM)</div>
                      <div className="text-muted-foreground">Specialized in Software Engineering</div>
                    </div>

                    <div>
                      <div className="text-primary font-semibold">2024 - 2025</div>
                      <div className="font-semibold">Higher National Diploma in Software Enineering</div>
                      <div className="italic text-primary">National Institute of Business Management(NIBM)</div>
                      <div className="text-muted-foreground">Developed strong foundations through focused study in areas such as Robotics, advanced data structures, enterprise-grade applications, mobile development, IoT systems, and cutting-edge technologies.

</div>
                    </div>

                    <div>
                      <div className="text-primary font-semibold">2023 - 2024</div>
                      <div className="font-semibold">Diploma in Software Engineering</div>
                      <div className="italic text-primary">National Institute of Business Management(NIBM)</div>
                      <div className="text-muted-foreground">Acquired practical skills in designing graphical user interfaces(GUI), implementing object-oriented solutions, applying Agile methodologies, managing databases, and developing dynamic web applications.</div>
                    </div>

                    <div>
                      <div className="text-primary font-semibold">2018 - 2020</div>
                      <div className="font-semibold">Advance Level in Physical Science</div>
                      <div className="italic text-primary">A/ Walisighe Harischandhra College</div>
                      <div className="text-muted-foreground">Mathematics, Physics, Chemistry, and General English subjects with a focus on analytical and problem-solving skills</div>
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
