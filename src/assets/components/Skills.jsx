import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Linux & DevOps",
      skills: ["Bash Scripting", "System Hardening", "Docker", "Nginx/Apache", "Git", "CI/CD", "Network Security"]
    },
    {
      title: "Web Development",
      skills: ["React", "JavaScript (ES6+)", "HTML5 & CSS3", "Node.js", "Tailwind CSS", "REST APIs", "Database Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="border-b-4 border-primary">Technical Arsenal</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
