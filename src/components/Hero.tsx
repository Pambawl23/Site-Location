import { motion } from 'framer-motion';
const carImages = [
'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=400&auto=format&fit=crop',
'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=400&auto=format&fit=crop',
'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=400&auto=format&fit=crop',
'https://images.unsplash.com/photo-1520627977056-c307aeb9a625?q=80&w=400&auto=format&fit=crop',
'https://images.unsplash.com/photo-1559297434-fae8a1916a79?q=80&w=400&auto=format&fit=crop',
'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=400&auto=format&fit=crop',
'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&auto=format&fit=crop',
'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=400&auto=format&fit=crop',
'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=400&auto=format&fit=crop'];

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative pt-28 pb-16 lg:pt-40 lg:pb-28 bg-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Branding & Text */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6
            }}>
            
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
                className="inline-flex justify-center items-center px-8 py-4 border-2 border-brand-blue/20 text-brand-blue font-semibold rounded-lg hover:border-brand-blue hover:bg-brand-blue/5 transition-all">
                
                Nos services
              </a>
            </div>
          </motion.div>

          {/* Right — Car Image Grid */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="relative">
            
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {carImages.map((src, index) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.08
                }}
                className={`aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${index === 4 ? 'ring-2 ring-accent ring-offset-2' : ''}`}>
                
                  <img
                  src={src}
                  alt={`Véhicule ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                
                </motion.div>
              )}
            </div>

            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-brand-blue/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>);

}