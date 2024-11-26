import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_7nqoink', // Add your EmailJS service ID
        'template_zradw54', // Add your EmailJS template ID
        form.current,
        '4MYCYWAy1k30ue5GF' // Add your EmailJS public key
      );
      setSubmitStatus('success');
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to transform your data into actionable insights? Let's discuss how I can help you
            achieve your goals.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-xl"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-primary-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-primary-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-primary-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect p-6 rounded-xl flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-primary-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-gray-300">Bangkok, Thailand</p>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl flex items-start space-x-4">
              <Phone className="w-6 h-6 text-primary-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">+66 (065) 552-0168</p>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl flex items-start space-x-4">
              <Mail className="w-6 h-6 text-primary-400 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-300">louayfaraj41@gmail.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;