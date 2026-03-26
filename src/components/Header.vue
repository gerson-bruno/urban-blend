<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { useCartStore } from '../stores/cart' 

const route = useRoute()
const cartStore = useCartStore()
</script>

<template>
  <nav 
    class="fixed top-0 left-0 w-full z-50 
    bg-[#06171F]/80 backdrop-blur-md 
    border-b border-[#E7D6AC]/10"
  >
    <div class="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

      <RouterLink 
        to="/" 
        class="text-[22px] font-black italic uppercase tracking-tighter text-[#E7D6AC] hover:opacity-80 transition"
      >
        Urban<span class="text-[#C58961]">Blend</span>
      </RouterLink>

      <div class="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase items-center">

        <RouterLink 
          to="/" 
          class="relative pb-1 transition"
          :class="route.path === '/' ? 'text-[#C58961]' : 'text-[#E7D6AC]/60 hover:text-[#E7D6AC]'"
        >
          Home
          <span v-if="route.path === '/'" class="absolute left-0 bottom-0 w-full h-[1px] bg-[#C58961]" />
        </RouterLink>

        <RouterLink 
          to="/products" 
          class="relative pb-1 transition"
          :class="route.path === '/products' ? 'text-[#C58961]' : 'text-[#E7D6AC]/60 hover:text-[#E7D6AC]'"
        >
          Produtos
          <span v-if="route.path === '/products'" class="absolute left-0 bottom-0 w-full h-[1px] bg-[#C58961]" />
        </RouterLink>

        <RouterLink 
          to="/cart" 
          class="relative pb-1 transition flex items-center gap-2"
          :class="route.path === '/cart' ? 'text-[#C58961]' : 'text-[#E7D6AC]/60 hover:text-[#E7D6AC]'"
        >
          Carrinho
          <span 
            v-if="cartStore.totalItems > 0"
            class="bg-[#C58961] text-[#06171F] text-[9px] px-1.5 py-0.5 rounded-full font-black animate-pulse"
          >
            {{ cartStore.totalItems }}
          </span>
          <span v-if="route.path === '/cart'" class="absolute left-0 bottom-0 w-full h-[1px] bg-[#C58961]" />
        </RouterLink>

      </div>
    </div>
  </nav>
</template>
