import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="border-b-4 border-primary">About Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-card p-6 rounded-lg border border-border">
               <code className="text-sm text-primary block mb-2">#!/bin/bash</code>
               <p className="text-lg leading-relaxed text-muted-foreground">
                 I bridge the gap between systems and software. With a deep understanding of <span className="text-foreground font-semibold">Linux internals</span> and modern <span className="text-foreground font-semibold">Web Technologies</span>, I build robust, scalable solutions.
               </p>
               <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                 Whether it's configuring a secure server environment or crafting a responsive frontend, I bring a security-first and performance-oriented mindset to every project.
               </p>
            </div>
          </div>
          
          <div className="space-y-4">
             <div className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                <h3 className="font-bold text-xl mb-2">System Administration</h3>
                <p className="text-muted-foreground">Expertise in managing Linux environments, shell scripting, and server automation.</p>
             </div>
             <div className="p-4 bg-card rounded-lg border border-border hover:border-primary transition-colors">
                <h3 className="font-bold text-xl mb-2">Web Development</h3>
                <p className="text-muted-foreground">Building modern, responsive web applications using React, Node.js, and modern CSS.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
