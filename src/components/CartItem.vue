<script setup>
defineProps({
  cart: Object
})

const emit = defineEmits(['onClickRemove'])
</script>

<template>
  <div class="flex border border-slate-200 p-4 rounded-xl gap-4">
    <img class="w-16 h-16" :src="cart.imageUrl" alt="title" />

    <div class="flex flex-col flex-1">
      <p>{{ cart.title }}</p>

      <div class="flex justify-between mt-2">
        <b class="flex-1">{{ cart.price }} руб.</b>
        <img
          @click="emit('onClickRemove')"
          class="opacity-40 hover:opacity-100 cursor-pointer transition"
          src="/close.svg"
        />
      </div>
    </div>
  </div>
</template>
