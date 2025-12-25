import React from 'react';
import { Heart, Users, Camera, Sparkles } from 'lucide-react';
import { colors } from '../config/theme';

const services = [
  {
    id: 1,
    icon: Heart,
    title: 'Wedding Photography',
    description:
      'Capture the beauty and emotion of your special day with our professional wedding photography services.',
  },
  {
    id: 2,
    icon: Users,
    title: 'Event Photography',
    description:
      'From corporate events to celebrations, we document every important moment with precision and artistry.',
  },
  {
    id: 3,
    icon: Camera,
    title: 'Portrait Sessions',
    description:
      'Professional portrait photography that brings out the best in you. Perfect for families, individuals, and professionals.',
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'Commercial Photography',
    description:
      'High-quality product and commercial photography designed to elevate your brand and business presence.',
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 md:py-32"
      style={{ backgroundColor: colors.background.light }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: colors.text.secondary }}
          >
            We offer a comprehensive range of photography services tailored to meet your unique needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="p-8 rounded-xl border-2 transition-all hover:shadow-lg hover:-translate-y-2"
                style={{
                  backgroundColor: colors.background.light,
                  borderColor: colors.border,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: colors.primary }}
                >
                  <Icon size={24} color="#000" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.text.primary }}>
                  {service.title}
                </h3>
                <p style={{ color: colors.text.secondary }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
