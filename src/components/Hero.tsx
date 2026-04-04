import { motion } from 'framer-motion';

const heroImageSrc = '/images/Gmail/IMG_3461.jpeg';

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative pt-28 pb-16 lg:pt-40 lg:pb-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT — Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading font-extrabold text-brand-blue text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
              Aly
              <br />
              <span className="text-accent">Voyage</span>
            </h1>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-10 h-[3px] bg-brand-blue rounded-full" />
                <span className="text-brand-blue text-xl md:text-2xl font-heading font-semibold tracking-wide">
                  Transport
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-[3px] bg-accent rounded-full" />
                <span className="text-brand-blue text-xl md:text-2xl font-heading font-semibold tracking-wide">
                  Location de Voiture
                </span>
              </div>
            </div>

            <p className="mt-8 text-gray-500 text-lg max-w-md leading-relaxed">
              Votre partenaire de confiance pour le transport et la location de
              véhicules à Saint-Louis, Sénégal.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex justify-center items-center px-8 py-4 border-2 border-brand-blue/20 text-brand-blue font-semibold rounded-lg hover:border-brand-blue hover:bg-brand-blue/5 transition-all"
              >
                Nos services
              </a>
            </div>
          </motion.div>

          {/* RIGHT — Image principale */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={heroImageSrc}
              alt="Véhicule principal"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />

            {/* Overlay premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {/* Décor */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
