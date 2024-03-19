<script setup>
defineProps({
  item: Object,
  onClickAdd: Function,
  onClickFavorite: Function
})
</script>

<template>
  <div
    class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer transition hover:-translate-y-2 hover:shadow-xl"
  >
    <img
      :src="!item.isFavorite ? 'like-1.svg' : 'like-2.svg'"
      alt="Like 1"
      class="absolute top-8 left-8"
      @click="onClickFavorite"
    />
    <img :src="item.imageUrl" alt="Sneaker" />
    <p class="mt-2">{{ item.title }}</p>
    <div class="flex justify-between">
      <div class="flex flex-col mt-5">
        <span class="text-slate-400">Цена:</span>
        <b>{{ item.price }} руб.</b>
      </div>
      <img @click="onClickAdd" :src="!item.isAdded ? '/plus.svg' : 'checked.svg'" />
    </div>
  </div>
</template>
