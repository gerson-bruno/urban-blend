<template>
  <footer class="relative bg-transparent border-t border-[#E7D6AC]/5 py-10 px-6 overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[300px] h-[120px] bg-[#C58961] opacity-[0.03] blur-[80px]"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-6">
      
      <div class="text-center">
        <h2 class="text-2xl font-black italic uppercase tracking-tight text-[#E7D6AC]">
          Urban<span class="text-[#C58961]">Blend</span>
        </h2>

        <p class="text-[9px] uppercase tracking-[0.4em] text-[#E7D6AC]/30 font-bold mt-2">
          Quality Goods Est. 2026
        </p>
      </div>

      <div class="h-[1px] w-10 bg-gradient-to-r from-transparent via-[#C58961]/40 to-transparent"></div>

      <div class="text-center space-y-3">
        <p class="text-[9px] text-[#E7D6AC]/40 uppercase tracking-[0.25em] leading-relaxed max-w-xs mx-auto">
          Venda proibida para menores de 18 anos.
        </p>
        
        <p class="text-[8px] text-[#E7D6AC]/20 uppercase tracking-[0.3em] font-bold">
          &copy; {{ currentYear }} Urban Blend
        </p>
      </div>

    </div>
  </footer>
</template>