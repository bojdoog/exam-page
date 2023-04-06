<template>
  <div class="container-right">
    <ExamInformationVue/>
    <ExamQuestionsVue/>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import ExamInformationVue from "./ExamInformation.vue";
import ExamQuestionsVue from "./ExamQuestions.vue";

export default {
  components: {ExamInformationVue,ExamQuestionsVue},
  setup() {
    
  },
};
</script>

<style scoped lang="scss">
.container-right {
  width: 422px;
  height: 1080px;
  // background-color: blue;
  border-style: solid;
  border-color: #f7f7f7;
  border-width: 20px 13px 37px 18px;
  box-sizing: border-box;
  
}
</style>