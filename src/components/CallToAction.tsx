import { motion } from 'framer-motion';
import { Phone, MessageCircle, Instagram, MapPin, Clock, ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section
      id="book"
      className="relative w-full rounded-island bg-navy overflow-hidden p-6 sm:p-10 md:p-14 lg:p-20 text-white border border-lightblue/20 shadow-2xl"
    >
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Massive Editorial Title */}
        <div className="text-center mb-8">
          <h2 className="hero-title-clamp font-black uppercase tracking-tight text-white leading-[0.92] mb-6">
            RESERVE YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-ghost to-lightblue">
              BRIDAL DATE.
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-ghost/90 font-normal leading-relaxed max-w-3xl mx-auto">
            Bridal slots fill months in advance during wedding seasons. Connect directly with Shabana Anjum for consultation, customized bridal trials, and package availability.
          </p>
        </div>

        {/* Primary Contact CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto mb-14">
          <a
            href="https://wa.me/917075997545"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 group px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-emerald-900/30 hover:scale-105"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="tel:+917075997545"
            className="w-full sm:w-auto flex-1 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white font-semibold text-xs sm:text-sm uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105"
          >
            <Phone className="w-4 h-4 text-lightblue" />
            <span>+91 70759 97545</span>
          </a>
        </div>

        {/* Location & Studio Details Grid */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-ghost/80">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-lightblue/10 flex items-center justify-center text-lightblue flex-shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-white font-semibold mb-0.5">Studio Location</p>
              <p className="text-white font-medium">Annu Beauty Salon & Academy</p>
              <p className="text-ghost/60">Mancherial, Telangana, 504208</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-lightblue/10 flex items-center justify-center text-lightblue flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <p className="text-white font-semibold mb-0.5">Operating Hours</p>
              <p className="text-white font-medium">Mon — Sun: 10:00 AM – 8:00 PM</p>
              <p className="text-ghost/60">Early Bridal Slots by Appointment</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
            <div className="w-8 h-8 rounded-xl bg-lightblue/10 flex items-center justify-center text-lightblue flex-shrink-0">
              <Instagram className="w-4 h-4" />
            </div>
            <div>
              <p className="text-white font-semibold mb-0.5">Instagram Updates</p>
              <a
                href="https://instagram.com/salon_annu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-lightblue transition-colors flex items-center gap-1"
              >
                @salon_annu <ArrowRight className="w-3 h-3" />
              </a>
              <p className="text-ghost/60">Daily Stories & Client Transformations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
