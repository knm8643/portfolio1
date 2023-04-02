<template>
  <div class="messenger-window">
  <div class="header">
    <div class="avatar"></div>
    <div class="name">만든이(이충재)</div>
    <div class="status"></div>
  </div>
  <div class="message-container">
    <div class="message">
      <div class="message-content">
        <div class="message-text">제 사이트를 방문해주셔 감사합니다</div>
        <div class="message-time">{{ todays }}</div>
      </div>
    </div>
    <div class="message">
      <div class="message-content">
        <div class="message-text">개인정보 제공 동의를 해주시겠어요? Y/N</div>
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