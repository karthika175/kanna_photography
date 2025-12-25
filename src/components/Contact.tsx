import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { colors } from '../config/theme';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '8072716422',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@kannaphoto.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Your City, Country',
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-32"
      style={{ backgroundColor: colors.background.gray }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h2>
          <p
            className="text-lg"
            style={{ color: colors.text.secondary }}
          >
            Ready to capture your special moments? Let's talk!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-xl text-center"
                style={{
                  backgroundColor: colors.background.light,
                  border: `2px solid ${colors.border}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: colors.primary }}
                >
                  <Icon size={24} color="#000" />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: colors.text.primary }}>
                  {info.label}
                </h3>
                <p
                  style={{ color: colors.text.secondary }}
                >
                  {info.value}
                </p>
              </div>
            );
          })}
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-8 rounded-2xl"
          style={{
            backgroundColor: colors.background.light,
            border: `2px solid ${colors.border}`,
          }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: colors.text.primary }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2"
                style={{
                  borderColor: colors.border,
                  focusColor: colors.primary,
                }}
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: colors.text.primary }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2"
                style={{
                  borderColor: colors.border,
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: colors.text.primary }}
              >
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2"
                style={{
                  borderColor: colors.border,
                }}
              />
            </div>
            <div>
              <label
                className="block text-sm font-semibold mb-2"
                style={{ color: colors.text.primary }}
              >
                Subject
              </label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2"
                style={{
                  borderColor: colors.border,
                }}
              >
                <option value="">Select a service</option>
                <option value="wedding">Wedding Photography</option>
                <option value="event">Event Photography</option>
                <option value="portrait">Portrait Session</option>
                <option value="commercial">Commercial Photography</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-semibold mb-2"
              style={{ color: colors.text.primary }}
            >
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2"
              style={{
                borderColor: colors.border,
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 font-semibold rounded-lg transition-all hover:scale-105 flex items-center justify-center gap-2 text-white"
            style={{
              backgroundColor: colors.primary,
              color: '#000',
            }}
          >
            <Send size={20} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
