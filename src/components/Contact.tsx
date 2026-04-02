import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-accent uppercase tracking-wider mb-2">
            Contactez-nous
          </h2>
          <p className="text-gray-600">
            Pour toute réservation ou demande d'information, n'hésitez pas à
            nous contacter. Notre équipe vous répondra dans les plus brefs
            délais.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="lg:col-span-2 space-y-8">
            
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h4 className="text-xl font-bold text-brand-blue mb-6">
                Informations de contact
              </h4>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Adresse</p>
                    <p className="text-gray-600 mt-1">Saint-Louis, Sénégal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Téléphone</p>
                    <a
                      href="tel:+221771710411"
                      className="text-gray-600 mt-1 hover:text-accent transition-colors block">
                      
                      (+221) 77 171 04 11
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a
                      href="mailto:contact@alyvoyage.sn"
                      className="text-gray-600 mt-1 hover:text-brand-blue transition-colors block">
                      
                      contact@alyvoyage.sn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden relative border border-gray-100">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-50 grayscale" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm flex items-center gap-2 text-brand-blue font-medium">
                  <MapPin size={18} />
                  Saint-Louis, SN
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="lg:col-span-3">
            
            <form
              className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
              onSubmit={(e) => e.preventDefault()}>
              
              <h4 className="text-2xl font-bold text-brand-blue mb-8">
                Envoyez-nous un message
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    placeholder="Votre nom" />
                  
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2">
                    
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    placeholder="+221 77 XXX XX XX" />
                  
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  
                  Service souhaité
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white">
                  
                  <option value="">Sélectionnez un service</option>
                  <option value="transport">Transport interurbain</option>
                  <option value="location">Location de voiture</option>
                  <option value="groupe">Voyage de groupe</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2">
                  
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all resize-none"
                  placeholder="Détails de votre demande (dates, destination, type de véhicule...)">
                </textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-8 bg-brand-blue hover:bg-brand-light text-white font-bold rounded-lg transition-colors">
                
                Envoyer la demande
                <Send size={18} />
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                Nous vous recontacterons par téléphone dans les plus brefs
                délais.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}