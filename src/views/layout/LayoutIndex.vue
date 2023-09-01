<template>
	<div class="home_div">
		<!-- 头部导航栏 -->
		<VHeader></VHeader>
		<div class="main_div margin-auto">
      <router-view :key="viewKey"></router-view>
    </div>
	</div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import VHeader from './header/HeaderIndex.vue';

  const route = useRoute();
const viewKey = computed(() => (route.query.t as string) || Date.now());
</script>

<style>
	.home_div {
		width: 100vw;
		height: 100vh;
		background: url(@/assets/images/home_bg1.jpeg) no-repeat center;
		background-size: 100% 100%;
		background-attachment: fixed;
		image-rendering: -webkit-optimize-contrast;
		
		.main_div {
			width: 75vw;
			height: 1000px;
			margin: 0 auto;
			background-color: bisque;
			opacity: 0.3;
		}
	}
</style>