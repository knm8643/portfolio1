<template>
  <div class="survey-container">
    <h2  v-show="question.mainTitle" class="survey-title">{{ question.mainTitle }}</h2>
    <p v-show="question.soTitle">{{ question.soTitle }}</p>
    <div class="survey_body">
      <button v-show="question.options[0]" @click="sendInfo('A', question.options[0])">{{ question.options[0] }}</button>
      <button v-show="question.options[1]" @click="sendInfo('B', question.options[1])">{{ question.options[1] }}</button>
      <button v-show="question.options[2]" @click="sendInfo('C')">{{ question.options[2] }}</button>
    </div>
    <div v-if="isLoading" class="loading-spinner"></div>
  </div>
</template>

<script>
import simliTest from "@/js/simliTest.js";
export default simliTest
</script>

<style lang="scss" src="@/assets/scss/simliTest.scss">
</style>