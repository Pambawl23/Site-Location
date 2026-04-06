import { motion } from 'framer-motion';
import { Users, Settings } from 'lucide-react';
export function Fleet() {
  const vehicles = [
  {
    name: 'RAV4',
    type: 'Location',
    image: '/images/Gmail/IMG_3467.jpeg',
    capacity: '4 places',
    transmission: 'Manuelle',
    price: 'Sur devis'
  },
  {
    name: 'RAV4',
    type: 'Location',
    image: '/images/Gmail/IMG_3467.jpeg',
    capacity: '4 places',
    transmission: 'Manuelle',
    price: 'Sur devis'
  },
  {
    name: 'AVENSIS',
    type: 'Location',
    image: '/images/Gmail/IMG_3463.jpeg',
    capacity: '4 places',
    transmission: 'Manuelle',
    price: 'Sur devis'
  }];

  return (
    <section id="flotte" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
              Notre Flotte
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
              Des véhicules pour chaque besoin
            </h3>
            <p className="text-gray-600">
              Découvrez un aperçu de notre parc automobile. Tous nos véhicules
              sont climatisés et régulièrement entretenus.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) =>
          <motion.div
            key={index}
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
              duration: 0.5,
              delay: index * 0.1
            }}
            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100">
            
              <div className="h-56 overflow-hidden relative">
                <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-blue shadow-sm">
                  {vehicle.type}
                </div>
                <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-gray-900">
                    {vehicle.name}
                  </h4>
                  <span className="text-accent font-bold">{vehicle.price}</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Users size={16} className="mr-2 text-brand-light" />
                    {vehicle.capacity}
                  </div>
                  <div className="flex items-center text-sm text-gray-600 col-span-2">
                    <Settings size={16} className="mr-2 text-brand-light" />
                    {vehicle.transmission}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
