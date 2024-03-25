<script setup>
import { ref, provide, computed } from 'vue'
import MainHeader from './components/MainHeader.vue'
import DrawerBasket from './components/DrawerBasket.vue'
import axios from 'axios'
import { useCartStore } from '../stores/carts'

const cartsStore = useCartStore()

const carts = cartsStore.carts

/* Корзина*/
const cart = ref([])

const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + item.price, 0))

const vatPrice = computed(() => Math.round((totalPrice.value * 5) / 100))

const drawerOpen = ref(false)

const openDrawer = () => {
  drawerOpen.value = true
}

const closeDrawer = () => {
  drawerOpen.value = false
}

const addToCart = (item) => {
  cart.value.push(item)
  item.isAdded = true
}

const removeFromCart = (item) => {
  cart.value.splice(cart.value.indexOf(item), 1)
  item.isAdded = false
}

const confimOrder = async () => {
  try {
    const { data } = axios.post('https://a02d6b054691f2a2.mokky.dev/order', {
      items: cart,
      totalPrice: totalPrice.value
    })

    cart.value = []
    return data
  } catch (err) {
    console.log(err)
  }
}

/* КОРЗМНА */

provide('cart', {
  cart,
  closeDrawer,
  openDrawer,
  addToCart,
  removeFromCart
})
</script>

<template>
  <Transition name="fade">
    <div class="wrapper" v-if="drawerOpen">
      <DrawerBasket :total-price="totalPrice" :vat-price="vatPrice" @confimOrder="confimOrder" />
    </div>
  </Transition>

  <div class="bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <MainHeader :total-price="totalPrice" @open-drawer="openDrawer" />

    <div class="p-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
