import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { colors } from '../config/theme';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className="fixed w-full top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/final.png"
              alt="Kanna Photography Logo"
              className="h-10 w-10 object-contain"
            />
            <span
              className="text-xl font-bold tracking-wider"
              style={{ color: colors.primary }}
            >
              KANNA
            </span>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X size={24} color={colors.primary} />
            ) : (
              <Menu size={24} color={colors.primary} />
            )}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-wide transition-colors hover:opacity-70"
                style={{ color: colors.text.primary }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 space-y-2 pb-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide transition-all hover:bg-gray-100"
                style={{ color: colors.text.primary }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
