import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Linux Administrator", "Web Developer", "DevOps Enthusiast"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] -z-10 pointer-events-none" />
      <div className="absolute left-0 top-0 h-full w-full -z-20 bg-background">
         <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]"></div>
      </div>
      
      <div className="text-center z-10 px-4">
        <h2 className="text-xl md:text-2xl font-mono text-primary mb-4 animate-fade-in">Hello, World! I'm</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-glow animate-fade-in-delay-1">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
            Cypher
          </span>
        </h1>
        <div className="h-8 md:h-12 mb-8 animate-fade-in-delay-2">
          <span className="text-2xl md:text-4xl font-mono text-foreground border-r-4 border-primary pr-2 animate-pulse">
            {text}
          </span>
        </div>
        
        <div className="flex gap-4 justify-center animate-fade-in-delay-3">
          <a href="#projects" className="cosmic-button">
            View Work
          </a>
          <a href="#contact" className="px-6 py-2 rounded-full border border-border hover:bg-accent hover:text-accent-foreground transition-all duration-300">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
