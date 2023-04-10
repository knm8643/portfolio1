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
      <div class="body-footer">
        <a>편집</a>
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