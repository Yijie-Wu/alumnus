<script setup>
import {User, DataBoard, Grape, Setting} from '@element-plus/icons-vue'

</script>

<template>
  <el-menu :default-active="$route.path" class="admin-aside" router unique-opened :collapse-transition="false">
    <el-menu-item index="/admin">
      <el-icon>
        <DataBoard/>
      </el-icon>
      <template #title>后台首页</template>
    </el-menu-item>
    <el-sub-menu index="roles-users">
      <template #title>
        <el-icon>
          <User/>
        </el-icon>
        用户管理
      </template>
      <el-menu-item index="/admin/roles/list">角色列表</el-menu-item>
      <el-menu-item index="/admin/users/list">用户列表</el-menu-item>
      <el-menu-item index="/admin/users/add">新增用户</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="alumnus-manager">
      <template #title>
        <el-icon>
          <Grape/>
        </el-icon>
        校友管理
      </template>
      <el-menu-item index="/admin/alumnus">校友列表</el-menu-item>
      <el-menu-item index="/admin/alumnus/add">新增校友</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="user-settings">
      <template #title>
        <el-icon>
          <Setting/>
        </el-icon>
        用户设置
      </template>
      <el-menu-item index="/admin/user/profile">用户信息</el-menu-item>
      <el-menu-item index="/admin/user/change-avatar">修改头像</el-menu-item>
      <el-menu-item index="/admin/user/change-password">修改密码</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
.admin-aside {
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>