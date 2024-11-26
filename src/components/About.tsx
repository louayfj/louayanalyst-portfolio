import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Brain, Users } from 'lucide-react';

const CountUp = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = Math.ceil((target / duration) * 50);

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(start);
    }, 50);

    return () => clearInterval(interval);
  }, [target]);

  return <>{count.toLocaleString()}</>;
};

const About = () => {
  const milestones = [
    { icon: Users, text: 'Satisfied Clients', value: 50 },
    { icon: BarChart2, text: 'Projects Completed', value: 75 },
    { icon: Brain, text: 'ML Models Deployed', value: 25 },
  ];

  return (
    <section id="about-me" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Passionate data analyst with expertise in transforming complex data into actionable insights.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-8 rounded-xl text-center"
            >
              <milestone.icon className="w-12 h-12 mx-auto mb-4 text-primary-400" />
              <motion.span
                className="text-4xl font-bold gradient-text block mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <CountUp target={milestone.value} />+
              </motion.span>
              <span className="text-gray-300">{milestone.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect p-8 rounded-xl"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className="text-gray-300 mb-4">
                I’m Louay, a dedicated Data Analyst with a strong passion for uncovering insights 
                and solving business challenges through data. My expertise
                spans across various industries, from e-commerce to finance, where I've
                consistently delivered impactful insights that drive business growth.
              </p>
              <p className="text-gray-300 mb-4">
                I specialize in advanced analytics, predictive modeling, and data
                visualization, using tools like Python, R, SQL, and various BI platforms.
                My approach combines technical expertise with business acumen to deliver
                solutions that make a real difference.
              </p>
              <p className="text-gray-300">
                Whether it's optimizing operations, improving customer experience, or
                identifying new opportunities, I'm passionate about using data to solve
                complex business challenges and drive measurable results.
              </p>
            </div>
            <div className="relative h-64">
              <motion.img
                src="https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Data Analysis Visualization"
                className="rounded-xl object-cover w-full h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;