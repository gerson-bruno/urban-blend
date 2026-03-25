<script setup lang="ts">
import { RouterLink } from "vue-router";
import { products } from "../data/products";
</script>

<template>
  <main class="p-6">
    <h1 class="text-2xl font-bold">Produtos</h1>

    <div class="mt-6 grid gap-4 md:grid-cols-3">
      <div
        v-for="product in products"
        :key="product.id"
        class="rounded-lg border p-4"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="mb-3 h-40 w-full rounded object-cover"
        />

        <h2 class="font-semibold">{{ product.name }}</h2>
        <p class="mt-2 text-sm text-gray-600">{{ product.description }}</p>
        <p class="mt-3 font-bold">R$ {{ product.price.toFixed(2) }}</p>

        <RouterLink
          :to="`/product/${product.id}`"
          class="mt-4 inline-block rounded bg-black px-4 py-2 text-white"
        >
          Ver produto
        </RouterLink>
      </div>
    </div>
  </main>
</template>
