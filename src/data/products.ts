const base = import.meta.env.BASE_URL

export const products = [
  { id: 1, name: 'Espresso Noturno', price: 14.90, category: 'Café', image: `${base}img/coffee01.png` },
  { id: 2, name: 'IPA Asphalt', price: 32.00, category: 'Cerveja', image: `${base}img/beer.jpg` },
  { id: 3, name: 'Tabaco Classic Gold', price: 45.00, category: 'Tabacaria', image: `${base}img/tabaco.jpg` },
  { id: 4, name: 'Stout Midnight', price: 35.00, category: 'Cerveja', image: `${base}img/beer(4).jpg` },
  { id: 5, name: 'Grão Bourbon', price: 55.00, category: 'Café', image: `${base}img/coffee04.png` },
  { id: 6, name: 'Pilsen Neon', price: 22.00, category: 'Cerveja', image: `${base}img/beer(2).jpg` },
  { id: 7, name: 'V60 Filtered', price: 12.00, category: 'Café', image: `${base}img/coffee03.png` },
  { id: 8, name: 'Weiss Street', price: 28.90, category: 'Cerveja', image: `${base}img/beer(5).jpg` },
  { id: 9, name: 'Seda Premium Black', price: 12.00, category: 'Tabacaria', image: `${base}img/tabaco2.jpg` },
  { id: 10, name: 'Red Ale Brick', price: 30.00, category: 'Cerveja', image: `${base}img/beer(3).jpg` },
  { id: 11, name: 'Moka Classic', price: 42.00, category: 'Café', image: `${base}img/coffee02.png` },
  { id: 12, name: 'Isqueiro Urban', price: 18.00, category: 'Tabacaria', image: `${base}img/tabaco3.jpg` },
]