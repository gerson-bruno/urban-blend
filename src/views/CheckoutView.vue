<script setup lang="ts">
import { computed, ref } from "vue";
import { useCartStore } from "../stores/cart";

const cartStore = useCartStore();

const name = ref("");
const email = ref("");
const address = ref("");
const orderFinished = ref(false);

const canFinishOrder = computed(() => {
  return (
    name.value.trim() !== "" &&
    email.value.trim() !== "" &&
    address.value.trim() !== "" &&
    cartStore.items.length > 0
  );
});

function finishOrder() {
  if (!canFinishOrder.value) return;

  orderFinished.value = true;
  cartStore.clearCart();
}
</script>

<template>
  <main class="mx-auto max-w-xl p-6">
    <h1 class="mb-6 text-2xl font-bold">Checkout</h1>

    <div v-if="orderFinished" class="rounded-lg border p-6">
      <h2 class="mb-2 text-xl font-semibold">Pedido finalizado com sucesso!</h2>
      <p>Obrigado por comprar no Urban Blend.</p>
    </div>

    <form v-else class="space-y-4" @submit.prevent="finishOrder">
      <div>
        <label class="mb-1 block font-medium">Nome</label>
        <input
          v-model="name"
          type="text"
          class="w-full rounded border px-3 py-2"
        />
      </div>

      <div>
        <label class="mb-1 block font-medium">E-mail</label>
        <input
          v-model="email"
          type="email"
          class="w-full rounded border px-3 py-2"
        />
      </div>

      <div>
        <label class="mb-1 block font-medium">Endereço</label>
        <input
          v-model="address"
          type="text"
          class="w-full rounded border px-3 py-2"
        />
      </div>

      <div class="rounded border p-4">
        <p class="font-semibold">Resumo do pedido</p>
        <p>Itens: {{ cartStore.totalItems }}</p>
        <p>Total: R$ {{ cartStore.totalPrice.toFixed(2) }}</p>
      </div>

      <button
        type="submit"
        class="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
        :disabled="!canFinishOrder"
      >
        Finalizar pedido
      </button>
    </form>
  </main>
</template>
