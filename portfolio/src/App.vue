<template>
  <div class="intro-page">
    <div class="intro-text">
      <h1 @click="openModals('true')">
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
    <div class="modal" :class="{ 'modal--open': showModal }" v-if="showModal">
      <div class="modal_close">
          <svg @click="openModals('false')" stroke="currentColor" fill="black" stroke-width="0" viewBox="0 0 24 24" tabindex="1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
      </div>
      <router-view></router-view>
      <history-me/>
    </div>
  </div>
</template>

<script>
import appJs from '@/js/app.js'
export default appJs;
</script>

<style lang="scss" src="@/assets/scss/default.scss">
</style>