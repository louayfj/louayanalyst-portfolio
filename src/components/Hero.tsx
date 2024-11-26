import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart2,
  Brain,
  LineChart,
  Database,
  TrendingUp
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-24 px-6">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950/20 via-black to-secondary-950/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,theme(colors.primary.500/5),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,theme(colors.secondary.500/5),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center md:text-left order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Data-Driven</span>
            <br />
            Insights & Analytics
          </h1>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Transforming complex data into actionable insights through advanced analytics, 
            machine learning, and data visualization. Helping businesses make informed 
            decisions backed by data.
          </p>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-effect px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center space-x-2 mx-auto md:mx-0 group hover:bg-primary-500/10 transition-colors"
          >
            <span>Discover My Services</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative order-1 md:order-2"
        >
          <div className="relative w-full aspect-square">
            <motion.div
              animate={{ y: [-10, 10], rotate: [-2, 2] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 glass-effect p-6 rounded-2xl w-64 backdrop-blur-lg border border-primary-500/20"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-500/10 rounded-xl">
                  <BarChart2 className="w-8 h-8 text-primary-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400">Data Analysis</div>
                  <div className="text-xl font-bold gradient-text">Advanced</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10], rotate: [2, -2] }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/3 right-0 glass-effect p-6 rounded-2xl w-64 backdrop-blur-lg border border-secondary-500/20"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-secondary-500/10 rounded-xl">
                  <Brain className="w-8 h-8 text-secondary-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400">ML Models</div>
                  <div className="text-xl font-bold gradient-text">25+ Deployed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [-15, 15], rotate: [-1, 1] }}
              transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.3 }}
              className="absolute top-2/3 left-0 glass-effect p-6 rounded-2xl w-64 backdrop-blur-lg border border-primary-500/20"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary-500/10 rounded-xl">
                  <Database className="w-8 h-8 text-primary-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400">Data Processed</div>
                  <div className="text-xl font-bold gradient-text">500TB+</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [12, -12], rotate: [1, -1] }}
              transition={{ duration: 5.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.7 }}
              className="absolute bottom-0 right-1/4 glass-effect p-6 rounded-2xl w-64 backdrop-blur-lg border border-secondary-500/20"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-secondary-500/10 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-secondary-400" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400">ROI Increase</div>
                  <div className="text-xl font-bold gradient-text">150%</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;