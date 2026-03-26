<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useCartStore } from './stores/cart';
import MyFooter from './components/Footer.vue';

const route = useRoute();
const cartStore = useCartStore();

const isHome = computed(() => route.path === '/');

onMounted(() => {
  cartStore.loadCart();
});
</script>

<template>
  <div class="min-h-screen bg-[#06171F] bg-[radial-gradient(circle_at_top,_#0a1f29_0%,_#051117_100%)] text-[#E7D6AC] font-sans selection:bg-[#C58961] selection:text-[#06171F]">
    
    <header 
      v-if="!isHome" 
      class="fixed top-0 left-0 w-full z-[9999] bg-[#06171f]/80 backdrop-blur-md border-b border-[#E7D6AC]/5"
    >
      <div class="max-w-[1200px] mx-auto px-5 py-6 md:py-8 flex flex-col items-center">
        <div class="text-center">
          <h1 class="text-[24px] md:text-[28px] font-black uppercase italic tracking-tighter m-0 leading-none">
            Urban<span class="text-[#C58961]">Blend</span>
          </h1>
          <div class="flex items-center justify-center gap-3 mt-2">
            <span class="h-px w-4 md:w-5 bg-[#C58961]/20"></span>
            <span class="text-[7px] md:text-[8px] uppercase tracking-[4px] md:tracking-[5px] text-[#E7D6AC]/30 font-bold whitespace-nowrap">
              Coffee // Beer // Tobacco
            </span>
            <span class="h-px w-4 md:w-5 bg-[#C58961]/20"></span>
          </div>
        </div>

        <nav class="mt-6 flex gap-6 md:gap-10">
          <router-link to="/" class="nav-item">Início</router-link>
          <router-link to="/products" class="nav-item">Catálogo</router-link>
          <router-link to="/cart" class="nav-item">
            Carrinho
            <span v-if="cartStore.totalItems > 0" class="ml-1 text-[#C58961]">
              ({{ cartStore.totalItems }})
            </span>
          </router-link>
        </nav>
      </div>
    </header>

    <main 
      :class="[
        'transition-all duration-500',
        isHome 
          ? 'w-full min-h-screen flex items-center justify-center' 
          : 'max-w-[1200px] mx-auto px-6 md:px-10 pb-20 pt-[180px] md:pt-[220px]'
      ]"
    >
      <router-view />
    </main>

    <MyFooter v-if="!isHome" />
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.nav-item {
  @apply text-[9px] md:text-[10px] font-black uppercase tracking-[3px] text-[#E7D6AC]/40 no-underline transition-colors duration-300 relative pb-1 hover:text-[#E7D6AC];
}

.nav-item::after {
  content: '';
  @apply absolute bottom-0 left-1/2 w-0 h-px bg-[#C58961] transition-all duration-300 -translate-x-1/2;
}

.router-link-active {
  @apply text-[#E7D6AC];
}

.router-link-active::after {
  @apply w-full;
}
</style>