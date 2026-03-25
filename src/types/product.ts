export interface Product {
  id: number
  name: string
  category: 'cafe' | 'cerveja' | 'noite'
  price: number
  image: string
  description: string
}