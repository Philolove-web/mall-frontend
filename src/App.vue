<template>
  <div class="app-shell">
    <el-container>
      <el-header class="topbar">
        <div class="brand-wrap">
          <router-link to="/" class="brand">小商城</router-link>
        </div>

        <div class="nav">
          <router-link to="/">首页</router-link>
          <router-link to="/forum">论坛</router-link>
          <router-link to="/cart">购物车</router-link>
        </div>

        <div class="user-area">
          <el-badge :value="cartCount" :hidden="cartCount === 0" class="cart-badge">
            <router-link to="/cart" class="cart-link">购物车</router-link>
          </el-badge>
        </div>
      </el-header>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from './store/cart'

const cartStore = useCartStore()
const cartCount = computed(() => cartStore.totalCount)
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  background: #f6f8fa;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #ececec;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  position: sticky;
  top: 0;
  z-index: 10;
}

.brand-wrap {
  min-width: 130px;
}

.brand {
  font-size: 26px;
  font-weight: 700;
  color: #1d4ed8;
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 24px;
}

.nav a,
.cart-link {
  text-decoration: none;
  color: #333;
  font-weight: 600;
}

.nav a.router-link-active,
.nav a:hover,
.cart-link:hover {
  color: #1d4ed8;
}

.user-area {
  min-width: 120px;
  display: flex;
  justify-content: flex-end;
}

.cart-badge {
  margin-top: 6px;
}
</style>
