import { motion } from "framer-motion";
import { useState } from "react";

const contactMethods = [
  {
    icon: "📧",
    label: "Email",
    value: "ramin.w7@gmail.com",
    action: "mailto:ramin.w7@gmail.com",
    description: "Drop me a line anytime"
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/ramin-w",
    action: "https://www.linkedin.com/in/ramin-wafa-0644742b3/",
    description: "Let's connect professionally"
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/WRamin",
    action: "https://github.com/WRamin",
    description: "Check out my code"
  }/*,
  {
    icon: "🐦",
    label: "Twitter",
    value: "@developer",
    action: "https://twitter.com/developer",
    description: "Follow my tech journey"
  } */
];

const ContactMethod = ({ method, index }: { method: typeof contactMethods[0]; index: number }) => (
  <motion.a
    href={method.action}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className="block p-6 border border-border rounded-lg bg-card/50 backdrop-blur-sm hover:border-primary hover:shadow-neon-cyan transition-all duration-300 group"
  >
    <div className="text-3xl mb-3">{method.icon}</div>
    <h3 className="text-lg font-bold text-neon-cyan group-hover:text-neon-purple transition-colors duration-300 font-mono">
      {method.label}
    </h3>
    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
    <p className="text-xs text-primary font-mono break-all">{method.value}</p>
  </motion.a>
);

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 id="contact" className="text-4xl md:text-6xl font-bold mb-4 font-mono">
            <span className="text-neon-cyan">&gt;</span> CONTACT
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can work together 
            to create something amazing. I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="border border-border rounded-lg p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-neon-purple font-mono">
                &gt; send_message()
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none focus:shadow-neon-cyan transition-all duration-300 font-mono"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-muted-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none focus:shadow-neon-cyan transition-all duration-300 font-mono"
                      placeholder="your.email@domain.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none focus:shadow-neon-cyan transition-all duration-300 font-mono"
                    placeholder="Project collaboration"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-mono text-muted-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:border-primary focus:outline-none focus:shadow-neon-cyan transition-all duration-300 font-mono resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-primary text-background font-bold rounded-lg shadow-neon-cyan hover:shadow-neon-purple transition-all duration-300 font-mono"
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="border border-border rounded-lg p-8 bg-card/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-neon-cyan font-mono">
                &gt; connect_with_me()
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Choose your preferred way to get in touch. I typically respond within 24 - 48 hours 
                and I'm always excited to discuss new projects, opportunities, or just chat about tech!
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <ContactMethod key={method.label} method={method} index={index} />
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border border-border rounded-lg p-6 bg-card/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-matrix-green rounded-full animate-pulse"></div>
                <h4 className="text-lg font-bold text-matrix-green font-mono">
                  Status: Available for Projects
                </h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Currently accepting new opportunities and collaboration. 
                Remote work preferred, but open to discussing on-site arrangements.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground font-mono">
            &copy; 2025 Ramin's Portfolio. Built with React + TypeScript 
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p>
        </motion.div>
      </div>
    </section>
  );
};