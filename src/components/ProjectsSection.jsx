import { ArrowRight, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Baby Mine - Mobile Application",
    description:
      "A cross-platform React Native app offering real-time tracking for moms and babies, fluid animations, and secure payment functionality.",
    image: "/projects/project1.png",
    tags: ["React Native", "TailwindCSS", "Supabase"],
    githubUrl: "https://github.com/thimathi/BabyCareApp.git",
  },
  {
    id: 2,
    title: "Pharmacy_ms - Web Application",
    description:
      "A full-featured, automated system for pharmacies that handles inventory, prescriptions, and billing — built with scalable performance, secure user authentication, and integrated payment processing.",
    image: "/projects/project2.png",
    tags: ["Spring Boot", "React", "Node.js", "Firebase"],
    githubUrl: "https://github.com/thimathi/Pharmacy_ms.git",
  },
  {
    id: 3,
    title: "NES EDU - Mobile Application",
    description:
      "Designed to streamline the registration process for short-term courses offered by educational institutions, featuring user-friendly forms, admin management, and automated notifications.",
    image: "/projects/project3.png",
    tags: ["Java", "Firebase", "Google Maps API", "Android Studio"],
    githubUrl: "https://github.com/Bhanu2001829/MAD-project.git",
  },
  {
    id: 4,
    title: "JD Computers - POS System",
    description:
      "Implemented for a shop in Ambalantota — an inventory management system with employee and stock management, and more.",
    image: "/projects/project4.png",
    tags: ["C#", "MySQL"],
    githubUrl: "https://github.com/thimathi/JD_Computers_And_Electronics.git",
  },
  {
    id: 5,
    title: "HEV Suit - IOT Device",
    description:
      "A full-featured IoT-based smart safety suit designed for construction workers — equipped with real-time health monitoring, environmental sensing, emergency alerts, and seamless integration with cloud platforms for live data tracking and analysis.",
    image: "/projects/project5.png",
    tags: ["C++", "NodeMCU", "Firebase"],
    githubUrl: "https://github.com/Shehan303/Hazardous-Environment-Suit-HEV-Suit-.git",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 relative bg-background"
    >
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="w-full text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Here are some of my recent projects. Each one was built with care, precision, and a focus on performance and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_6px_30px_rgba(0,0,0,0.1)] transition-all duration-400 h-full flex flex-col transform hover:scale-[1.02]"
            >
              <div className="h-[280px] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={tag + idx}
                      className="px-3 py-2 text-base font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-base mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={28} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-3 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Bhanu2001829"
          >
            Check My GitHub <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
