import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Transport', href: '/transport' },
    { name: 'Location', href: '/location' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/80 backdrop-blur-sm py-5'}`}>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="font-heading font-bold text-2xl tracking-tight text-brand-blue">
                ALY <span className="text-accent">VOYAGE</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) =>
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-medium transition-colors ${location.pathname === link.href ? 'text-accent' : 'text-gray-700 hover:text-accent'}`}>
                  {link.name}
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-brand-blue"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen &&
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t">

              <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
                {navLinks.map((link) =>
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`block px-3 py-3 text-base font-medium rounded-md ${location.pathname === link.href ? 'text-brand-blue bg-brand-blue/5' : 'text-gray-800 hover:text-brand-blue hover:bg-gray-50'}`}>
                    {link.name}
                  </Link>
                )}
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </nav>
    </>
  );
}