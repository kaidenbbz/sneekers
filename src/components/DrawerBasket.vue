<script setup>
import DraweHead from './DrawerHead.vue'
import CartItemList from './CartListItem.vue'
import InfoBlock from './InfoBlock.vue'
import { inject } from 'vue'

const { closeDrawer } = inject('cart')

defineProps({
  totalPrice: Number,
  vatPrice: Number
})

const emit = defineEmits('confimOrder')
</script>

<template>
  <div
    @click="closeDrawer"
    class="fixed top-0 left-0 h-full w-full z-10 bg-black absolute opacity-70"
  ></div>
  <div class="bg-white w-96 h-full fixed left-0 top-0 z-20 p-8">
    <DraweHead />

    <div v-if="!totalPrice" class="flex h-full items-center">
      <InfoBlock
        title="Корзина пустая"
        description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        image-url="/package-icon.png"
      />
    </div>

    <CartItemList v-if="totalPrice" />

    <div v-if="totalPrice" class="flex flex-col gap-5 mt-5">
      <div class="flex gap-2">
        <span> Итого:</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ totalPrice }} ₽</b>
      </div>

      <div class="flex gap-2">
        <span> Налог 5%</span>
        <div class="flex-1 border-b border-dashed"></div>
        <b>{{ vatPrice }} ₽</b>
      </div>

      <button
        @click="() => emit('confimOrder')"
        :disabled="totalPrice ? false : true"
        class="disabled:bg-slate-500 bg-lime-400 w-full rounded-xl py-3 text-white cursor-pointer hover:bg-lime-700 shadow-xl mt-5"
      >
        Оформить заказ
      </button>
    </div>
  </div>
</template>
