import React from 'react';
import { ArrowDown } from 'lucide-react';
import { colors } from '../config/theme';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 md:pt-48 md:pb-32 min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: colors.background.light }}
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute w-96 h-96 rounded-full"
          style={{
            backgroundColor: colors.primary,
            top: '-50px',
            right: '-50px',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Capture Your
                <span style={{ color: colors.primary }} className="block">
                  Precious Moments
                </span>
              </h1>
              <p
                className="text-xl md:text-2xl mb-4"
                style={{ color: colors.text.secondary }}
              >
                Professional photography for every occasion
              </p>
            </div>

            <p
              className="text-base md:text-lg max-w-lg"
              style={{ color: colors.text.light }}
            >
              At Kanna Photography, we specialize in capturing the essence of your most important moments. From weddings to events, we bring creativity and professionalism to every shot.
            </p>

            <div className="flex gap-4 pt-8">
              <button
                onClick={() =>
                  document
                    .getElementById('portfolio')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 font-semibold rounded-lg transition-all hover:scale-105 text-white"
                style={{
                  backgroundColor: colors.primary,
                  color: '#000',
                }}
              >
                View Portfolio
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-8 py-4 font-semibold rounded-lg border-2 transition-all hover:scale-105"
                style={{
                  borderColor: colors.primary,
                  color: colors.primary,
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>

          <div className="relative h-96 md:h-[500px] flex items-center justify-center">
            <div
              className="w-full h-full rounded-2xl flex items-center justify-center text-lg font-semibold"
              style={{
                backgroundColor: colors.background.gray,
                border: `2px dashed ${colors.primary}`,
                color: colors.text.light,
              }}
            >
              [Hero Image Placeholder]
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} color={colors.primary} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
