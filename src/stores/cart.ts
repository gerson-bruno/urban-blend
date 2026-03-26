import { defineStore } from 'pinia'
import type { Product } from '../types/product'

export interface CartItem extends Product {
  quantity: number
}

interface CartState {
  items: CartItem[]
}

export const useCartStore = defineStore('cart', {
  state: (): CartState => ({
    items: []
  }),

  getters: {
    totalItems: (state) =>
      state.items.reduce((total, item) => total + item.quantity, 0),

    totalPrice: (state) =>
      state.items.reduce((total, item) => total + item.price * item.quantity, 0)
  },

  actions: {
    addToCart(product: Product) {
      const existingItem = this.items.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
      this.saveCart()
    },

    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId)
      this.saveCart()
    },

    increaseQuantity(productId: number) {
      const item = this.items.find((item) => item.id === productId)
      if (item) {
        item.quantity += 1
        this.saveCart()
      }
    },

    decreaseQuantity(productId: number) {
      const item = this.items.find((item) => item.id === productId)
      if (!item) return
      if (item.quantity > 1) {
        item.quantity -= 1
      } else {
        this.items = this.items.filter((item) => item.id !== productId)
      }
      this.saveCart()
    },

    clearCart() {
      this.items = []
      this.saveCart()
    },

    saveCart() {
      localStorage.setItem('urban-blend-cart', JSON.stringify(this.items))
    },

    loadCart() {
      const savedCart = localStorage.getItem('urban-blend-cart')
      if (savedCart) {
        try {
          this.items = JSON.parse(savedCart)
        } catch (e) {
          console.error("Erro ao carregar carrinho", e)
          this.items = []
        }
      }
    }
  }
})