<script setup lang="ts">
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { products } from "../data/products";
import { useCartStore } from "../stores/cart";

const route = useRoute();
const cartStore = useCartStore();

const product = computed(() =>
  products.find((item) => item.id === Number(route.params.id)),
);

function handleAddToCart() {
  if (product.value) {
    cartStore.addToCart(product.value);
  }
}
</script>

<template>
  <main class="p-6">
    <div v-if="product" class="mx-auto max-w-2xl rounded-lg border p-6">
      <img
        :src="product.image"
        :alt="product.name"
        class="mb-4 h-64 w-full rounded object-cover"
      />

      <h1 class="text-3xl font-bold">{{ product.name }}</h1>
      <p class="mt-2 text-gray-600">{{ product.description }}</p>
      <p class="mt-4 text-xl font-bold">R$ {{ product.price.toFixed(2) }}</p>

      <div class="mt-6 flex gap-3">
        <button
          @click="handleAddToCart"
          class="rounded bg-black px-4 py-2 text-white"
        >
          Adicionar ao carrinho
        </button>

        <RouterLink to="/cart" class="rounded border px-4 py-2">
          Ver carrinho
        </RouterLink>
      </div>
    </div>

    <div v-else>
      <p>Produto não encontrado.</p>
    </div>
  </main>
</template>
