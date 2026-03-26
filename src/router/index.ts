import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    { 
      path: '/', 
      name: 'home', 
      component: HomeView 
    },
    { 
      path: '/products', 
      name: 'products', 
      component: ProductsView 
    },
    { 
      path: '/product/:id', 
      name: 'product-detail', 
      component: ProductDetailView,
      props: true 
    },
    { 
      path: '/cart', 
      name: 'cart', 
      component: CartView 
    },
    { 
      path: '/checkout', 
      name: 'checkout', 
      component: CheckoutView 
    }
  ],
  
  // Garante que a página comece no topo ao mudar de rota
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router