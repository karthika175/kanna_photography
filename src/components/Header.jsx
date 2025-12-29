import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { siteConfig } from '../config';
import { navigationConfig } from '../routes.config';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);

    // Handle hash links for same-page navigation
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      const currentPath = window.location.pathname;

      // If we're already on the target page, just scroll
      if (currentPath === path || (path === '/' && currentPath === '/')) {
        const element = document.querySelector(`#${hash}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to the page first, then scroll to hash
        navigate(path || '/');
        // Use a longer timeout and retry mechanism to ensure element is loaded
        let attempts = 0;
        const maxAttempts = 20;
        const scrollInterval = setInterval(() => {
          const el = document.querySelector(`#${hash}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            clearInterval(scrollInterval);
          } else if (++attempts >= maxAttempts) {
            clearInterval(scrollInterval);
          }
        }, 100);
      }
    } else {
      navigate(href);
    }
  };

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? ' shadow-md' : 'bg-transparent'
      }`}
      style={isScrolled ? { backgroundColor: 'var(--color-header-footer-background)' } : {}}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {siteConfig.logo.imageUrl ? (
              <img
                src={siteConfig.logo.imageUrl}
                alt={siteConfig.studioName}
                style={{ width: siteConfig.logo.width, height: siteConfig.logo.height }}
              />
            ) : (
              <h1 className="text-2xl md:text-3xl font-butler font-semibold text-secondary">
                {siteConfig.studioName}
              </h1>
            )}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navigationConfig.map((item, index) => (
              item.type === 'dropdown' ? (
                <div key={index} className="relative group">
                  <button
                    className="nav-link flex items-center gap-1"
                    onMouseEnter={() => setOpenDropdown(index)}
                  >
                    {item.label}
                    <FaChevronDown className="text-xs" />
                  </button>
                  <div
                    className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 min-w-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block px-4 py-2 text-text-dark hover:bg-gray-100 transition-colors duration-200"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={index}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="nav-link"
                >
                  {item.label}
                </a>
              )
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-secondary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="container-custom py-4 flex flex-col gap-2">
          {navigationConfig.map((item, index) => (
            item.type === 'dropdown' ? (
              <div key={index}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="nav-link py-2 w-full text-left flex items-center justify-between"
                >
                  {item.label}
                  <FaChevronDown className={`text-xs transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === index && (
                  <div className="pl-4 mt-1 flex flex-col gap-1">
                    {item.items.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block py-2 text-text-dark"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={index}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className="nav-link block py-2"
              >
                {item.label}
              </a>
            )
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
