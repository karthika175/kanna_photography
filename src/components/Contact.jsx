import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { siteConfig } from '../config';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaPinterest, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Replace this URL with your Google Apps Script Web App URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyp-fQ5GeGuU-fHudteEwA98t27NcNIIntuTAM7X5sg4ICT9TODUjmxefx0_iWtfxaC/exec';

      // Create FormData object to avoid CORS issues with Google Apps Script
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Oops! Something went wrong. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Get In Touch</h2>
          <p className="text-lg text-text-dark max-w-2xl mx-auto">
            Ready to capture your special moments? We'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-pink bg-opacity-10 rounded-full flex items-center justify-center">
                <FaEnvelope className="text-xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-butler mb-2">Email</h3>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-text-dark transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-pink bg-opacity-10 rounded-full flex items-center justify-center">
                <FaPhone className="text-xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-butler mb-2">Phone</h3>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="text-text-dark transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent-pink bg-opacity-10 rounded-full flex items-center justify-center">
                <FaMapMarkerAlt className="text-xl text-white" />
              </div>
              <div>
                <h3 className="text-xl font-butler mb-2">Location</h3>
                <p className="text-text-dark">{siteConfig.contact.address}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-butler mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href={siteConfig.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent-pink bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <FaInstagram className="text-xl" />
                </a>
                <a
                  href={siteConfig.contact.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent-pink bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
                <a
                  href={siteConfig.contact.social.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent-pink bg-opacity-10 rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <FaPinterest className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <textarea
                rows="5"
                name="message"
                placeholder="Tell us about your event..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
              ></textarea>
            </div>

            {submitStatus.message && (
              <div
                className={`p-4 rounded-lg ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
