<template>
  <div class="container">
    <section class="banner">
      <h1>发现好物，开启快乐购物</h1>
      <p>
        这是一个适合练手的商城项目，包含产品展示、购物车和论坛功能，帮助你快速掌握前端与后端协作思路。
      </p>
      <div class="inline-actions">
        <el-button type="primary" size="large" @click="$router.push('/forum')">去论坛看看</el-button>
        <el-button size="large" @click="$router.push('/cart')">查看购物车</el-button>
      </div>
    </section>

    <section>
      <h2 class="section-title">热销商品</h2>
      <div class="card-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <div class="image">
            <img :src="product.image" :alt="product.name" />
          </div>

          <div class="content">
            <p class="muted">{{ product.category }}</p>
            <h3 class="name">{{ product.name }}</h3>
            <p class="desc">{{ product.description }}</p>

            <div class="price-row">
              <div class="price">¥{{ product.price }}</div>
              <el-button type="primary" @click="addToCart(product)">加入购物车</el-button>
            </div>

            <div style="margin-top: 12px;">
              <el-button text @click="$router.push(`/product/${product.id}`)">查看详情</el-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { products } from '../data/mockData'
import { useCartStore } from '../store/cart'

const cartStore = useCartStore()

const addToCart = (product) => {
  cartStore.addToCart(product)
}
</script>
