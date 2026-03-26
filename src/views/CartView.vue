<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import { RouterLink, useRouter } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const formatPrice = (v: number) => v.toFixed(2).replace('.', ',')

const handleFinish = () => {
  if (cartStore.items.length > 0) {
    router.push('/checkout')
  }
}
</script>

<template>
  <div class="w-full animate-fade-in">
    <header class="mb-14 border-l-4 border-[#C58961] pl-5">
      <h2 class="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#E7D6AC]">
        Sua <span class="text-[#C58961]">Seleção</span>
      </h2>
      <p class="text-[10px] uppercase opacity-30 tracking-[4px] mt-1 font-bold">Checkout // Urban Blend</p>
    </header>

    <div v-if="cartStore.items.length === 0" class="py-24 text-center border border-dashed border-[#E7D6AC]/10 rounded-[20px]">
      <p class="text-[#E7D6AC]/50 italic">Seu carrinho está vazio.</p>
      <RouterLink to="/products" class="inline-block mt-6 text-[#C58961] font-bold uppercase tracking-widest hover:text-[#E7D6AC] transition-colors">
        Explorar Catálogo
      </RouterLink>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 items-start">
      
      <div class="space-y-5">
        <div 
          v-for="item in cartStore.items" 
          :key="item.id" 
          class="flex flex-col md:flex-row items-center bg-white/[0.02] p-6 rounded-[15px] border border-white/[0.05] transition-all hover:bg-white/[0.04]"
        >
          <img :src="item.image" class="w-[70px] h-[70px] rounded-xl object-cover shadow-lg" />
          
          <div class="flex-1 md:ml-6 text-center md:text-left mt-4 md:mt-0">
            <h3 class="text-base font-black uppercase text-[#E7D6AC]">{{ item.name }}</h3>
            <span class="text-[10px] opacity-40 uppercase tracking-widest">{{ item.category }}</span>
          </div>

          <div class="flex items-center gap-4 my-6 md:my-0 md:mx-8">
            <button 
              @click="cartStore.decreaseQuantity(item.id)"
              class="w-7 h-7 flex items-center justify-center rounded-md border border-[#C58961]/50 text-[#C58961] hover:bg-[#C58961] hover:text-[#06171F] transition-all cursor-pointer"
            >
              -
            </button>
            <span class="font-black text-sm min-w-[20px] text-center text-[#E7D6AC]">{{ item.quantity }}</span>
            <button 
              @click="cartStore.increaseQuantity(item.id)"
              class="w-7 h-7 flex items-center justify-center rounded-md border border-[#C58961]/50 text-[#C58961] hover:bg-[#C58961] hover:text-[#06171F] transition-all cursor-pointer"
            >
              +
            </button>
          </div>

          <div class="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
            <div class="font-black text-[#E7D6AC] whitespace-nowrap">
              R$ {{ formatPrice(item.price * item.quantity) }}
            </div>
            <button 
              @click="cartStore.removeFromCart(item.id)" 
              class="text-[#ff4d4d] text-2xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer leading-none"
            >
              &times;
            </button>
          </div>
        </div>
      </div>

      <aside class="lg:sticky lg:top-[250px]">
        <div class="bg-[#C58961] text-[#06171F] p-9 rounded-[20px] shadow-2xl shadow-black/30">
          <h4 class="text-lg font-black uppercase border-b border-[#06171F]/10 pb-4 mb-6">Resumo</h4>
          
          <div class="flex justify-between items-center my-6 font-bold uppercase tracking-tight">
            <span class="text-sm">Total</span>
            <span class="text-2xl font-black">R$ {{ formatPrice(cartStore.totalPrice) }}</span>
          </div>

          <button 
            @click="handleFinish" 
            class="w-full bg-[#06171F] text-[#E7D6AC] py-4 rounded-xl font-black uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer shadow-lg"
          >
            Finalizar Compra
          </button>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
