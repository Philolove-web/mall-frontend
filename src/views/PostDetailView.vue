<template>
  <div class="container">
    <div v-if="post" class="post-card" style="padding: 24px;">
      <div class="post-meta">
        <span>{{ post.tag }}</span>
        <span>{{ post.time }}</span>
      </div>

      <h2 style="margin: 16px 0;">{{ post.title }}</h2>
      <div class="post-meta">
        <span>作者：{{ post.author }}</span>
        <span>点赞：{{ post.likes }}</span>
      </div>

      <p style="margin-top: 18px; line-height: 2; color: #374151;">{{ post.summary }}</p>

      <div style="margin-top: 24px;">
        <h3>评论区</h3>
        <div v-for="(comment, idx) in post.comments" :key="idx" style="margin-top: 12px; padding: 12px 14px; border: 1px solid #e5e7eb; border-radius: 12px; background: #f9fafb;">
          <div style="font-weight: 700; margin-bottom: 6px;">{{ comment.user }}</div>
          <div>{{ comment.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { forumPosts } from '../data/mockData'

const route = useRoute()
const postId = Number(route.params.id)
const post = computed(() => forumPosts.find((item) => item.id === postId))
</script>
