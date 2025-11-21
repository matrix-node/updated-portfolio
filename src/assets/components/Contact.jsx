import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-secondary/5">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="border-b-4 border-primary">Get In Touch</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          I'm currently open to new opportunities in Linux Administration and Web Development. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a href="mailto:hello@example.com" className="cosmic-button text-lg px-8 py-3 inline-block">
          Say Hello
        </a>

        <div className="mt-16 pt-8 border-t border-border flex justify-center gap-8 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Twitter</a>
        </div>
        
        <footer className="mt-16 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Cypher. Built with React & Tailwind.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
