<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <main class="p-6">
    <h1 class="mb-6 text-2xl font-bold">Carrinho</h1>

    <div v-if="cartStore.items.length === 0" class="rounded-lg border p-4">
      <p>Seu carrinho está vazio.</p>
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="item in cartStore.items"
        :key="item.id"
        class="flex items-center justify-between rounded-lg border p-4"
      >
        <div>
          <h2 class="font-semibold">{{ item.name }}</h2>
          <p>Quantidade: {{ item.quantity }}</p>
          <p>Preço unitário: R$ {{ item.price.toFixed(2) }}</p>
          <p>Subtotal: R$ {{ (item.price * item.quantity).toFixed(2) }}</p>
        </div>

        <div class="flex gap-2">
          <button
            @click="cartStore.decreaseQuantity(item.id)"
            class="rounded border px-3 py-1"
          >
            -
          </button>

          <button
            @click="cartStore.increaseQuantity(item.id)"
            class="rounded border px-3 py-1"
          >
            +
          </button>

          <button
            @click="cartStore.removeFromCart(item.id)"
            class="rounded border px-3 py-1"
          >
            Remover
          </button>
        </div>
      </div>

      <div class="mt-6 rounded-lg border p-4">
        <p class="text-lg font-bold">
          Total: R$ {{ cartStore.totalPrice.toFixed(2) }}
        </p>

        <RouterLink
          to="/checkout"
          class="mt-4 inline-block rounded bg-black px-4 py-2 text-white"
        >
          Ir para checkout
        </RouterLink>
      </div>
    </div>
  </main>
</template>
