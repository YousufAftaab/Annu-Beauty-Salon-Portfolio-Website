import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { useLenis } from 'lenis/react';

const salonNavLinks = [
  { name: 'About', href: '#artist' },
  { name: 'Services', href: '#services' },
  { name: 'Work', href: '#work' },
  { name: 'Academy', href: '#academy' },
  { name: 'Reviews', href: '#reviews' },
  { name: 'Contact', href: '#book' },
];


export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    if (href === '#') {
      lenis?.scrollTo(0, { duration: 1.4 });
    } else {
      const el = document.querySelector(href);
      if (el) {
        lenis?.scrollTo(el as HTMLElement, { duration: 1.4, offset: -24 });
      }
    }
  };

  return (
    <>
      {/* Floating Glassmorphic Header */}
      <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
        <div
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 max-w-5xl w-full ${
            isScrolled
              ? 'nav-pill-glass shadow-xl shadow-navy/10 border-hairline/80'
              : 'bg-white/90 backdrop-blur-md border border-hairline shadow-md shadow-navy/5'
          }`}
        >
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#');
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center font-bold text-xs group-hover:bg-royal transition-colors">
              A
            </div>
            <div>
              <span className="font-bold text-xs sm:text-sm tracking-tight text-navy block font-sans">
                Annu Beauty Salon
              </span>
              <span className="text-[10px] text-muted block font-normal">
                by Shabana Anjum
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {salonNavLinks.slice(0, 6).map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="px-3 py-1.5 rounded-full text-xs font-medium text-muted hover:text-navy hover:bg-black/5 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="#book"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#book');
              }}
              className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-navy hover:bg-royal text-white text-xs font-semibold tracking-wide transition-all duration-300 shadow-md shadow-navy/20 hover:scale-105"
            >
              <span>Book Visit</span>
              <ArrowRight className="w-3 h-3" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-full text-navy hover:bg-black/5 transition-colors lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-2xl text-white flex flex-col justify-between p-6 sm:p-10 pt-24 lg:hidden"
          >
            <div className="space-y-3 my-auto max-w-md mx-auto w-full">
              {salonNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="flex items-center justify-between py-3 border-b border-white/10 text-xl font-medium hover:text-lightblue transition-colors group"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-ghost/40 group-hover:text-lightblue group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

            {/* Mobile Booking Contact Details */}
            <div className="pt-6 border-t border-white/10 max-w-md mx-auto w-full space-y-3 text-xs">
              <div className="flex items-center justify-between text-ghost/80">
                <span>Mancherial, Telangana</span>
                <span className="text-lightblue">Est. 2001</span>
              </div>
              <div className="flex gap-2">
                <a
                  href="https://wa.me/917075997545"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center gap-2 font-semibold transition-colors text-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+917075997545"
                  className="flex-1 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center gap-2 font-semibold transition-colors text-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Salon</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
