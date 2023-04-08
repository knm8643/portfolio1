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
            <p style="font-weight: bold">다음</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="pc-intro">
            <span>iPhone사용 문의하기</span>
          </div>
          <div class="pc_mainIntro">
            <h1>이충재의 iPhone 접근하기</h1>
            <p><a href="https://iodized-barberry-382.notion.site/7f151766ec8842da96553fbfa838fba8">노션 접속하기</a></p>
            <p><a href="https://github.com/knm8643">깃 접속하기</a></p>
            <p @click="helpBtn('info')">지구최강의 사나이 제가 궁금하신가요?</p>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="box-container">
      <span>도움이 되었습니까?</span>
      <button class="box-btn_1" @click="helpBtn('Y')">예</button>
      <button class="box-btn_2" @click="helpBtn('N')">아니요</button>
    </div>
  </div>
</template>

<script>
import psCompo from "@/js/pcCompo.js"
export default psCompo
</script>

<style lang="scss" src="@/assets/scss/pcCompo.scss">
</style>
