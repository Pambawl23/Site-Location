import { motion } from 'framer-motion';
import { ShieldCheck, Clock, ThumbsUp, Wallet } from 'lucide-react';
export function Advantages() {
  const advantages = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'Sécurité Garantie',
    description:
    'Véhicules régulièrement révisés et chauffeurs formés pour votre sécurité absolue.'
  },
  {
    icon: <Clock size={32} />,
    title: 'Service 24/7',
    description:
    'Une équipe disponible à tout moment pour répondre à vos urgences de déplacement.'
  },
  {
    icon: <ThumbsUp size={32} />,
    title: 'Fiabilité',
    description:
    'Ponctualité et respect des engagements sont au cœur de notre service client.'
  },
  {
    icon: <Wallet size={32} />,
    title: 'Prix Compétitifs',
    description:
    'Des tarifs transparents et étudiés pour vous offrir le meilleur rapport qualité-prix.'
  }];

  return (
    <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[20px] border-white" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border-[20px] border-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi choisir ALY VOYAGE ?
          </h2>
          <p className="text-gray-300 text-lg">
            Notre engagement : vous offrir une expérience de transport
            irréprochable au Sénégal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv, index) =>
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
            className="bg-brand-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-accent/50 transition-colors group">
            
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {adv.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{adv.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {adv.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}