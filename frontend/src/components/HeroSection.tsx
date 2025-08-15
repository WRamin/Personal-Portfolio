import { motion } from "framer-motion";
import profileCartoon from '@/assets/profile-cartoon-DMBWjdNY.jpg';

export const HeroSection = () => {
  const Background = () => (
    <div className="absolute inset-0 z-0">
      {/* Enhanced CSS-only animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20"></div>
      
      {/* Simplified animated shapes */}
      <div className="absolute inset-0">
        <div className="absolute w-16 h-16 border-2 border-primary/30 transform rotate-45 animate-spin-slow" style={{ left: '20%', top: '30%' }} />
        <div className="absolute w-12 h-12 border-2 border-accent/20 transform rotate-45 animate-spin-slow" style={{ left: '70%', top: '60%', animationDelay: '1s' }} />
      </div>
      
      {/* Reduced particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-neon-cyan/60 rounded-full animate-pulse"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      {/* Moving gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-slideX"
      />
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 2D Background */}
      <Background />

      {/* Simplified Matrix Rain Effect */}
      <div className="matrix-rain absolute inset-0 z-1">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-matrix-green text-sm font-mono opacity-20"
            style={{
              left: `${i * 12}%`,
              animationDelay: `${i * 0.8}s`,
              animation: "matrix-fall 4s linear infinite",
            }}
          >
            010110
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-8"
        >
          <img 
            src={profileCartoon} 
            alt="Developer Avatar" 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary/50 shadow-lg shadow-primary/25 hover:shadow-neon-cyan transition-all duration-300"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 glitch-text">
            <span className="bg-gradient-primary bg-clip-text">
              Ramin Wafa
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono">
            &gt; Full-Stack Software Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Crafting digital experiences with cutting-edge technology and innovative solutions. 
            Specializing in modern web development and system architecture.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={() => {
              const contactSection = document.getElementById('projects');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-gradient-primary text-background font-bold rounded-lg shadow-neon-cyan hover:shadow-neon-purple transition-all duration-300 transform hover:scale-105">
            View Projects
          </button>
          <button 
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-background transition-all duration-300 transform hover:scale-105">
            Contact Me
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-2 font-mono">&gt; scroll_down</p>
          <div className="w-6 h-10 border-2 border-primary rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-primary rounded-full mx-auto mt-2 animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};