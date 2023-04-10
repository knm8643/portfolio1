<template>
  <div class="safari-box">
    <div class="safari-header">
      <div class="header-font">
        <h4>즐겨찾기</h4>
        <p>모두보기  ></p>
      </div>
    </div>
    <div class="safari-body">
      <div class="body-icon">
        <div class="icon_list_1">
          <img src="../assets/images/none.jpg" @click="sendUrl('simle')">
          <p>심리테스트</p>
        </div>
        <div class="icon_list_2">
          <img src="../assets/images/apples.png" @click="sendUrl('notYet')">
          <p>개발중</p>
        </div>
      </div>
      <h4>들어보기</h4>
      <div class="body-footer">
        <a>안녕하세요 제 사이트에 오신걸 환영합니다.<br>아직은 미구현 기능이 많습니다</a>
      </div>
    </div>
  </div>
</template>

<script>
import safari from "@/js/safari.js";
export default safari
</script>

<style lang="scss" src="@/assets/scss/safari.scss">
</style>