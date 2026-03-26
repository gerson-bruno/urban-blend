<script setup>
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="relative bg-transparent border-t border-[#E7D6AC]/5 py-20 px-6 overflow-hidden">
    
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#C58961] opacity-[0.03] blur-[100px]"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto flex flex-col items-center gap-10">
      
      <div class="text-center group">
        <h2 class="text-3xl font-black italic uppercase tracking-tighter text-[#E7D6AC] transition-all duration-500 group-hover:tracking-widest">
          Urban<span class="text-[#C58961]">Blend</span>
        </h2>
        <div class="flex items-center justify-center gap-4 mt-3">
          <span class="h-px w-6 bg-[#C58961]/20"></span>
          <p class="text-[9px] uppercase tracking-[0.5em] text-[#E7D6AC]/30 font-bold">
            Quality Goods Est. 2026
          </p>
          <span class="h-px w-6 bg-[#C58961]/20"></span>
        </div>
      </div>

      <div class="h-[1px] w-16 bg-gradient-to-r from-transparent via-[#C58961]/40 to-transparent"></div>

      <div class="text-center space-y-6">
        <p class="text-[10px] md:text-[11px] text-[#E7D6AC]/40 uppercase tracking-[0.3em] font-medium leading-relaxed max-w-xs mx-auto">
          Venda proibida para menores de 18 anos. <br>
          <span class="text-[#C58961]/60">Aprecie com responsabilidade.</span>
        </p>
        
        <div class="pt-4">
          <p class="text-[9px] text-[#E7D6AC]/20 uppercase tracking-[0.4em] font-bold">
            &copy; {{ currentYear }} Urban Blend — Crafted for the Urban Soul.
          </p>
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>
@reference "tailwindcss";
</style>
