import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state() {
    return {
      carts: [
        {
          id: '',
          title: '',
          price: '',
          imageUrl: ''
        }
      ]
    }
  }
})
