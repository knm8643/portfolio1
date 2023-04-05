<template>
  <div class="pc-wrapper">
    <div class="pcText-wrapper">
      <h2>저의 사이트에<br> 오신 걸 환영합니다</h2>
      <div class="search-input-box">
        <input class="reset-input" v-model="selectWord" placeholder="어떤게 궁금하신가요?" type="text" autocomplete="off">
        <button class="reset-word" style="">검색</button>
      </div>
      <div class="word-wrapper">
        <div class="word" v-for="(words, index) in word" v-bind:key="index" @click="selectWord = words">#{{ words }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import psCompo from "@/js/pcCompo.js"
export default psCompo
</script>

<style lang="scss" src="@/assets/scss/pcCompo.scss">
</style>
