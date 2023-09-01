<template>
  <div class="header_box flex items-center justify-between">
    <div class="flex items-center">
      <el-avatar @click="changeAvatar">
        <template #default>
          <img :src="getImg()" />
        </template>
      </el-avatar>
      <span class="ml-10">CPS</span>
    </div>
    <el-menu
      class="header_menu flex items-center justify-between"
      :default-active="activeIndex"
      :ellipsis="false"
      mode="horizontal"
      router
    >
      <el-menu-item v-for="menu of state.menusList" :key="menu.value" :index="menu.value" >{{ menu.label }}</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const state = reactive({
  avatarUrl: 'avatar_default.png',
  menusList: [
    {
      label: '首页',
      value: 'home'
    },
    {
      label: '日常',
      value: 'daily'
    },
    {
      label: '文章',
      value: 'article'
    },
    {
      label: '关于我',
      value: 'aboutMe'
    },
    {
      label: '交流',
      value: 'message'
    }

  ],
})
const activeIndex = ref('1')

const getImg = () => {
  return new URL(`src/assets/images/${state.avatarUrl}`, 'http://localhost:3000').href
}
// 更换头像
function changeAvatar() {}
</script>

<style lang="scss" scoped>
/**
 * 自定义动画效果
 * 
 */
@keyframes myFrame {
  from {
    transform: scale(1, 1);
  }

  to {
    transform: scale(1.2, 1.2);
  }
}

.header_box {
  position: sticky;
  top: 0;
  height: 5vh;
  width: 100%;
  color: #fff;
  background-color: rgba(50, 50, 50, 0.4);
  padding: 0 20px;
  box-sizing: border-box;
}

.header_menu {
  border: none;
  background-color: transparent;
}

.el-menu .el-menu-item {
  color: #fff;
}
</style>
