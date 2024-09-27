<script setup>
import {ref, onMounted} from "vue";
import {useRouter} from 'vue-router';
import {search_alumnus} from "../../apis/alumnus.js";
import {get_show_alumnus} from "../../apis/alumnus.js";
import {useAllShowAlumnusStore} from "../../stores/main/alumnus.js";
import {showMessage} from "../../utils/message.js";
import LogoMain from "../../components/basic/LogoMain.vue";
import MainSearch from "../../components/cards/MainSearch.vue"
import MainIndexPeoples from "../../components/cards/MainIndexPeoples.vue"
import MainMenuAvatar from "../../components/avatar/MainMenuAvatar.vue";
import {Search, Close, Refresh, Postcard} from "@element-plus/icons-vue";

const router = useRouter()
const searchMode = ref(false)
const searchResult = ref([])
const searchText = ref('');
const alumnus_store = useAllShowAlumnusStore()


onMounted(() => {
  get_show_alumnus().then(res => {
    alumnus_store.setAlumnus(res.data);
  }).catch(err => {
    showMessage('error', '获取展示列表失败')
  })
})

const startSearch = () => {
  if (searchText.value.trim() === '') {
    showMessage('warning', '请输入最少一个字符');
    return
  }

  let data = {
    search_by: '姓名',
    q: searchText.value
  }

  search_alumnus(data).then(res => {
    searchResult.value = res.data;
    searchMode.value = true;
  }).catch(err => {
    showMessage('error', '搜索出错');
  })
}

const clearSearch = () => {
  searchMode.value = false;
  searchText.value = '';
  searchResult.value = []
}

const refreshIndexPage = () => {
  router.go(0);
  showMessage('success', '刷新成功');
}

</script>

<template>
  <div class="main-container">
    <div class="main-head">
      <el-row class="main-nav">
        <el-col :xs="8" :sm="8" :md="7" :lg="6" :xl="5">
          <div class="logo-container">
            <LogoMain/>
          </div>
        </el-col>
        <el-col :xm="8" :sm="8" :md="10" :lg="12" :xl="14">
          <div class="menu-container">
            <el-input
                v-model="searchText"
                style="height: 40px;border-radius: 20px;"
                :prefix-icon="Postcard"
                placeholder="请输入校友姓名, 并点击搜索按钮"
                clearable
            ></el-input>
          </div>
        </el-col>
        <el-col :xm="8" :sm="8" :md="7" :lg="6" :xl="5">
          <div class="nav-user-area">
            <div>
              <el-button type="success" plain round :icon="Search" @click="startSearch();">搜索</el-button>
              <el-button type="warning" plain round :icon="Close" :disabled="!searchMode" @click="clearSearch();">清除</el-button>
              <el-button type="primary" plain round :icon="Refresh" @click="refreshIndexPage();">刷新</el-button>
            </div>
            <MainMenuAvatar/>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="main-body">
      <MainSearch v-if="searchMode" :alumnus="searchResult"/>
      <MainIndexPeoples v-else :alumnus="alumnus_store.alumnuss"/>
    </div>
  </div>

</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-head {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 60px;
}

.main-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-nav {
  height: 60px;
  margin: 10px;
  padding: 0 10px;
  border-radius: 30px;
  box-sizing: border-box;
  background-color: lightgray;
}

.nav-user-area {
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.logo-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 60px;
  box-sizing: border-box;
}

.menu-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 60px;
  box-sizing: border-box;
}

.nav-user-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding-left: 15px;
  height: 60px;
  box-sizing: border-box;
}

</style>