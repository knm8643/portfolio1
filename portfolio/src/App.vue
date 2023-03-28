<template>
  <div class="intro-page">
    <div class="intro-text">
      <h1>
  <span class="char" v-for="(char, index) in title" :key="index" :ref="`titleChars[${index}]`">
    {{ char }}
  </span>
        <span class="cursor" ref="titleCursor"></span>
      </h1>
         <br>
      <p>
  <span class="char" v-for="(char, index) in subtitle" :key="index" :ref="`subtitleChars[${index}]`">
    {{ char }}
  </span>
        <span class="cursor" ref="subtitleCursor"></span>
      </p>
    </div>
    <div class="intro-star"></div>
  </div>
</template>

<script>
import appJs from '@/js/app.js'
export default appJs;
</script>

<style lang="scss" src="@/assets/scss/default.scss">
</style>