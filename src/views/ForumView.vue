<template>
  <div class="container">
    <h2 class="section-title">论坛</h2>

    <div class="post-list">
      <div v-for="post in posts" :key="post.id" class="post-card">
        <div class="post-meta">
          <span>{{ post.tag }}</span>
          <span>{{ post.time }}</span>
        </div>
        <h3>{{ post.title }}</h3>
        <p>{{ post.summary }}</p>

        <div class="post-meta">
          <span>{{ post.author }}</span>
          <span>点赞 {{ post.likes }}</span>
        </div>

        <div style="margin-top: 14px;">
          <el-button type="primary" text @click="$router.push(`/forum/${post.id}`)">查看详情</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { forumPosts } from '../data/mockData'

const posts = forumPosts
</script>
