import { motion } from 'framer-motion'
import { Clock, ArrowRight, Calendar, Users } from 'lucide-react'
export function TransportPage() {
  const trips = [
    {
      id: 'dakar-stlouis',
      from: 'Dakar',
      to: 'Saint-Louis',
      departure: 'Tous les jours - 08h00 et 15h00',
      return: 'Tous les jours - 07h00 et 14h00',
      duration: '~4h30',
      price: '10 000 FCFA',
      seats: '15 places',
      type: 'Minibus climatisé',
    },
    {
      id: 'stlouis-dakar',
      from: 'Saint-Louis',
      to: 'Dakar',
      departure: 'Tous les jours - 07h00 et 14h00',
      return: 'Tous les jours - 08h00 et 15h00',
      duration: '~4h30',
      price: '10 000 FCFA',
      seats: '15 places',
      type: 'Minibus climatisé',
    },
    {
      id: 'Stlouis-ziguinchor',
      from: 'Saint-Louis',
      to: 'Ziguinchor',
      departure: 'Lun, Mer, Ven, Dim - 09h00',
      return: 'Mar, Jeu, Sam, Lun - 10h00',
      duration: '~10h00',
      price: '15 000 FCFA',
      seats: '15 places',
      type: 'Minibus climatisé',
    },
    {
      id: 'stlouis-mbour',
      from: 'Saint-Louis',
      to: 'Mbour',
      departure: 'Mar, Jeu, Sam - 08h30',
      return: 'Mar, Jeu, Sam - 15h00',
      duration: '~5h00',
      price: '12 000 FCFA',
      seats: '7 places',
      type: 'Véhicule 7 places',
    },
    {
      id: 'dakar-stlouis',
      from: 'Dakar',
      to: 'Saint-Louis',
      departure: 'Mardi et Vendredi - 06h00',
      return: 'Mercredi et Samedi - 06h00',
      duration: '~8h00',
      price: '80 000 FCFA',
      seats: '30 places',
      type: 'Taxi bagages',
    },
  ]
  return (
    <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="relative  py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/Gmail/IMG_3461.jpeg')" }}/>
           {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
          >
            Voyages & <span className="text-accent">Itinéraires</span>
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.1,
            }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Découvrez nos trajets réguliers. Confort, sécurité et ponctualité
            garantis.
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {trips.map((trip, index) => (
            <motion.div
              key={trip.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row">
                
                <div className="p-6 md:p-8 flex-grow border-b md:border-b-0 md:border-r border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 font-medium mb-1">
                        Départ
                      </p>
                      <h3 className="text-2xl font-bold text-brand-blue">
                        {trip.from}
                      </h3>
                    </div>
                    <div className="px-4 flex flex-col items-center text-gray-300">
                      <ArrowRight size={24} className="text-accent mb-1" />
                      <span className="text-xs font-medium text-gray-500">
                        {trip.duration}
                      </span>
                    </div>
                    <div className="flex-1 text-right">
                      <p className="text-sm text-gray-500 font-medium mb-1">
                        Arrivée
                      </p>
                      <h3 className="text-2xl font-bold text-brand-blue">
                        {trip.to}
                      </h3>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="text-brand-light mt-0.5" size={18} />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Aller
                        </p>
                        <p className="text-sm text-gray-600">
                          {trip.departure}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="text-brand-light mt-0.5" size={18} />
                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          Retour
                        </p>
                        <p className="text-sm text-gray-600">{trip.return}</p>
                      </div>
                    </div>
                  </div>
                </div>

                
                <div className="p-6 md:p-8 md:w-72 flex flex-col justify-center bg-gray-50/50">
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 font-medium mb-1">
                      Tarif par personne
                    </p>
                    <p className="text-3xl font-bold text-brand-blue">
                      {trip.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                    <Users size={16} />
                    <span>
                      {trip.seats} • {trip.type}
                    </span>
                  </div>

                  <a href={`https://wa.me/221770417603?text=${encodeURIComponent("Bonjour, je souhaite réserver le trajet : " + trip.id)}`}
                     target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors">
  
                      Réserver
                     <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                          width="18"
                          height="18"
                          fill="white">
                          <path d="M16 .396C7.164.396.082 7.476.082 16.314c0 2.795.733 5.52 2.126 7.92L.09 31.604l7.61-2.082A15.88 15.88 0 0016 31.232c8.836 0 15.918-7.082 15.918-15.918C31.918 7.476 24.836.396 16 .396zm0 29.094a13.14 13.14 0 01-6.698-1.832l-.48-.286-4.518 1.236 1.216-4.4-.314-.506A13.12 13.12 0 012.826 16.314C2.826 8.982 8.668 3.14 16 3.14c7.334 0 13.174 5.842 13.174 13.174C29.174 23.648 23.334 29.49 16 29.49zm7.23-9.844c-.396-.198-2.344-1.156-2.708-1.288-.362-.132-.626-.198-.888.2-.264.396-1.024 1.288-1.254 1.552-.23.264-.462.298-.858.1-.396-.2-1.672-.616-3.184-1.964-1.178-1.05-1.972-2.346-2.204-2.742-.23-.396-.024-.612.174-.808.178-.178.396-.464.594-.696.198-.232.264-.396.396-.66.132-.264.066-.496-.034-.694-.1-.198-.888-2.144-1.218-2.936-.32-.77-.644-.666-.888-.678l-.756-.014c-.264 0-.694.1-1.058.496-.364.398-1.39 1.358-1.39 3.312 0 1.954 1.422 3.842 1.62 4.108.198.264 2.796 4.27 6.774 5.988.948.408 1.688.652 2.264.834.952.302 1.818.26 2.502.158.764-.114 2.344-.958 2.676-1.882.33-.924.33-1.716.23-1.882-.096-.164-.362-.264-.758-.462z"/>
                      </svg>
                   </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  )}