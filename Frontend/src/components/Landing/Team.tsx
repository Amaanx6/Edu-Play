import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Brain, Github, Twitter, Linkedin } from 'lucide-react';

export const Team = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      icon: <Rocket className="w-12 h-12" />,
      color: "from-purple-500 to-pink-500",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "CTO",
      icon: <Brain className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      icon: <Palette className="w-12 h-12" />,
      color: "from-pink-500 to-rose-500",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      icon: <Code2 className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-slate-900 to-black"></div>
      
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute w-96 h-96 bg-purple-500 rounded-full filter blur-3xl -top-20 -left-20"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 4
          }}
          className="absolute w-96 h-96 bg-blue-500 rounded-full filter blur-3xl -bottom-20 -right-20"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet Our
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"> Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Passionate experts dedicated to revolutionizing education through technology and innovation.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 hover:bg-white/20 transition-all duration-300 transform hover:shadow-xl hover:shadow-purple-500/20">
                <div className="flex flex-col items-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} p-4 mb-6 flex items-center justify-center text-white shadow-lg`}
                  >
                    {member.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-400 mb-6">{member.role}</p>
                  <div className="flex space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <motion.a
                        key={platform}
                        href={url}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                        {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                        {platform === 'github' && <Github className="w-5 h-5" />}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};