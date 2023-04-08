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
            <MoComponents></MoComponents>
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

<style lang="scss" src="@/assets/scss/mainCompo.scss">
</style>