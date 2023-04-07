<!--<template>-->
<!--  <div class="main-wrapper">-->
<!--    <div class="main-item-right">-->
<!--      &lt;!&ndash; <MoComponents></MoComponents>&ndash;&gt;-->
<!--    </div>-->
<!--    <div class="main-item-left">-->
<!--      &lt;!&ndash; <PcComponents></PcComponents>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div class="main-wrapper">
    <div class="main-item-left">
      <PcComponents></PcComponents>
    </div>
    <div class="main-item-right">
      <div class="phone-wrapper">
        <div class="phone-body">
          <div class="notch"></div>
          <div class="screen">
            <!-- 모바일 내용을 작성하세요 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainCompo from "@/js/mainCompo.js";
export default mainCompo
</script>

<style lang="scss" src="@/assets/scss/mainCompo2.scss">
</style>