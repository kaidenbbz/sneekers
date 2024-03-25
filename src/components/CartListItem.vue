<script setup>
import CartItem from './CartItem.vue'

defineProps({
  carts: Array
})
</script>

<template>
  <div class="flex flex-col gap-4 flex-1 justify-between" v-auto-animate>
    <CartItem
      v-for="(item, idx) in carts"
      :key="idx"
      :cart="item"
      @on-click-remove="() => removeFromCart(item)"
    />
  </div>
</template>
