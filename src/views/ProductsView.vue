<script setup lang="ts">
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products' 
import type { Product } from '../types/product' 
</script>

<template>
  <div class="relative min-h-screen bg-[#06171F] text-[#E7D6AC] pt-[120px] pb-20 px-5 md:px-10 max-w-[1300px] mx-auto overflow-x-hidden">
    
    <div class="absolute inset-0 pointer-events-none z-0">
      <div class="absolute w-[400px] h-[400px] bg-[#C58961] blur-[120px] opacity-[0.12] top-[10%] -left-[100px]"></div>
      <div class="absolute w-[400px] h-[400px] bg-[#E7D6AC] blur-[120px] opacity-[0.12] bottom-[10%] -right-[100px]"></div>
    </div>

    <header class="relative z-10 mb-[70px] pb-[30px] border-b border-[#E7D6AC]/10">
      <h1 class="text-4xl md:text-[3.5rem] font-black uppercase italic leading-none">
        Urban <span class="text-[#C58961]">Catalog</span>
      </h1>
      <p class="text-[11px] uppercase tracking-[6px] text-[#E7D6AC]/50 mt-3 font-bold">
        Coffee // Beer // Tobacco
      </p>
    </header>

    <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 min-[1100px]:grid-cols-3 xl:grid-cols-4 gap-10">
      <div
        v-for="product in (products as Product[])" 
        :key="product.id"
        class="card-wrapper"
      >
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.card-wrapper {
  /* Efeito de Vidro e Transição */
  @apply backdrop-blur-[120px] bg-white/[0.02] rounded-[14px] p-[10px] 
         transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)];
}

.card-wrapper:hover {
  /* Efeito de Elevação e Brilho no Hover */
  @apply -translate-y-2 bg-white/[0.06] shadow-[0_15px_30px_rgba(0,0,0,0.5)];
}

/* Força o ProductCard a preencher o espaço do Grid */
:deep(.product-card) {
  width: 100% !important;
  height: 100%;
}
</style>