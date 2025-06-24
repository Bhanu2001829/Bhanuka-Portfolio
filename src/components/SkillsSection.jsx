import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  // Backend
  { name: "Java", level: 80, category: "backend" },
  { name: "Spring Boot", level: 75, category: "backend" },
  { name: "PHP", level: 70, category: "backend" },
  { name: "Python", level: 65, category: "backend" },
  { name: "C#", level: 60, category: "backend" },

  // Database
  { name: "MySQL", level: 80, category: "database" },
  { name: "Firebase", level: 75, category: "database" },
  { name: "MongoDB", level: 70, category: "database" },
  { name: "Oracle", level: 65, category: "database" },
  { name: "Microsoft SQL Server", level: 60, category: "database" },
  { name: "SQL Lite", level: 60, category: "database" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Selenium", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Postman", level: 95, category: "tools" },
  { name: "Wordpress", level: 80, category: "tools" },
  { name: "Ardunio", level: 60, category: "tools" },

  // Soft skills
  { name: "Team Collaboration", level: 95, category: "softskills" },
  { name: "Problem Solving", level: 80, category: "softskills" },
  { name: "Leadership", level: 85, category: "softskills" },
  { name: "Communication", level: 80, category: "softskills" },
  { name: "Time Management", level: 80, category: "softskills" },
  { name: "Work under pressure", level: 80, category: "softskills" },
];

const categories = ["all", "frontend", "backend", "database", "tools", "softskills"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 relative bg-secondary/30"
    >
      {/* Background blurred circles like AboutSection */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2.5 rounded-full transition-all duration-300 capitalize text-lg font-medium",
                "transform hover:scale-105 active:scale-95",
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg hover:shadow-xl"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:shadow-md"
              )}
            >
              {category === "all"
                ? "All Skills"
                : category === "softskills"
                ? "Soft Skills"
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredSkills.map((skill) => (
            <div
              key={`${skill.name}-${skill.category}`}
              className="gradient-border p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-semibold text-xl mb-4">{skill.name}</h3>
              <div className="w-full bg-secondary/50 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-3 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right mt-2">
                <span className="text-base text-muted-foreground font-medium">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
