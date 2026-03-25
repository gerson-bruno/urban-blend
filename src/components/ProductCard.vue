<script setup lang="ts">
import type { Product } from '../types/product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="rounded-lg border p-4">
    <img
      :src="product.image"
      :alt="product.name"
      class="mb-3 h-40 w-full rounded object-cover"
    />
    <h2 class="font-semibold">{{ product.name }}</h2>
    <p class="mt-2 text-sm text-gray-600">{{ product.description }}</p>
    <p class="mt-3 font-bold">R$ {{ product.price.toFixed(2) }}</p>
  </div>
</template>