<template>
  <div class="wrapper-person">
    <div v-if="item">
      <img :src="item.img" :alt="item.description" />
      <h1 style="color: white" class="title">{{ item.title }}</h1>
      <p>{{ item.descr }}</p>

      <div class="card-stats">
        <div v-for="(stat, index) in item.info" :key="index" class="one-third">
          <div class="stat">{{ stat.title }}</div>
          <div class="stat-value">{{ stat.value }}</div>
        </div>
      </div>

      <div style="margin-top: 10px; margin-bottom: 100px">
        <router-link to="/" class="btn btnPrimary">Back to home</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import items from '@/seeders/items.js'

export default {
  data() {
    return {
      item: null
    }
  },
  created() {
    const alias = this.$route.params.ItemAlias
    const item = items.find(el => el.alias === alias)
    this.item = item
  }
}
</script>

<style lang="scss">
.wrapper-person {
  max-width: 500px;
  text-align: center;
  margin: 0 auto;
  .card-stats {
    margin: 30px 0;
    border-radius: 14px;
  }
}
</style>
