import type { Product } from '../types/product'

export const products: Product[] = [
  {
    id: 1,
    name: 'Café Urban Roast',
    category: 'cafe',
    price: 29.9,
    image: 'https://via.placeholder.com/600x400?text=Cafe+Urban+Roast',
    description: 'Café especial com aroma intenso e torra média.'
  },
  {
    id: 2,
    name: 'Cerveja Blend Lager',
    category: 'cerveja',
    price: 18.5,
    image: 'https://via.placeholder.com/600x400?text=Cerveja+Blend+Lager',
    description: 'Cerveja artesanal leve, refrescante e equilibrada.'
  },
  {
    id: 3,
    name: 'Kit Noite Urbana',
    category: 'noite',
    price: 79.9,
    image: 'https://via.placeholder.com/600x400?text=Kit+Noite+Urbana',
    description: 'Kit premium com proposta visual para uma experiência urbana.'
  }
]