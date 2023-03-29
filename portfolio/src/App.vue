<template>
  <div class="intro-page">
    <div class="intro-text">
      <h1>
        <span class="char">{{ title }}</span>
        <span class="cursor" ref="titleCursor"></span>
      </h1>
         <br>
      <p>
        <span class="subtitle">{{ subtitle }}</span>
        <router-link to="/"><button>들어가기</button></router-link>
        <span class="cursor" ref="subtitleCursor"></span>
      </p>
    </div>
    <div class="intro-star"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import appJs from '@/js/app.js'
export default appJs;
</script>

<style lang="scss" src="@/assets/scss/default.scss">
</style>