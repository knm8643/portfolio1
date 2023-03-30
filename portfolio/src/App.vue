<template>
  <div class="intro-page">
    <div class="intro-text" @click="showModals()">
      <h1>
        <span class="char">{{ title }}</span>
        <span class="cursor" ref="titleCursor"></span>
      </h1>
         <br>
      <p>
        <span class="subtitle">{{ subtitle }}</span>
        <span class="cursor" ref="subtitleCursor"></span>
      </p>
    </div>
    <div class="intro-star"></div>
    <div class="modal" v-if="showModal"><router-view></router-view></div>
  </div>
</template>

<script>
import appJs from '@/js/app.js'
export default appJs;
</script>

<style lang="scss" src="@/assets/scss/default.scss">
</style>