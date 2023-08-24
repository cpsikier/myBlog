<template>
	<div>
		<el-button type="primary" @click="toLogin">点击登录</el-button>
	</div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
function toLogin (): void {
	router.push({name: 'Home'})
}
</script>

<style>
</style>