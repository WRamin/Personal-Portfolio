import { motion } from "framer-motion";
import aboutBackground from "@/assets/about-background.jpg";

const skills = [
  "JavaScript/TypeScript",
  "React/Next.js", 
  "Node.js/Express",
  "Python",
  "AWS/Cloud",
  "Database Design",
];

const SkillTag = ({ skill, index }: { skill: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="px-4 py-2 text-sm bg-gradient-secondary text-background rounded-full font-mono border border-border/20 hover:shadow-neon-cyan transition-all duration-300"
  >
    {skill}
  </motion.div>
);

export const AboutSection = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={aboutBackground} 
          alt="Tech workspace" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-neon-cyan">&gt;</span> ABOUT_ME
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-neon-purple font-mono">
                console.log("Hello, World!");
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                I'm a passionate software engineer with 5+ years of experience building 
                scalable web applications and distributed systems. I love turning complex 
                problems into elegant, user-friendly solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or diving deep into system architecture and performance optimization.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                {["Full-Stack", "DevOps", "Cloud", "AI/ML"].map((tag, index) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="px-3 py-1 text-sm bg-gradient-secondary text-background rounded-full font-mono"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan font-mono">
                &gt; skills.map()
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <SkillTag key={skill} skill={skill} index={index} />
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: "Projects", value: "50+" },
                { label: "Experience", value: "5+ Years" },
                { label: "Technologies", value: "20+" },
                { label: "Coffee Cups", value: "∞" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center border border-border rounded-lg p-4 bg-card/30 backdrop-blur-sm hover:shadow-neon-cyan transition-all duration-300">
                  <div className="text-2xl font-bold text-neon-purple font-mono">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};