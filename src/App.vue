<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useCartStore } from './stores/cart';
import MyHeader from './components/Header.vue';
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
    
    <MyHeader v-if="!isHome" />

    <main 
  :class="[
    'transition-all duration-500',
    isHome 
      ? 'w-full min-h-screen flex items-center justify-center' 
      : 'max-w-[1200px] mx-auto px-6 md:px-10 pb-20 pt-16'
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
