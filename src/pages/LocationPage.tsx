import { motion } from 'framer-motion';
import { Users, Settings, Wind, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cars } from '../images_voitures';

export function LocationPage() {
  return (
    <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div className="relative py-20 lg:py-24 overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('images/Gmail/IMG_3461.jpeg')" }}/>
  {/* Overlay sombre */}
  <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            
            Location de <span className="text-accent">Voitures</span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 0.1
            }}
            className="text-xl text-gray-300 max-w-2xl mx-auto">
            
            Choisissez parmi notre flotte de véhicules récents et entretenus
            pour vos déplacements.
          </motion.p>
        </div>
      </div>

      {/* Car Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) =>
          <motion.div
            key={car.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1
            }}>
            
              <Link
              to={`/location/${car.id}`}
              className="block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
              
                <div className="h-56 overflow-hidden relative">
                  <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-brand-blue shadow-sm">
                    Dès {car.priceDay}/j
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {car.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 flex-grow">
                    {car.desc}
                  </p>

                  <div className="grid grid-cols-3 gap-2 mb-6 py-4 border-y border-gray-100">
                    <div className="flex flex-col items-center text-gray-500">
                      <Users size={18} className="mb-1" />
                      <span className="text-xs">{car.seats} pl.</span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500 border-x border-gray-100">
                      <Settings size={18} className="mb-1" />
                      <span className="text-xs">
                        {car.transmission === 'Automatique' ?
                      'Auto' :
                      'Manuelle'}
                      </span>
                    </div>
                    <div className="flex flex-col items-center text-gray-500">
                      <Wind size={18} className="mb-1" />
                      <span className="text-xs">
                        {car.ac ? 'Clim' : 'Sans clim'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-xs text-gray-500">Tarif mensuel</p>
                      <p className="font-semibold text-brand-blue">
                        {car.priceMonth}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-brand-blue/5 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </main>);

}