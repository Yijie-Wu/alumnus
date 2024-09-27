<script setup>
import {ref, defineProps} from 'vue'
import UserCard from '../../components/cards/UserCard.vue'
import AlumnusDetail from '../../components/cards/AlumnusDetail.vue'

const props = defineProps(['alumnus'])
const carouselHeight = (window.innerHeight - 100) + 'px'
const viewData = ref({})
const viewDialog = ref(false)

</script>

<template>
  <div class="container">
    <div class="carousel-area">
      <div class="carousel-container">
        <el-carousel
            indicator-position="none"
            :height="carouselHeight"
            :pause-on-hover="true"
            arrow="never"
        >
          <el-carousel-item v-for="item in props.alumnus" :key="item.id">
            <UserCard :info="item"/>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 98%;
  height: 100%;
  margin: 10px auto;
}

.carousel-area {
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-container {
  width: 100%;
  height: calc(100vh - 100px);
}


</style>