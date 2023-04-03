<template>
  <div class="messenger-window">
  <div class="header">
    <div class="avatar"></div>
    <div class="name">만든이(이충재)</div>
    <div class="status"></div>
  </div>
  <div class="message-container">
    <div class="message" v-for="(cjmessage, index) in CJMessage" :key="index">
      <div class="message-content">
        <div class="message-text">{{ cjmessage.msg }}</div>
        <div class="message-time">{{ todays }}</div>
      </div>
    </div>
    <div class="message user" v-for="(message, index) in inputMessage" :key="index">
      <div class="message-content">
        <div class="message-text">{{ message.text }} </div>
        <div class="message-time">{{ message.time }}</div>
      </div>
    </div>
  </div>
  <div class="input-container">
    <input v-model="insertMessage" class="input-message" placeholder="메시지를 입력하세요" @keyup.enter="sendUserMessage()">
    <button class="send-message-button" @click="sendUserMessage()">보내기</button>
  </div>
  </div>
</template>

<script>
import showYour from "@/js/showYour.js";
export default showYour
</script>

<style scoped lang="scss" src="@/assets/scss/showYour.scss">
</style>