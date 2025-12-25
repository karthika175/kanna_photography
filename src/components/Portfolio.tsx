import React, { useState } from 'react';
import { colors } from '../config/theme';

const portfolioCategories = [
  'All',
  'Weddings',
  'Events',
  'Portraits',
  'Commercial',
  'Nature',
];

const portfolioItems = [
  { id: 1, category: 'Weddings', title: 'Wedding Ceremony' },
  { id: 2, category: 'Weddings', title: 'Reception Moments' },
  { id: 3, category: 'Events', title: 'Corporate Event' },
  { id: 4, category: 'Portraits', title: 'Studio Portrait' },
  { id: 5, category: 'Commercial', title: 'Product Photography' },
  { id: 6, category: 'Nature', title: 'Landscape Shot' },
  { id: 7, category: 'Events', title: 'Birthday Celebration' },
  { id: 8, category: 'Portraits', title: 'Family Portrait' },
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="py-20 md:py-32"
      style={{ backgroundColor: colors.background.gray }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Portfolio
          </h2>
          <p
            className="text-lg"
            style={{ color: colors.text.secondary }}
          >
            Explore our latest photography projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {portfolioCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className="px-6 py-2 rounded-full font-semibold transition-all text-sm md:text-base"
              style={{
                backgroundColor:
                  activeCategory === category
                    ? colors.primary
                    : colors.background.light,
                color:
                  activeCategory === category
                    ? '#000'
                    : colors.text.primary,
                border:
                  activeCategory === category
                    ? 'none'
                    : `1px solid ${colors.border}`,
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-xl"
              style={{ backgroundColor: colors.background.light }}
            >
              <div
                className="h-64 flex items-center justify-center text-gray-400 font-semibold relative overflow-hidden"
                style={{
                  backgroundColor: colors.background.gray,
                  border: `2px dashed ${colors.primary}`,
                }}
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                [Portfolio Image]
              </div>
              <div className="p-4">
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: colors.primary }}
                >
                  {item.category}
                </p>
                <h3
                  className="text-lg font-bold"
                  style={{ color: colors.text.primary }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
