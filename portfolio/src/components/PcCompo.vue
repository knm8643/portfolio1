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
            <p class="next-slide">다음</p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="pc-intro">
            <span>iPhone사용 문의하기</span>
          </div>
          <div class="pc_mainIntro_1">
            <h1>이충재의 iPhone 접근하기</h1>
            <p><a href="https://iodized-barberry-382.notion.site/7f151766ec8842da96553fbfa838fba8">노션 접속하기</a></p>
            <p><a href="https://github.com/knm8643">깃 접속하기</a></p>
            <p @click="helpBtn('info')">만든이가 궁금하신가요?</p>
            <p>피씨와 모바일을 통해서 이충재님의 iPhone을 이용해보세요. 다양한 버전의 iPhone이 당신을 기다립니다.</p>
          </div>
        </div>
        <!--
        <div class="swiper-slide">
          <div class="pc-intro">
            <span>Hello World!</span>
          </div>
          <div class="pc_mainIntro_2">
            <div class="mainIntro-content">
              <img src="../assets/images/me.jpg" class="animate__animated animate__fadeIn">
              <span class="animate__animated animate__fadeInRight">
                안녕하세요<br>
                &nbsp;<br>
                프론트엔드 개발자<br>이충재입니다<br>
                &nbsp;<br>
                Java를 비롯한 기술 프론트엔드 스택을 능숙하게 다루며<br>
                &nbsp;<br>
                사용자UI와 편의 개발의 조화를 추구하는 개발자입니다.<br>
                &nbsp;<br>
                언제든<br> 연락주세요
              </span>
            </div>
          </div>
        </div>
        -->
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <div class="box-container">
      <span>마음에 드시나요?</span>
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
