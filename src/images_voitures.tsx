import { img } from './imagePath'


export const cars = [
{
  id: 'toyota-rav4',
  name: 'Toyota RAV4',
  image:
  { src: img('/images/Gmail/IMG_3456.jpeg')},
  desc: 'Berline confortable et économique, idéale pour les trajets urbains et interurbains.',
  priceDay: '35 000 FCFA',
  seats: 5,
  transmission: 'Manuelle',
  ac: true 
},
{
  id: 'toyota-rav4-noir',
  name: 'Toyota RAV4 Noir',
  image:
  {src : img('/images/Gmail/IMG_3457.webp')},
  desc: 'SUV robuste et polyvalent, parfait pour affronter tous types de routes au Sénégal.',
  priceDay: '35 000 FCFA',
  seats: 5,
  transmission: 'Manuelle',
  ac: true
},
{
  id: 'avensis-break',
  name: 'Avensis Break',
  image:
  { src: img('/images/Gmail/IMG_3462.jpeg')},
  desc: 'Offrant un confort exceptionnel pour vos voyages.',
  priceDay: '30 000 FCFA',
  seats: 5,
  transmission: 'Manuelle',
  ac: true
},
{
  id: 'avensis-break-royal',
  name: 'Avensis Break Royal',
  image:
  { src : img('/images/Gmail/IMG_3463.jpeg')},
  desc: 'Berline de luxe pour vos déplacements professionnels ou événements spéciaux.',
  priceDay: '30 000 FCFA',
  seats: 5,
  transmission: 'Manuelle',
  ac: true
},
{
  id: 'toyota-rav4-blanc',
  name: 'Toyota RAV4 Blanc',
  image:
  { src: img('/images/Gmail/IMG_3467.jpeg')},
  desc: 'SUV élégant et spacieux, idéal pour les familles ou les groupes d\'amis en voyage.',
  priceDay: '35 000 FCFA',
  seats: 5,
  transmission: 'Manuelle',
  ac: true
}];

export const trips = [
    {
      id: 'dakar-stlouis',
      from: 'Dakar',
      to: 'Saint-Louis',
      departure: 'Tous les jours - 08h00 et 15h00',
      return: 'Tous les jours - 07h00 et 14h00',
      duration: '~4h30',
      price: '10 000 FCFA',
      seats: '4 places',
      type: 'Véhicule climatisée',
    },
    {
      id: 'stlouis-dakar',
      from: 'Saint-Louis',
      to: 'Dakar',
      departure: 'Tous les jours - 07h00 et 14h00',
      return: 'Tous les jours - 08h00 et 15h00',
      duration: '~4h30',
      price: '10 000 FCFA',
      seats: '4 places',
      type: 'Véhicule climatisée',
    },
    {
      id: 'Stlouis-ziguinchor',
      from: 'Saint-Louis',
      to: 'Ziguinchor',
      departure: 'Lun, Mer, Ven, Dim - 09h00',
      return: 'Mar, Jeu, Sam, Lun - 10h00',
      duration: '~10h00',
      price: '15 000 FCFA',
      seats: '4 places',
      type: 'Véhicule climatisée',
    },
    {
      id: 'stlouis-mbour',
      from: 'Saint-Louis',
      to: 'Mbour',
      departure: 'Mar, Jeu, Sam - 08h30',
      return: 'Mar, Jeu, Sam - 15h00',
      duration: '~5h00',
      price: '12 500 FCFA',
      seats: '4 places',
      type: 'Véhicule climatisée',
    },
    {
      id: 'dakar-stlouis',
      from: 'Dakar',
      to: 'Saint-Louis',
      departure: 'Mardi et Vendredi - 06h00',
      return: 'Mercredi et Samedi - 06h00',
      duration: '~8h00',
      price: '80 000 FCFA',
      type: 'Taxi bagages',
    },
  ];
