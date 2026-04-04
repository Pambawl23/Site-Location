import { motion } from 'framer-motion';
import { Users, Settings, Wind } from 'lucide-react';
import { cars } from '../images_voitures';

export function LocationPage() {
  return (
    <main className="pt-24 pb-20 bg-gray-50 min-h-screen">

      {/* Hero Banner */}
      <div className="relative py-20 lg:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Gmail/IMG_3461.jpeg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Location de <span className="text-accent">Voitures</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choisissez parmi notre flotte de véhicules récents et entretenus
            pour vos déplacements.
          </motion.p>
        </div>
      </div>

      {/* Car Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}>

              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">

                <div className="h-56 overflow-hidden relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-brand-blue shadow-sm">
                    Dès {car.priceDay}/j
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">{car.desc}</p>

                  <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-y border-gray-100">
                    <div className="flex flex-col items-center text-gray-500">
                      <Users size={18} className="mb-1" />
                      <span className="text-xs">{car.seats} pl.</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500 border-x border-gray-100">
                      <Settings size={18} className="mb-1" />
                      <span className="text-xs">
                        {car.transmission === 'Automatique' ? 'Auto' : 'Manuelle'}
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500">
                      <Wind size={18} className="mb-1" />
                      <span className="text-xs">{car.ac ? 'Clim' : 'Sans clim'}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      const msg =
                        `Bonjour, je souhaite réserver ce vehicule :\n\n` +
                        `Vehicule : ${car.name}\n` +
                        `Tarif : ${car.priceDay}/jour\n` +
                        `Places : ${car.seats}\n` +
                        `Transmission : ${car.transmission}\n` +
                        `Climatisation : ${car.ac ? 'Oui' : 'Non'}`;
                      window.open('whatsapp://send?phone=221770417603&text=' + encodeURIComponent(msg), '_blank');
                    }}
                    className="mt-auto w-full flex items-center justify-center gap-2 py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors cursor-pointer">
                    Réserver via WhatsApp
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18" fill="white">
                      <path d="M16 .396C7.164.396.082 7.476.082 16.314c0 2.795.733 5.52 2.126 7.92L.09 31.604l7.61-2.082A15.88 15.88 0 0016 31.232c8.836 0 15.918-7.082 15.918-15.918C31.918 7.476 24.836.396 16 .396zm0 29.094a13.14 13.14 0 01-6.698-1.832l-.48-.286-4.518 1.236 1.216-4.4-.314-.506A13.12 13.12 0 012.826 16.314C2.826 8.982 8.668 3.14 16 3.14c7.334 0 13.174 5.842 13.174 13.174C29.174 23.648 23.334 29.49 16 29.49zm7.23-9.844c-.396-.198-2.344-1.156-2.708-1.288-.362-.132-.626-.198-.888.2-.264.396-1.024 1.288-1.254 1.552-.23.264-.462.298-.858.1-.396-.2-1.672-.616-3.184-1.964-1.178-1.05-1.972-2.346-2.204-2.742-.23-.396-.024-.612.174-.808.178-.178.396-.464.594-.696.198-.232.264-.396.396-.66.132-.264.066-.496-.034-.694-.1-.198-.888-2.144-1.218-2.936-.32-.77-.644-.666-.888-.678l-.756-.014c-.264 0-.694.1-1.058.496-.364.398-1.39 1.358-1.39 3.312 0 1.954 1.422 3.842 1.62 4.108.198.264 2.796 4.27 6.774 5.988.948.408 1.688.652 2.264.834.952.302 1.818.26 2.502.158.764-.114 2.344-.958 2.676-1.882.33-.924.33-1.716.23-1.882-.096-.164-.362-.264-.758-.462z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}