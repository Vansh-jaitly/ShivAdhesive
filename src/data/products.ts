import foodGradeImg from '@/assets/food-grade.jpeg'
import pastingGumImg from '@/assets/pasting-gum.jpeg'
import neutralCorrugationGumImg from '@/assets/neutral-corrugation-gum.png'
import corrugationGumImg from '@/assets/corrugation-gum.png'
import yellowDextrinImg from '@/assets/yellow-dextrin.jpeg'
import liquidGumImg from '@/assets/liquid-gum.jpeg'

export interface Product {
  id: string
  name: string
  description: string
  features: string[]
  applications: string[]
  packaging: string[]
  badges: string[]
  image: string
}

export const products: Product[] = [
  {
    id: 'food-grade',
    name: 'Neutral (Caustic-Free) Food-Grade Pasting Gum Powders',
    description: 'Food-safe adhesive powders manufactured without caustic soda. Certified for direct and indirect food contact applications.',
    image: foodGradeImg,
    features: [
      'Food-grade certified',
      'Caustic-free formulation',
      'FDA compliant',
      'Odorless and tasteless',
      'Safe for food packaging',
    ],
    applications: [
      'Food packaging',
      'Pharmaceutical packaging',
      'Beverage cartons',
      'Frozen food packaging',
      'Export food packaging',
    ],
    packaging: [
      '40 kg food-grade bags',
      '50 kg food-grade bags',
      'Certified packaging',
    ],
    badges: ['Food Grade', 'FDA Compliant', 'Export Quality'],
  },
  {
    id: 'pasting-gum',
    name: 'Pasting Gum Powder',
    description: 'High-quality pasting gum powder designed for paper-to-paper bonding in packaging applications. Offers excellent adhesion and consistent viscosity.',
    image: pastingGumImg,
    features: [
      'Fast setting time',
      'High bond strength',
      'Water-resistant formulation',
      'Consistent viscosity',
      'Long shelf life',
    ],
    applications: [
      'Paper bag manufacturing',
      'Envelope production',
      'Bookbinding',
      'Label pasting',
      'General paper packaging',
    ],
    packaging: [
      '25 kg bags',
      '30 kg bags',
      '40 kg bags',
      '50 kg bags',
      'Custom packaging available',
    ],
    badges: ['Export Quality', 'B2B'],
  },
  {
    id: 'neutral-corrugation-gum',
    name: 'Neutral Corrugation Gum Powder (Caustic-Free)',
    description: 'An advanced starch-based adhesive specially developed for corrugated board manufacturers seeking a high-performance, caustic-free solution with cleaner handling and improved safety.',
    image: neutralCorrugationGumImg,
    features: [
      'Manufactured from premium maize starch',
      'Completely caustic-free formulation',
      'No caustic soda required during preparation',
      'Balanced pH for safer handling',
      'High green bond strength',
      'Low gelatinization temperature',
      'Excellent flute-to-liner adhesion',
      'Suitable for high-speed corrugation machines',
      'Smooth mixing and consistent viscosity',
      'Reliable performance with reduced steam consumption',
    ],
    applications: [
      'Single-face corrugation',
      'Double-face corrugation',
      'Corrugated sheet manufacturing',
      'Corrugated box production',
      'Heavy-duty packaging',
      'High-speed corrugation plants',
    ],
    packaging: [
      '25 kg bags',
      '30 kg bags',
      '40 kg bags',
      '50 kg bags',
    ],
    badges: ['Caustic-Free', 'Premium Quality', 'Industrial Grade'],
  },
  {
    id: 'corrugation-gum',
    name: 'Corrugation Gum Powder',
    description: 'Specialized adhesive powder for corrugated board production. Ensures strong bonding between liner and fluting paper in corrugation machines.',
    image: corrugationGumImg,
    features: [
      'Optimized for corrugation machines',
      'Excellent penetration',
      'High temperature resistance',
      'Reduced warping',
      'Cost-effective solution',
    ],
    applications: [
      'Single face corrugation',
      'Double face corrugation',
      'Triple wall board production',
      'Box manufacturing',
      'Corrugated sheet production',
    ],
    packaging: [
      '25 kg bags',
      '30 kg bags',
      '40 kg bags',
      '50 kg bags',
      'Bulk packaging',
    ],
    badges: ['Industrial Grade', 'B2B'],
  },
  {
    id: 'yellow-dextrin',
    name: 'Yellow Dextrin',
    description: 'Premium yellow dextrin powder with superior adhesive properties. Ideal for applications requiring high tack and quick setting.',
    image: yellowDextrinImg,
    features: [
      'High tack strength',
      'Quick setting',
      'Excellent water solubility',
      'Consistent quality',
      'Versatile applications',
    ],
    applications: [
      'Textile sizing',
      'Paper conversion',
      'Foundry core binding',
      'Pyrotechnics',
      'Printing industry',
    ],
    packaging: [
      '25 kg bags',
      '50 kg bags',
      'Export packaging',
    ],
    badges: ['Premium Quality', 'Export Quality'],
  },
  {
    id: 'liquid-gum',
    name: 'Liquid Pasting & Corrugation Gum',
    description: 'Ready-to-use liquid adhesive solutions for high-speed production lines. Eliminates mixing time and ensures consistent application.',
    image: liquidGumImg,
    features: [
      'Ready to use',
      'No mixing required',
      'Consistent viscosity',
      'Long open time',
      'Suitable for automated lines',
    ],
    applications: [
      'High-speed corrugation',
      'Automated packaging lines',
      'Label application',
      'Lamination',
      'Carton sealing',
    ],
    packaging: [
      '100 liter drums',
      '1000 liter IBCs',
      'Custom containers',
    ],
    badges: ['Ready to Use', 'Industrial Grade'],
  },

]

