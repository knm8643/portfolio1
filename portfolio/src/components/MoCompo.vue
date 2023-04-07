<template>
  <div class="mobile-wrapper">
    <div class="mobile-head">
    </div>
    <div class="mobile-body">
      <div class="body-Time">
        <p>{{ currentDate }}</p>
        <h1>{{ currentTime }}</h1>
      </div>
    </div>
    <div class="mobile-footer">
      <div class="footer_line">
        <p>여기를 터치해주세요</p>
      </div>
    </div>
  </div>
</template>

<script>
import moCompo from "@/js/moCompo.js"
export default moCompo
</script>

<style lang="scss" src="@/assets/scss/moCompo.scss">
</style>