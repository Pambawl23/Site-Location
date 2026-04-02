import { Truck, Phone, MapPin, ChevronRight } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-heading font-bold text-2xl tracking-tight text-white mb-6">
              ALY <span className="text-accent">VOYAGE</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Votre partenaire de confiance pour le transport et la location de
              véhicules à Saint-Louis et partout au Sénégal.
            </p>
            <div className="flex items-center gap-4 text-gray-400">
              <Truck size={24} className="text-accent" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {['Accueil', 'Services', 'Flotte'].map((link) =>
              <li key={link}>
                  <a
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-accent transition-colors flex items-center text-sm">
                  
                    <ChevronRight size={14} className="mr-2" />
                    {link}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nos Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm flex items-center">
                <ChevronRight size={14} className="mr-2 text-accent" />
                Transport interurbain
              </li>
              <li className="text-gray-400 text-sm flex items-center">
                <ChevronRight size={14} className="mr-2 text-accent" />
                Location courte durée
              </li>
              <li className="text-gray-400 text-sm flex items-center">
                <ChevronRight size={14} className="mr-2 text-accent" />
                Location longue durée
              </li>
              <li className="text-gray-400 text-sm flex items-center">
                <ChevronRight size={14} className="mr-2 text-accent" />
                Voyages de groupe
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin
                  size={18}
                  className="mr-3 text-accent shrink-0 mt-0.5" />
                
                <span>Saint-Louis, Sénégal</span>
              </li>
              <li className="flex items-start text-gray-400 text-sm">
                <Phone size={18} className="mr-3 text-accent shrink-0 mt-0.5" />
                <span>(+221) 77 171 04 11</span>
              </li>
            </ul>

            <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
              <p className="text-xs text-gray-400 mb-1">
                <span className="text-gray-300 font-semibold">Ninéa :</span>{' '}
                0008255491
              </p>
              <p className="text-xs text-gray-400">
                <span className="text-gray-300 font-semibold">Agrément :</span>{' '}
                SL/10097477
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} ALY VOYAGE. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm">
            Transport & Location de Voiture
          </p>
        </div>
      </div>
    </footer>);

}