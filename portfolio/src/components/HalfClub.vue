<template>
  <div class="halfclub-box">
    <div class="main-text_1">
      <h2>My halfClub</h2>
    </div>
    <div class="main-text_2">
      <a>test1</a>
      <a>test2</a>
      <a>test3</a>
      <a>test4</a>
      <a>test5</a>
      <a>test6</a>
    </div>
    <div class="main-banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in mainBigBanner" :key="index">
            <img :src="item.img" />
          </div>
        </div>
      </div>
    </div>
    <div class="main-body">
      <div v-if="dispDataList">
        <div v-for="(item2, index2) in dispDataList" :key="index2">
          <div>
            {{ item2.cornerTitle }}
          </div>
        </div>
      </div>
      <div v-else>
        <h1>Error</h1>
      </div>
    </div>
  </div>
</template>

<script>
import halfClub from "@/js/halfClub.js";
export default halfClub;
</script>

<style lang="scss" src="@/assets/scss/halfClub.scss">
</style>