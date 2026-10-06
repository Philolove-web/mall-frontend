<template>
  <div class="container">
    <div v-if="product" class="product-detail">
      <div class="main-image">
        <img :src="product.image" :alt="product.name" />
      </div>

      <div class="info-box">
        <p class="muted">{{ product.category }}</p>
        <h2>{{ product.name }}</h2>
        <div class="meta">库存：{{ product.stock }} 件</div>
        <div class="detail-price">¥{{ product.price }}</div>
        <div class="desc">{{ product.description }}</div>

        <div class="inline-actions">
          <el-button type="primary" size="large" @click="addToCart(product)">加入购物车</el-button>
          <el-button size="large" @click="$router.push('/cart')">立即购买</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { products } from '../data/mockData'
import { useCartStore } from '../store/cart'

const route = useRoute()
const cartStore = useCartStore()

const productId = Number(route.params.id)
const product = computed(() => products.find((item) => item.id === productId))

const addToCart = (item) => {
  cartStore.addToCart(item)
}
</script>
