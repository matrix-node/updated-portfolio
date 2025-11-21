import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Server Automation Suite",
      description: "A collection of Bash scripts and Ansible playbooks to automate server provisioning and security hardening.",
      tags: ["Bash", "Ansible", "Linux"],
      link: "#"
    },
    {
      title: "Portfolio V2",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.",
      tags: ["React", "Tailwind", "Vite"],
      link: "#"
    },
    {
      title: "Log Analysis Tool",
      description: "A Python-based tool to parse and visualize server logs for anomaly detection.",
      tags: ["Python", "Data Viz", "SysAdmin"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          <span className="border-b-4 border-primary">Featured Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-card rounded-xl overflow-hidden border border-border card-hover flex flex-col">
              <div className="h-48 bg-muted flex items-center justify-center overflow-hidden">
                 {/* Placeholder for project image */}
                 <div className="text-4xl text-muted-foreground/20 font-bold group-hover:scale-110 transition-transform duration-500">
                    &lt;/&gt;
                 </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-secondary rounded text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
