import { motion } from 'framer-motion';
import { Truck, Car, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Services() {
  const services = [
  {
    title: 'Transport',
    description:
    'Service de transport interurbain fiable et sécurisé. Nous assurons vos déplacements de groupes, transferts aéroport et voyages à travers le Sénégal avec des chauffeurs expérimentés.',
    icon: <Truck size={40} className="text-accent" />,
    image: '/images/Gmail/IMG_3461.jpeg',
    features: [
    'Transport interurbain',
    'Voyages de groupe',
    'Chauffeurs professionnels'],

    href: '/transport'
  },
  {
    title: 'Location de Voiture',
    description:
    'Une large gamme de véhicules disponibles pour vos besoins personnels ou professionnels. Location courte et longue durée avec des conditions flexibles et des tarifs compétitifs.',
    icon: <Car size={40} className="text-brand-blue" />,
    image: '/images/Gmail/IMG_3456.jpeg',
    features: [
    'Courte et longue durée',
    'Véhicules récents',
    'Assurance incluse',
    'Kilométrage flexible'],

    href: '/location'
  }];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
            Nos Domaines d'Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Des solutions adaptées à vos besoins
          </h3>
          <p className="text-gray-600 text-lg">
            ALY VOYAGE vous accompagne dans tous vos projets de mobilité avec
            professionnalisme et rigueur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
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
              delay: index * 0.2
            }}
            className="group rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
              
                <div className="absolute top-4 left-4 z-20 bg-white p-3 rounded-xl shadow-lg">
                  {service.icon}
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold text-brand-blue mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) =>
                <li
                  key={idx}
                  className="flex items-center text-sm text-gray-700 font-medium">
                  
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                      {feature}
                    </li>
                )}
                </ul>

                <Link
                to={service.href}
                className="inline-flex items-center text-brand-blue font-semibold group-hover:text-accent transition-colors">
                
                  En savoir plus{' '}
                  <ArrowRight
                  size={18}
                  className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
