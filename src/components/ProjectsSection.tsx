import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time data visualization platform with machine learning insights, processing millions of data points daily.",
    technologies: ["React", "TypeScript", "Python", "TensorFlow", "AWS"],
    category: "Full-Stack",
    status: "Live",
    features: ["Real-time data processing", "ML predictions", "Interactive charts", "API integration"]
  },
  {
    id: 2,
    title: "Microservices E-commerce Platform",
    description: "Scalable e-commerce solution built with microservices architecture, handling high-traffic loads.",
    technologies: ["Node.js", "Docker", "Kubernetes", "MongoDB", "Redis"],
    category: "Backend",
    status: "Development",
    features: ["Microservices architecture", "Payment integration", "Inventory management", "Order tracking"]
  },
  {
    id: 3,
    title: "Blockchain Voting System",
    description: "Secure, transparent voting application using blockchain technology for immutable vote recording.",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum", "IPFS"],
    category: "Blockchain",
    status: "Live",
    features: ["Smart contracts", "Decentralized storage", "Vote verification", "Real-time results"]
  },
  {
    id: 4,
    title: "Real-time Collaboration Tool",
    description: "Team collaboration platform with live document editing, video calls, and project management features.",
    technologies: ["React", "Socket.io", "Node.js", "WebRTC", "PostgreSQL"],
    category: "Full-Stack",
    status: "Live",
    features: ["Live editing", "Video conferencing", "File sharing", "Task management"]
  },
  {
    id: 5,
    title: "IoT Environmental Monitor",
    description: "Smart environmental monitoring system with sensor networks and predictive analytics for climate control.",
    technologies: ["Python", "Raspberry Pi", "MQTT", "InfluxDB", "Grafana"],
    category: "IoT",
    status: "Live",
    features: ["Sensor integration", "Data logging", "Alerts system", "Mobile app"]
  },
  {
    id: 6,
    title: "Neural Network Image Classifier",
    description: "Deep learning model for medical image classification with 98% accuracy rate, deployed in production.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker"],
    category: "AI/ML",
    status: "Research",
    features: ["CNN architecture", "Data augmentation", "Model optimization", "API deployment"]
  }
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-neon-cyan h-full">
        {/* Status Badge */}
        <div className="flex justify-between items-start mb-4">
          <span className={`px-3 py-1 text-xs rounded-full font-mono ${
            project.status === 'Live' ? 'bg-matrix-green/20 text-matrix-green' :
            project.status === 'Development' ? 'bg-neon-blue/20 text-neon-blue' :
            'bg-neon-purple/20 text-neon-purple'
          }`}>
            {project.status}
          </span>
          <span className="px-3 py-1 text-xs bg-gradient-secondary text-background rounded-full font-mono">
            {project.category}
          </span>
        </div>

        {/* Project Title */}
        <h3 className="text-xl font-bold mb-3 text-neon-cyan group-hover:text-neon-purple transition-colors duration-300 font-mono">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            height: isHovered ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden mb-4"
        >
          <h4 className="text-sm font-bold text-neon-purple mb-2 font-mono">Key Features:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {project.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <span className="text-neon-cyan mr-2">&gt;</span>
                {feature}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded font-mono hover:bg-primary hover:text-background transition-colors duration-200"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <button className="flex-1 px-4 py-2 bg-gradient-primary text-background rounded-lg text-sm font-bold hover:shadow-neon-cyan transition-all duration-300 transform hover:scale-105">
            View Live
          </button>
          <button className="flex-1 px-4 py-2 border border-primary text-primary rounded-lg text-sm font-bold hover:bg-primary hover:text-background transition-all duration-300">
            View Code
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Full-Stack", "Backend", "Blockchain", "IoT", "AI/ML"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-neon-cyan">&gt;</span> PROJECTS
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work and side projects. Each project represents hours of passion, 
            problem-solving, and continuous learning in the ever-evolving world of technology.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-primary text-background shadow-neon-cyan'
                  : 'border border-border text-muted-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6 font-mono">
            &gt; Want to see more projects or collaborate?
          </p>
          <button className="px-8 py-4 bg-gradient-secondary text-background font-bold rounded-lg shadow-neon-purple hover:shadow-neon-cyan transition-all duration-300 transform hover:scale-105">
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
};