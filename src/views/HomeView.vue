<script setup lang="ts">
import { RouterLink } from 'vue-router'
import minhaImagem from '@/assets/bg.png' 
</script>

<template>
  <div class="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden px-6">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C58961] opacity-[0.03] blur-[120px]"></div>
    </div>

    <div class="relative z-10 w-full flex justify-center mb-8 animate-fade-in-up">
      <img 
        :src="minhaImagem" 
        alt="UrbanBlend Visual" 
        class="w-auto max-h-[300px] md:max-h-[380px] object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
      />
    </div>

    <div class="relative z-10 text-center max-w-5xl animate-fade-in">
      <h1 class="text-6xl md:text-8xl font-black text-[#E7D6AC] italic uppercase tracking-tighter leading-none">
        Urban<span class="text-[#C58961]">Blend</span>
      </h1>
      
      <p class="mt-6 text-[#E7D6AC]/40 text-[10px] md:text-xs font-bold tracking-[0.5em] uppercase max-w-2xl mx-auto leading-relaxed">
        Cafés Especiais // Cervejas Artesanais // Tabacos Exóticos
      </p>
      
      <div class="mt-12 flex justify-center w-full">
        <RouterLink 
          to="/products" 
          class="group relative inline-flex items-center justify-center py-5 px-10
                 text-[14px] font-black uppercase tracking-[0.3em] no-underline
                 text-[#06171F] bg-[#C58961]
                 rounded-sm overflow-hidden
                 transition-all duration-500
                 hover:scale-105 active:scale-95 hover:bg-[#E7D6AC] shadow-2xl shadow-black/50"
        >
          <span class="relative z-10">Explorar Catálogo</span>
          <span class="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.animate-fade-in {
  animation: fadeIn 1.2s ease-out forwards;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
