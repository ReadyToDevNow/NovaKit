<template>
  <div>
    <ProductSheet />
    <MyFooter />
  </div>
</template>

<script>
import ProductSheet from '@/components/ProductSheet.vue'
import MyFooter from '@/components/layout/MyFooter.vue'

export default {
  components: {
    ProductSheet,
    MyFooter,
  },
}
</script>
