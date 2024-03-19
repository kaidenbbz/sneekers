<script setup>
import { computed } from 'vue'
import CardHome from './CardHome.vue'

const props = defineProps({
  items: Array
})

const emit = defineEmits(['addToFavorite', 'addToCart'])

const filterredItems = computed(() => {
  return props.items.slice(0, 12)
})
</script>

<template>
  <div v-auto-animate class="grid grid-cols-4 gap-5">
    <CardHome
      v-auto-animated
      v-for="(item, idx) in filterredItems"
      :key="idx"
      :item="item"
      :onClickFavorite="() => emit('addToFavorite', item)"
      :onClickAdd="() => emit('addToCart', item)"
    />
  </div>
</template>
