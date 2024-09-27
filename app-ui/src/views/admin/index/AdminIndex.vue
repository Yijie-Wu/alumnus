<script setup>
import {computed, onMounted, ref} from "vue";
import {showMessage} from "../../../utils/message.js";
import {get_admin_message} from "../../../apis/message.js";
import {Delete, User, Grape, Search} from "@element-plus/icons-vue";

const adminMessage = ref({})

onMounted(() => {
  get_admin_message().then(res => {
    adminMessage.value = res.data;
  }).catch(err => {
    showMessage('error', '获取后台信息失败')
  })
})


const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const windowHeight = computed(() => {
  return window.innerHeight - 340
})
</script>

<template>
  <div class="adin-index-container">
    <el-row :gutter="10">
      <el-col :span="8">
        <el-card style="height:200px;">
          <span style="display: block;">
            <el-icon>
              <User/>
            </el-icon>
            角色
          </span>
          <div style="margin-top: 20px;">
            <el-button type="warning" round>{{adminMessage.admin_count}} 超级管理员</el-button>
            <el-button type="primary" round>{{adminMessage.user_count}} 普通用户</el-button>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card style="height:200px;">
          <span style="display: block;">
            <el-icon>
              <Grape/>
            </el-icon>
            校友
          </span>
          <div style="margin-top: 20px;">
            {{adminMessage.alumnus_count}} 校友
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card style="height:200px;">
          <span style="display: block;">
            <el-icon>
            <Search/>
          </el-icon>
          搜索次数
          </span>

          <div style="margin-top: 20px;">
            {{adminMessage.search_count}} 次搜索记录
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card style="margin-top: 10px;">
          <template #header>
            <div style="display: flex;align-items: center;justify-content: space-between;">
              <div>最近搜索(最近100次)</div>
              <div>
                <el-button type="warning" round :icon="Delete">清空搜索历史</el-button>
              </div>
            </div>
          </template>
          <div>
            <el-table :data="tableData" border style="width: 100%" :height="windowHeight">
              <el-table-column prop="date" label="Date" width="180"/>
              <el-table-column prop="name" label="Name" width="180"/>
              <el-table-column prop="address" label="Address"/>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.adin-index-container {
  width: 96%;
  margin: 10px auto;
}
</style>