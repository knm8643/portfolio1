<template>
  <div class="survey-container">
    <h2 class="survey-title">당신은 어떤 사람인가요?</h2>
    <p>{{ question.soTitle }}</p>
    <div class="survey_body">
      <button @click="sendInfo('A')">{{ question.options[0] }}</button>
      <button @click="sendInfo('B')">{{ question.options[1] }}</button>
      <button v-show="question.options[2]" @click="sendInfo('C')">{{ question.options[2] }}</button>
    </div>
  </div>
</template>

<script>
import simliTest from "@/js/simliTest.js";
export default simliTest
</script>

<style lang="scss" src="@/assets/scss/simliTest.scss">
</style>