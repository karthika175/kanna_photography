import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { colors } from '../config/theme';

const faqItems = [
  {
    id: 1,
    question: 'What is your typical turnaround time for photos?',
    answer:
      'We typically deliver edited photos within 2-3 weeks after the shoot. Rush processing is available for an additional fee. Details are customized based on the project scope.',
  },
  {
    id: 2,
    question: 'Do you provide digital copies or prints?',
    answer:
      'Both! We provide high-resolution digital copies of all edited photos, and we can also arrange professional printing services if you prefer physical prints.',
  },
  {
    id: 3,
    question: 'Are you available for destination photography?',
    answer:
      'Yes, we absolutely offer destination photography services. Travel costs and accommodations are arranged in advance. We have experience with both local and international shoots.',
  },
  {
    id: 4,
    question: 'How do I book a session?',
    answer:
      'Contact us through our contact form or call us at 8072716422. We\'ll discuss your vision, check availability, and provide you with a customized quote and booking details.',
  },
  {
    id: 5,
    question: 'What is your cancellation policy?',
    answer:
      'Cancellations made 30 days in advance receive a full refund. Cancellations within 30 days are subject to a 50% fee. Emergency cancellations may result in losing the booking fee.',
  },
  {
    id: 6,
    question: 'Can we have a pre-shoot consultation?',
    answer:
      'Of course! We always recommend a pre-shoot consultation to discuss your vision, locations, timeline, and any special requirements. This ensures we capture exactly what you want.',
  },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="py-20 md:py-32"
      style={{ backgroundColor: colors.background.light }}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p
            className="text-lg"
            style={{ color: colors.text.secondary }}
          >
            Find answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border-2 rounded-xl overflow-hidden transition-all"
              style={{
                borderColor:
                  openId === item.id ? colors.primary : colors.border,
                backgroundColor:
                  openId === item.id ? colors.background.gray : colors.background.light,
              }}
            >
              <button
                onClick={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
                className="w-full px-6 py-4 flex items-center justify-between hover:opacity-70 transition-opacity"
              >
                <span
                  className="text-lg font-semibold text-left"
                  style={{ color: colors.text.primary }}
                >
                  {item.question}
                </span>
                <ChevronDown
                  size={24}
                  color={colors.primary}
                  className={`transform transition-transform ${
                    openId === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openId === item.id && (
                <div
                  className="px-6 pb-4 border-t-2"
                  style={{ borderColor: colors.border }}
                >
                  <p
                    className="text-base"
                    style={{ color: colors.text.secondary }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
