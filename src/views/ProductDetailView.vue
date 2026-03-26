<script setup lang="ts">
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { products } from "../data/products"; 
import { useCartStore } from "../stores/cart";
import type { Product } from "../types/product";

const route = useRoute();
const cartStore = useCartStore();

const product = computed(() =>
  products.find((item) => item.id === Number(route.params.id)) as Product | undefined
);

function handleAddToCart() {
  if (product.value) {
    cartStore.addToCart(product.value);
    alert(`${product.value.name} adicionado ao blend!`);
  }
}

const formatPrice = (v: number) => v.toFixed(2).replace('.', ',');
</script>

<template>
  <div v-if="product" class="w-full max-w-[1200px] mx-auto px-6 py-10 animate-fade-in">
    
    <RouterLink to="/products" class="inline-block mb-12 text-[10px] uppercase tracking-[3px] text-[#C58961] font-bold no-underline hover:text-[#E7D6AC] transition-colors">
      ← Voltar ao Catálogo
    </RouterLink>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
      
      <div class="lg:col-span-6 bg-white/[0.02] border border-white/5 p-4 rounded-[32px]">
        <div class="overflow-hidden rounded-[24px]">
          <img 
            :src="product.image" 
            :alt="product.name" 
            class="w-full h-auto object-cover transition-transform duration-700 hover:scale-110" 
          />
        </div>
      </div>

      <div class="lg:col-span-6">
        <span class="text-[10px] uppercase tracking-[6px] text-[#C58961] font-black">
          {{ product.category }}
        </span>
        
        <h1 class="text-5xl md:text-7xl font-black uppercase italic leading-[0.85] mt-6 mb-8 text-[#E7D6AC]">
          {{ product.name.split(' ')[0] }}
          <span class="block text-[#C58961] mt-2">{{ product.name.split(' ').slice(1).join(' ') }}</span>
        </h1>

        <div class="w-16 h-1.5 bg-[#C58961] mb-10"></div>

        <p class="text-lg md:text-xl leading-relaxed text-[#E7D6AC]/60 mb-10 font-light">
          Blend exclusivo selecionado para a experiência Urban Blend. 
          Notas intensas e acabamento premium em {{ product.category.toLowerCase() }}.
        </p>

        <div class="flex items-baseline gap-3 mb-12">
          <span class="text-2xl opacity-30 font-light">R$</span>
          <span class="text-6xl md:text-7xl font-black text-[#E7D6AC]">
            {{ formatPrice(product.price) }}
          </span>
        </div>

        <button 
          @click="handleAddToCart" 
          class="w-full bg-[#C58961] text-[#06171F] py-6 rounded-2xl font-black uppercase tracking-widest transition-all duration-300 hover:bg-[#E7D6AC] hover:-translate-y-2 active:scale-95 shadow-2xl shadow-black/40 cursor-pointer"
        >
          Adicionar ao Carrinho
        </button>

        <div class="flex gap-8 mt-12 opacity-20 text-[9px] uppercase font-bold tracking-[2px]">
          <span>✓ Qualidade Premium</span>
          <span>✓ Origem Controlada</span>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="min-h-[60vh] flex flex-col items-center justify-center text-center">
    <p class="text-2xl opacity-40 italic">Produto esgotado no estoque urbano.</p>
    <RouterLink to="/products" class="mt-6 text-[#C58961] uppercase tracking-widest font-bold">Voltar</RouterLink>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
