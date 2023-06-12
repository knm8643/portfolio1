<template>
  <div class="mobile-nwrapper">
    <div class="mobile-nhead">
      <p>{{ currentTime }}</p>
      <div class="mobile-img">
        <img src="../assets/images/signal.png">
        <img src="../assets/images/5g.png">
        <img src="../assets/images/battery.png">
      </div>
    </div>
    <div class="mobile-nbody">
      <div class="mobile-nbody-first">
        <!--
        *하프클럽 제거*
        <div class="first-box_1">
          <img src="../assets/images/halfclub.png" @click="mainicon('halfclub')">
          <p>하프클럽</p>
        </div>
        -->
        <div class="first-box_1">
          <img src="../assets/images/opgg.png" @click="mainicon('opgg')">
          <p>OP.GG</p>
        </div>
        <div class="first-box_2">
          <img src="../assets/images/naver.png" @click="mainicon('naver')">
          <p>NAVER</p>
        </div>
        <div class="first-box_3">
          <img src="../assets/images/notes.png" @click="mainicon('notes')">
          <p>메모</p>
        </div>
      </div>
    </div>
    <div class="mobile-nfooter">
      <div class="nfooter-box">
        <img src="../assets/images/applecall.png" @click="mainicon('call')">
        <img src="../assets/images/message.png" @click="mainicon('message')">
        <img src="../assets/images/safari.png" @click="mainicon('safari')">
        <img src="../assets/images/settings.png" @click="mainicon('setting')">
      </div>
    </div>
  </div>
</template>

<script>
import moBackCompo from "@/js/moBackCompo.js";
export default moBackCompo
</script>

<style lang="scss" src="@/assets/scss/moBackCompo.scss">
</style>