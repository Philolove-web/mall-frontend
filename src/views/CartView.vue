<template>
  <div class="container">
    <h2 class="section-title">购物车</h2>

    <div v-if="cart.items.length === 0" class="summary-box">
      <p>你的购物车还是空的，去首页看看商品吧～</p>
      <el-button type="primary" @click="$router.push('/')">继续逛逛</el-button>
    </div>

    <div v-else class="cart-wrap">
      <div class="cart-items">
        <div v-for="item in cart.items" :key="item.id" class="cart-item">
          <div class="thumb">
            <img :src="item.image" :alt="item.name" />
          </div>

          <div class="detail">
            <h3>{{ item.name }}</h3>
            <div class="muted">单价：¥{{ item.price }}</div>
            <div style="margin-top: 10px;">
              <el-input-number v-model="item.quantity" :min="1" @change="(value) => cart.updateQuantity(item.id, value)" />
            </div>
          </div>

          <div style="display: flex; flex-direction: column; align-items: flex-end; justify-content: space-between;">
            <div class="price" style="font-size: 24px;">¥{{ item.price * item.quantity }}</div>
            <el-button type="danger" text @click="cart.removeItem(item.id)">删除</el-button>
          </div>
        </div>
      </div>

      <aside class="summary-box">
        <h3>订单结算</h3>
        <div class="row">
          <span>商品件数</span>
          <span>{{ cart.totalCount }} 件</span>
        </div>
        <div class="row">
          <span>商品合计</span>
          <span>¥{{ cart.totalPrice }}</span>
        </div>
        <div class="row">
          <span>运费</span>
          <span>¥0</span>
        </div>
        <div class="total">
          <span>总计</span>
          <span>¥{{ cart.totalPrice }}</span>
        </div>

        <div style="margin-top: 20px;">
          <el-button type="primary" size="large" style="width: 100%;">提交订单</el-button>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../store/cart'

const cart = useCartStore()
</script>
