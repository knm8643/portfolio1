<!--<template>-->
<!--  <div class="pc-wrapper">-->
<!--    <div class="pcText-wrapper">-->
<!--      <h2>저의 사이트에<br> 오신 걸 환영합니다</h2>-->
<!--      <div class="search-input-box">-->
<!--        <input class="reset-input" v-model="selectWord" placeholder="어떤게 궁금하신가요?" type="text" autocomplete="off">-->
<!--        <button class="reset-button">클릭</button>-->
<!--      </div>-->
<!--      <div class="word-wrapper">-->
<!--        <div class="word" v-for="(words, index) in word" v-bind:key="index" @click="selectWord = words">-->
<!--          #{{ words }}-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="img-wrapper">-->
<!--        <img src="../assets/images/backImg5.jpg">-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->
<template>
  <div class="pc-wrapper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="pc-intro">
            <span>iPhone사용 설명서</span>
          </div>
          <div>
            <h1>iPhone 잠금 화면 해제하기</h1>
            <p>iPhone을 클릭하거나 터치하면 잠금화면이 해제됩니다. 이충재님만의 iPhone을 확인해보세요.
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="pc-intro">
            <span>Hello World!</span>
          </div>
          <div>
            <h1>이충재의 iPhone 접근하기</h1>
            <p>아무말대잔치아무말대잔치아무말대잔치아무말대잔치아무말대잔치아무말대잔치아무말대잔치아무말대잔치
            </p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="box-container">
      <span>도움이 되었습니까?</span>
      <button class="box-btn_1">예</button>
      <button class="box-btn_2">아니요</button>
    </div>
  </div>
</template>

<script>
import psCompo from "@/js/pcCompo.js"
export default psCompo
</script>

<style lang="scss" src="@/assets/scss/pcCompo2.scss">
</style>
