import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { colors } from '../config/theme';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer
      className="py-12 md:py-16"
      style={{ backgroundColor: colors.background.dark }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/final.png"
                alt="Kanna Photography Logo"
                className="h-8 w-8 object-contain"
              />
              <span
                className="text-lg font-bold tracking-wider"
                style={{ color: colors.primary }}
              >
                KANNA
              </span>
            </div>
            <p
              className="text-sm"
              style={{ color: colors.text.light }}
            >
              Professional photography services capturing your most precious moments.
            </p>
          </div>

          <div>
            <h4
              className="font-semibold mb-4 text-sm uppercase tracking-wide"
              style={{ color: colors.text.onDark }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: colors.text.light }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold mb-4 text-sm uppercase tracking-wide"
              style={{ color: colors.text.onDark }}
            >
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: colors.text.light }}
                >
                  Wedding Photography
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: colors.text.light }}
                >
                  Event Photography
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: colors.text.light }}
                >
                  Portrait Sessions
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: colors.text.light }}
                >
                  Commercial Photography
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold mb-4 text-sm uppercase tracking-wide"
              style={{ color: colors.text.onDark }}
            >
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:8072716422"
                  className="text-sm transition-colors hover:opacity-70"
                  style={{ color: colors.text.light }}
                >
                  8072716422
                </a>
              </li>
              <li>
                <p
                  className="text-sm"
                  style={{ color: colors.text.light }}
                >
                  contact@kannaphoto.com
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-8"
          style={{ borderColor: colors.borderDark }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p
              className="text-sm"
              style={{ color: colors.text.light }}
            >
              &copy; {currentYear} Kanna Photography. All rights reserved.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 rounded-full transition-colors hover:bg-opacity-80"
                    style={{
                      backgroundColor: colors.primary,
                      color: '#000',
                    }}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
