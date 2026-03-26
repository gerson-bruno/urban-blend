<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCartStore } from '../stores/cart'
import type { Product } from '../types/product'

const props = defineProps<{
  product: Product // Usamos a interface aqui
}>()

const cartStore = useCartStore()

function addToCart() {
  cartStore.addToCart(props.product)
  console.log('Adicionado:', props.product.name)
}
</script>

<template>
  <div class="flex flex-col group">
    <div class="w-full aspect-square overflow-hidden rounded-[8px] mb-4 bg-transparent border border-[#E7D6AC]/5">
      <img 
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />
    </div>


    <div class="px-1">
      <h3 class="text-sm font-semibold text-[#E7D6AC]">
        {{ product.name }}
      </h3>

      <p class="text-[10px] uppercase mt-1 tracking-widest text-[#E7D6AC]/50">
        {{ product.category }}
      </p>

      <p class="text-[#C58961] font-bold mt-2 text-base">
        R$ {{ product.price.toFixed(2).replace('.', ',') }}
      </p>

      <div class="mt-6 flex gap-[12px]">
        <RouterLink 
          :to="{ name: 'product-detail', params: { id: product.id } }"
          class="flex-1 bg-transparent text-[#E7D6AC] text-[10px] font-black uppercase tracking-tighter
                 py-[15px] rounded-[8px] border border-[#E7D6AC]/20 transition-all duration-300 
                 inline-flex items-center justify-center no-underline
                 hover:bg-[#E7D6AC]/10 hover:border-[#E7D6AC]"
        >
          Detalhes
        </RouterLink>

        <button 
          @click="addToCart"
          class="flex-1 border-none bg-[#C58961] text-[#0E171E] text-[10px] font-black uppercase tracking-tighter
                 py-[15px] rounded-[8px] transition-all duration-300 
                 hover:bg-white hover:scale-[1.02] active:scale-[0.95]"
        >
          Add +
        </button>
      </div>
    </div>
  </div>
</template>