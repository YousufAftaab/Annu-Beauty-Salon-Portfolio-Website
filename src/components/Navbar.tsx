import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Let Lenis handle scroll lock — never touch body.style.overflow
  useEffect(() => {
    if (!lenis) return;
    if (isMobileMenuOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
    return () => {
      lenis.start();
    };
  }, [isMobileMenuOpen, lenis]);

  // Smooth scroll via Lenis instead of native anchor jumps
  const scrollTo = (href: string) => {
    if (href === '#') {
      lenis?.scrollTo(0, { duration: 1.4 });
    } else {
      const target = document.querySelector(href);
      if (target) lenis?.scrollTo(target as HTMLElement, { duration: 1.4, offset: -80 });
    }
  };

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  // Stagger animation variants for mobile menu links
  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
    },
    exit: {
      opacity: 0,
      y: -15,
      filter: 'blur(4px)',
      transition: { duration: 0.25 },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 navbar-glass'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); scrollTo('#'); }}
          className={`text-2xl font-serif font-semibold tracking-wide z-50 transition-colors duration-300 ${
            isMobileMenuOpen ? 'text-white' : 'text-[#1a1a1a]'
          }`}
        >
          Annu Beauty Salon
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="nav-link-hover text-sm font-medium transition-colors relative"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            onClick={(e) => { e.preventDefault(); scrollTo('#book'); }}
            className="bg-[#1a1a1a] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#C9A961] transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A961]/25"
          >
            Book Appointment
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden z-50 p-2 transition-colors duration-300 ${
            isMobileMenuOpen ? 'text-white' : 'text-[#1a1a1a]'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav — Fullscreen Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-40 bg-[#1a1a1a]/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
            >
              <motion.nav
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col items-center space-y-8"
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    variants={linkVariants}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); setTimeout(() => scrollTo(link.href), 350); }}
                    className="text-3xl font-serif text-white/90 hover:text-[#C9A961] transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  variants={linkVariants}
                  href="#book"
                  onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); setTimeout(() => scrollTo('#book'), 350); }}
                  className="mt-4 bg-[#C9A961] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#b89549] transition-colors"
                >
                  Book Appointment
                </motion.a>
              </motion.nav>

              {/* Decorative blurred circles */}
              <div className="absolute top-20 left-10 w-40 h-40 bg-[#C9A961]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-20 right-10 w-56 h-56 bg-[#E8B4B0]/15 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}