import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Users,
  Settings,
  Wind,
  Briefcase,
  ArrowRight} from
'lucide-react';
import { cars } from '../images_voitures';
export function CarDetailPage() {
  const { id } = useParams<{
    id: string;
  }>();
  const car = cars.find((c) => c.id === id);
  if (!car) {
    return (
      <main className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Véhicule introuvable
          </h1>
          <Link
            to="/location"
            className="text-brand-blue hover:underline flex items-center justify-center gap-2">
            
            <ArrowLeft size={16} /> Retour au catalogue
          </Link>
        </div>
      </main>);

  }
  return (
    <main className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/location"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-blue transition-colors mb-8 font-medium">
          
          <ArrowLeft size={20} /> Retour au catalogue
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Car Details */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 mb-8">
              <div className="h-80 sm:h-96 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover" />
                
              </div>
              <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {car.name}
                </h1>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {car.desc}
                </p>

                <h3 className="font-bold text-gray-900 mb-4">
                  Caractéristiques
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-xl flex flex-col items-center text-center">
                    <Users size={24} className="text-brand-blue mb-2" />
                    <span className="text-sm font-medium text-gray-900">
                      {car.seats} Places
                    </span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl flex flex-col items-center text-center">
                    <Settings size={24} className="text-brand-blue mb-2" />
                    <span className="text-sm font-medium text-gray-900">
                      {car.transmission}
                    </span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl flex flex-col items-center text-center">
                    <Wind size={24} className="text-brand-blue mb-2" />
                    <span className="text-sm font-medium text-gray-900">
                      {car.ac ? 'Climatisé' : 'Non climatisé'}
                    </span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl flex flex-col items-center text-center">
                    <Briefcase size={24} className="text-brand-blue mb-2" />
                    <span className="text-sm font-medium text-gray-900">
                      Bagages
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 mb-4">Tarification</h3>
                <div className="bg-brand-blue/5 rounded-xl p-6 border border-brand-blue/10">
                  <div className="flex justify-between items-center py-3 border-b border-brand-blue/10">
                    <span className="text-gray-600">Par jour (1-7 jours)</span>
                    <span className="font-bold text-brand-blue text-lg">
                      {car.priceDay}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-brand-blue/10">
                    <span className="text-gray-600">Par semaine</span>
                    <span className="font-bold text-brand-blue text-lg">
                      Sur devis
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-600">Par mois</span>
                    <span className="font-bold text-brand-blue text-lg">
                      {car.priceMonth}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-4 text-center">
                    * Les tarifs peuvent varier selon la saison et la durée
                    exacte.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Reservation Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.2
            }}>
            <a
                    href={`https://wa.me/221770417603?text=${encodeURIComponent(`Bonjour, je souhaite réserver le véhicule : ${car.name} (${car.id})`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg transition-colors">
                     Contacter via WhatsApp
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width="18"
                        height="18"
                        fill="white">
                       <path d="M16 .396C7.164.396.082 7.476.082 16.314c0 2.795.733 5.52 2.126 7.92L.09 31.604l7.61-2.082A15.88 15.88 0 0016 31.232c8.836 0 15.918-7.082 15.918-15.918C31.918 7.476 24.836.396 16 .396zm0 29.094a13.14 13.14 0 01-6.698-1.832l-.48-.286-4.518 1.236 1.216-4.4-.314-.506A13.12 13.12 0 012.826 16.314C2.826 8.982 8.668 3.14 16 3.14c7.334 0 13.174 5.842 13.174 13.174C29.174 23.648 23.334 29.49 16 29.49zm7.23-9.844c-.396-.198-2.344-1.156-2.708-1.288-.362-.132-.626-.198-.888.2-.264.396-1.024 1.288-1.254 1.552-.23.264-.462.298-.858.1-.396-.2-1.672-.616-3.184-1.964-1.178-1.05-1.972-2.346-2.204-2.742-.23-.396-.024-.612.174-.808.178-.178.396-.464.594-.696.198-.232.264-.396.396-.66.132-.264.066-.496-.034-.694-.1-.198-.888-2.144-1.218-2.936-.32-.77-.644-.666-.888-.678l-.756-.014c-.264 0-.694.1-1.058.496-.364.398-1.39 1.358-1.39 3.312 0 1.954 1.422 3.842 1.62 4.108.198.264 2.796 4.27 6.774 5.988.948.408 1.688.652 2.264.834.952.302 1.818.26 2.502.158.764-.114 2.344-.958 2.676-1.882.33-.924.33-1.716.23-1.882-.096-.164-.362-.264-.758-.462z"/>
                      </svg>
                    <ArrowRight size={18} />
                  </a>
          </motion.div>
        </div>
      </div>
    </main>);
}