import { siteConfig } from '../config';

const Footer = () => {
  return (
    <footer className="text-white py-12" style={{backgroundColor:'var(--color-header-footer-background)'}}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-butler mb-4">{siteConfig.studioName}</h3>
            <p className="text-gray-300 leading-relaxed">
              Creating timeless memories through the art of photography.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-butler mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-accent-green transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-butler mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>{siteConfig.contact.email}</li>
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">{siteConfig.footer.copyright}</p>
          <div className="flex gap-6">
            {siteConfig.footer.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-accent-green transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
