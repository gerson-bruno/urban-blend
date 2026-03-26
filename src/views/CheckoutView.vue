<script setup lang="ts">
import { useCartStore } from '../stores/cart'
import { useRouter, RouterLink } from 'vue-router'

const cartStore = useCartStore()
const router = useRouter()

const formatPrice = (v: number) => v.toFixed(2).replace('.', ',')

const handleConfirmPayment = () => {
  alert('Pedido recebido! Prepare o seu paladar.')
  cartStore.clearCart() 
  router.push('/')
}
</script>

<template>
  <div class="w-full animate-fade-in">
    <header class="mb-14 border-l-4 border-[#C58961] pl-5">
      <h2 class="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#E7D6AC]">
        Finalizar <span class="text-[#C58961]">Pedido</span>
      </h2>
      <p class="text-[10px] uppercase opacity-30 tracking-[4px] mt-1 font-bold">Secure Checkout // Urban Blend</p>
    </header>

    <div v-if="cartStore.items.length === 0" class="py-24 text-center">
      <p class="text-[#E7D6AC]/50 italic">Não há itens para processar o checkout.</p>
      <RouterLink to="/products" class="inline-block mt-6 text-[#C58961] font-bold uppercase tracking-widest hover:text-[#E7D6AC] transition-colors">
        Voltar ao Catálogo
      </RouterLink>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-start">
      
      <div class="space-y-12">
        <section>
          <h3 class="text-[11px] uppercase tracking-[3px] text-[#C58961] font-black mb-6">01. Informações de Entrega</h3>
          <div class="flex flex-col gap-5">
            <input type="text" placeholder="Nome Completo" class="checkout-input" />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="E-mail" class="checkout-input" />
              <input type="text" placeholder="Telefone" class="checkout-input" />
            </div>
            <input type="text" placeholder="Endereço de Entrega (Rua, Número)" class="checkout-input" />
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="Cidade" class="checkout-input" />
              <input type="text" placeholder="CEP" class="checkout-input" />
            </div>
          </div>
        </section>

        <section>
          <h3 class="text-[11px] uppercase tracking-[3px] text-[#C58961] font-black mb-6">02. Método de Pagamento</h3>
          <div class="flex gap-8 mb-8">
            <label class="flex items-center gap-3 text-xs uppercase font-bold cursor-pointer group">
              <input type="radio" name="payment" checked class="accent-[#C58961] w-4 h-4" />
              <span class="group-hover:text-[#C58961] transition-colors">Cartão de Crédito</span>
            </label>
            <label class="flex items-center gap-3 text-xs uppercase font-bold cursor-pointer group">
              <input type="radio" name="payment" class="accent-[#C58961] w-4 h-4" />
              <span class="group-hover:text-[#C58961] transition-colors">PIX (5% OFF)</span>
            </label>
          </div>
          
          <div class="flex flex-col gap-5">
            <input type="text" placeholder="Número do Cartão" class="checkout-input" />
            <div class="grid grid-cols-2 gap-5">
              <input type="text" placeholder="Validade (MM/AA)" class="checkout-input" />
              <input type="text" placeholder="CVV" class="checkout-input" />
            </div>
          </div>
        </section>
      </div>

      <aside class="lg:sticky lg:top-[250px]">
        <div class="bg-[#E7D6AC] text-[#06171F] p-8 md:p-10 rounded-[24px] shadow-2xl shadow-black/40">
          <h3 class="text-lg font-black uppercase border-b-2 border-[#06171F]/10 pb-4 mb-6 tracking-tight">Seu Blend</h3>
          
          <div class="space-y-4 mb-8">
            <div v-for="item in cartStore.items" :key="item.id" class="flex justify-between text-sm font-bold opacity-90">
              <span class="max-w-[200px]">{{ item.quantity }}x {{ item.name }}</span>
              <span class="font-black">R$ {{ formatPrice(item.price * item.quantity) }}</span>
            </div>
          </div>

          <div class="border-t-2 border-[#06171F]/10 pt-6 space-y-3">
            <div class="flex justify-between text-[11px] font-bold uppercase tracking-wider">
              <span>Subtotal</span>
              <span>R$ {{ formatPrice(cartStore.totalPrice) }}</span>
            </div>
            <div class="flex justify-between text-[11px] font-bold uppercase tracking-wider">
              <span>Frete</span>
              <span class="text-[#00754a] font-black">Grátis</span>
            </div>
            
            <div class="flex justify-between items-center mt-6 pt-6 border-t border-dashed border-[#06171F]/20">
              <span class="font-black uppercase text-sm tracking-widest">Total</span>
              <span class="text-3xl font-black">R$ {{ formatPrice(cartStore.totalPrice) }}</span>
            </div>
          </div>

          <button 
            @click="handleConfirmPayment" 
            class="w-full bg-[#06171F] text-[#E7D6AC] py-5 rounded-xl font-black uppercase tracking-[2px] mt-8 cursor-pointer transition-all duration-300 hover:bg-[#C58961] hover:text-[#06171F] hover:-translate-y-1 active:scale-95"
          >
            Confirmar e Pagar
          </button>
          
          <p class="text-[9px] text-center mt-5 opacity-40 font-bold uppercase tracking-wider">🔒 Pagamento 100% Seguro</p>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.checkout-input {
  @apply bg-white/[0.03] border border-[#E7D6AC]/10 p-[18px] rounded-xl text-[#E7D6AC] text-sm outline-none transition-all duration-300 focus:border-[#C58961] focus:bg-white/[0.06];
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>