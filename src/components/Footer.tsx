import { ArrowUp, Phone, MessageCircle, Instagram } from 'lucide-react';
import { useLenis } from 'lenis/react';

export function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    lenis?.scrollTo(0, { duration: 1.4 });
  };

  return (
    <footer className="relative w-full rounded-island bg-navy-dark overflow-hidden p-6 sm:p-10 md:p-14 text-white border border-lightblue/15 shadow-2xl">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 pb-10 border-b border-white/10">
        {/* Brand & Director */}
        <div className="space-y-2 max-w-xl">
          <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
            Annu Beauty Salon & Academy
          </h3>
          <p className="text-xs sm:text-sm text-ghost/70 font-normal leading-relaxed">
            Led by master makeup artist Shabana Anjum with over 23 years of celebrated bridal transformations and certified vocational education in Mancherial, Telangana.
          </p>
        </div>

        {/* Quick Back to Top Pill */}
        <button
          onClick={scrollToTop}
          className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-medium uppercase tracking-wide text-ghost hover:text-white transition-all flex items-center gap-2 group self-start lg:self-auto"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-lightblue" />
        </button>
      </div>

      {/* Directory & Social Links Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-8 border-b border-white/10 text-xs">
        <div>
          <p className="text-white font-semibold mb-3">
            Services
          </p>
          <ul className="space-y-2 text-ghost/70">
            <li><a href="#work" className="hover:text-white transition-colors">Bridal & Occasions</a></li>
            <li><a href="#work" className="hover:text-white transition-colors">Maternity Glamour</a></li>
            <li><a href="#work" className="hover:text-white transition-colors">Hair Styling & Braids</a></li>
            <li><a href="#work" className="hover:text-white transition-colors">Bespoke Nail Art</a></li>
          </ul>


        </div>

        <div>
          <p className="text-white font-semibold mb-3">
            Academy
          </p>
          <ul className="space-y-2 text-ghost/70">
            <li><a href="#academy" className="hover:text-white transition-colors">Bridal Diploma</a></li>
            <li><a href="#academy" className="hover:text-white transition-colors">Hair Styling Masterclass</a></li>
            <li><a href="#academy" className="hover:text-white transition-colors">Beauty Therapy</a></li>
            <li><a href="#academy" className="hover:text-white transition-colors">1-on-1 Mentorship</a></li>
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">
            Direct Contact
          </p>
          <ul className="space-y-2 text-ghost/70">
            <li>
              <a href="tel:+917075997545" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-lightblue" /> +91 70759 97545
              </a>
            </li>
            <li>
              <a href="https://wa.me/917075997545" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <MessageCircle className="w-3 h-3 text-emerald-400" /> WhatsApp Direct
              </a>
            </li>
            <li>
              <a href="https://instagram.com/salon_annu" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5">
                <Instagram className="w-3 h-3 text-pink-400" /> @salon_annu
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-white font-semibold mb-3">
            Studio Location
          </p>
          <p className="text-ghost/70 leading-relaxed">
            Annu Beauty Salon & Academy<br />
            Mancherial, Telangana<br />
            504208, India
          </p>
        </div>
      </div>

      {/* Bottom Legal & Philosophy Copyright */}
      <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ghost/60">
        <p>
          &copy; {new Date().getFullYear()} Annu Beauty Salon & Academy. All rights reserved.
        </p>
        <p className="text-ghost/40">
          Crafting authentic bridal radiance & empowering future artists since 2001.
        </p>
      </div>
    </footer>
  );
}
