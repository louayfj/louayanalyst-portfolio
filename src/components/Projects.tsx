import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Sales Performance Analysis',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Segmenting customers based on their purchasing patterns and calculating their Customer Lifetime Value (CLV). The objective is to understand customer behavior, identify high-value customers, and tailor strategies to enhance sales and customer retention.',
      link: 'https://github.com/louayfj/Sales-Performance-Analysis-Project.git'
    },
    {
      title: 'Houses Analysis in Brazil',
      image: 'https://plus.unsplash.com/premium_photo-1680101441559-8d6a02e00c87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnJhemlsJTIwaG91c2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      description: 'An in-depth analysis of Brazils real estate market, highlighting the diverse housing landscape influenced by the country unique cultural and economic conditions. This project explores regional differences, housing types, price trends, and geographic distributions across Brazil.',
      link: 'https://github.com/louayfj/Housing-in-Brazil.git'
    },
    {
      title: 'Student Analysis Dashboard',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      description: 'A dashboard that provides meaningful insights into student data. It serves as a comprehensive tool for educators, administrators, and stakeholders to monitor and improve academic performance, identify trends, and enhance decision-making processes.',
      link: 'https://public.tableau.com/views/StudentAnalysisDashboard_17326194384060/StudentAnalysisDashboard?:language=en-GB&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Marketing Director at TechCorp',
      rating: 5,
      comment: 'Louay\'s analysis transformed our marketing strategy. The insights were invaluable and led to a significant increase in our ROI.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO of DataFlow Solutions',
      rating: 5,
      comment: 'Exceptional work on our customer segmentation project. The results exceeded our expectations and helped us better serve our clients.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      name: 'Emma Thompson',
      role: 'Product Manager at InnovateTech',
      rating: 5,
      comment: 'Working with Louay was a game-changer for our product development process. His data-driven approach helped us make better decisions.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Explore some of my most impactful data analysis projects and their results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-6 rounded-xl group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="aspect-video mb-6 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors"
              >
                <span>View Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary-400">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{testimonial.comment}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;