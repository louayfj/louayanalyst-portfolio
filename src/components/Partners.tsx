import React from 'react';
import { motion } from 'framer-motion';

const Partners = () => {
  const partners = [
    {
      name: 'Stripe',
      logo: 'https://www.vectorlogo.zone/logos/stripe/stripe-ar21.svg',
    },
    {
      name: 'Shopify',
      logo: 'https://www.vectorlogo.zone/logos/shopify/shopify-ar21.svg',
    },

    {
      name: 'Twilio',
      logo: 'https://www.vectorlogo.zone/logos/twilio/twilio-ar21.svg',
    },
    {
      name: 'Slack',
      logo: 'https://www.vectorlogo.zone/logos/slack/slack-ar21.svg',
    },
    {
      name: 'Asana',
      logo: 'https://www.vectorlogo.zone/logos/asana/asana-ar21.svg',
    },
    {
      name: 'Hubspot',
      logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-ar21.svg',
    },
    {
      name: 'Zendesk',
      logo: 'https://www.vectorlogo.zone/logos/zendesk/zendesk-ar21.svg',
    },
    {
      name: 'Monday',
      logo: 'https://www.vectorlogo.zone/logos/monday/monday-ar21.svg',
    },
  ];

  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Trusted by <span className="gradient-text">Industry Leaders</span>
        </motion.h2>

        <div className="flex space-x-12 animate-slide">
          {[...partners, ...partners].map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 glass-effect p-6 rounded-xl w-48 h-24 flex items-center justify-center group"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain opacity-50 group-hover:opacity-100 transition-opacity invert"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
