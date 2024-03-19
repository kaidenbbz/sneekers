<script setup>
import { onMounted, ref } from 'vue'
import CardList from '../components/CardList.vue'

import { inject } from 'vue'
import axios from 'axios'

const { addToCart, removeFromCart } = inject('cart')
const favorites = ref([])

const addToFavorite = async (item) => {
  try {
    if (!item.isFavorite) {
      const obj = {
        parentId: item.id,
        ...item
      }

      item.isFavorite = true
      const { data } = await axios.post('https://a02d6b054691f2a2.mokky.dev/favor', obj)

      item.favoriteId = data.id
    } else {
      item.isFavorite = false
      await axios.delete(`https://a02d6b054691f2a2.mokky.dev/favor/${item.favoriteId}`)
      item.favoriteId = null
    }
  } catch (err) {
    console.log(err)
  }
}

const onCilckAddPlus = (item) => {
  if (!item.isAdded) {
    addToCart(item)
  } else {
    removeFromCart(item)
  }
}

defineProps({
  title: String,
  price: Number,
  imageUrl: String
})

onMounted(async () => {
  try {
    const { data } = await axios.get('https://a02d6b054691f2a2.mokky.dev/favor')
    for (let index = 0; index < data.length; index++) {
      favorites.value[index] = data[index]
    }
  } catch (err) {
    console.log(err)
  }
})
</script>

<template>
  <CardList :items="favorites" @add-to-favorite="addToFavorite" @add-to-cart="onCilckAddPlus" />
</template>
