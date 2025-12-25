import React from 'react';
import { colors } from '../config/theme';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 md:py-32"
      style={{ backgroundColor: colors.background.gray }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 md:h-[500px] flex items-center justify-center">
            <div
              className="w-full h-full rounded-2xl flex items-center justify-center text-lg font-semibold"
              style={{
                backgroundColor: colors.background.light,
                border: `2px dashed ${colors.primary}`,
                color: colors.text.light,
              }}
            >
              [About Image Placeholder]
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                About Kanna Photography
              </h2>
              <p
                className="text-lg"
                style={{ color: colors.text.secondary }}
              >
                We are passionate photographers dedicated to capturing life's most precious moments.
              </p>
            </div>

            <p
              className="text-base"
              style={{ color: colors.text.light }}
            >
              With years of experience in professional photography, we've had the privilege of documenting hundreds of beautiful stories. Our commitment to excellence, creativity, and attention to detail sets us apart. Every photograph tells a story, and we're honored to preserve yours.
            </p>

            <p
              className="text-base"
              style={{ color: colors.text.light }}
            >
              Our team combines technical expertise with artistic vision to deliver stunning photographs that exceed expectations. We believe in building lasting relationships with our clients, understanding their vision, and bringing it to life through our lens.
            </p>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <p
                  className="text-3xl font-bold mb-2"
                  style={{ color: colors.primary }}
                >
                  500+
                </p>
                <p
                  className="text-sm"
                  style={{ color: colors.text.secondary }}
                >
                  Projects Completed
                </p>
              </div>
              <div>
                <p
                  className="text-3xl font-bold mb-2"
                  style={{ color: colors.primary }}
                >
                  10+
                </p>
                <p
                  className="text-sm"
                  style={{ color: colors.text.secondary }}
                >
                  Years Experience
                </p>
              </div>
              <div>
                <p
                  className="text-3xl font-bold mb-2"
                  style={{ color: colors.primary }}
                >
                  1K+
                </p>
                <p
                  className="text-sm"
                  style={{ color: colors.text.secondary }}
                >
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
