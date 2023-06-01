<template>
  <div class="wrapper">
    <HeaderItem />
    <div class="wrapper-content">
      <div class="container">
        <div class="view-sm isCenter">
          <router-view />
        </div>
      </div>
    </div>
    <FooterItem />
  </div>
</template>

<script>
import HeaderItem from '@/components/HeaderItem.vue'
import FooterItem from '@/components/FooterItem.vue'

export default {
  components: { HeaderItem, FooterItem }
}
</script>

<style></style>
