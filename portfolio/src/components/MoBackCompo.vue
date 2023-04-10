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
        <div class="first-box_1">
          <img src="../assets/images/halfclub.png">
          <p>하프클럽</p>
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