<template>
  <div class="logo-container" @click="goHome">
    <div class="logo">
      <img src="@/assets/image/logo.jpeg" alt="logo">
    </div>
    <div class="logo-title hidden-sm-and-down">
      <span class="logo-text">泉州经贸职业技术学院</span>
    </div>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'

const route = useRouter();

function goHome() {
  route.push('/')
}

</script>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 80px;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: 42px;
  border-radius: 50%;
}

.logo img {
  height: 45px;
  width: 45px;
  border-radius: 50%;
}


.logo-title {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  flex: 1;
}

.logo-text {
  font-size: 20px;
  font-weight: bold;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

</style>