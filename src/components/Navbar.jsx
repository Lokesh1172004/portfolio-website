import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/60 border-b border-white/10 backdrop-blur-lg py-3 md:py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="font-display font-black text-2xl md:text-3xl tracking-tight text-white select-none">
            Lokesh<span className="text-[#FF2A2A]">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative group text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF2A2A] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Action Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-white/5 border border-white/15 backdrop-blur-md text-white font-medium px-6 py-2.5 rounded-full text-sm hover:border-[#FF2A2A]/40 hover:shadow-[0_0_20px_rgba(255,42,42,0.4)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] inline-block"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-white hover:text-[#FF2A2A] transition-colors p-1"
              aria-label="Toggle Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Slide-down Fullscreen Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 w-full h-screen bg-[#FF2A2A] text-white z-[1000] flex flex-col justify-between p-8"
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Header in Overlay */}
            <div className="flex items-center justify-between">
              <span className="font-display font-black text-2xl tracking-tight text-white select-none">
                Lokesh<span className="text-black">.</span>
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-black transition-colors p-1"
                aria-label="Close Menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col items-start space-y-6 my-auto pl-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display font-bold text-4xl hover:text-black transition-colors duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.08, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-black text-white hover:bg-white hover:text-black font-semibold text-lg px-8 py-3.5 rounded-full shadow-lg transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.08, duration: 0.4 }}
              >
                Hire Me
              </motion.a>
            </div>

            {/* Footer in Mobile Menu */}
            <div className="text-white/60 text-xs border-t border-white/20 pt-4 flex justify-between items-center">
              <span>© 2026 Lokesh Zambare</span>
              <span>Always Growing!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
