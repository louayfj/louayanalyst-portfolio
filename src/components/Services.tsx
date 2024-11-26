import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, Brain, Database, LineChart, PieChart, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BarChart2,
      title: 'Data Analysis',
      description: 'Transform raw data into actionable insights using advanced statistical methods.',
    },
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Develop and deploy ML models for prediction and pattern recognition.',
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Design and implement efficient data pipelines and warehousing solutions.',
    },
    {
      icon: LineChart,
      title: 'Business Intelligence',
      description: 'Create interactive dashboards and reports for data-driven decision making.',
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, compelling visual insights.',
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast trends and outcomes using advanced analytical models.',
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Specialized data analysis and machine learning solutions to help you make
            better decisions and drive growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="service-card group"
            >
              <div className="relative z-10">
                <service.icon className="w-12 h-12 mb-4 text-primary-400 group-hover:text-secondary-400 transition-colors" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;