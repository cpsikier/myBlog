<template>
	<div class="header_box flex items-center justify-between">
		<div>CPS</div>
		<el-menu class="header_menu flex items-center justify-between" :default-active="activeIndex" :ellipsis="false"
			mode="horizontal">
				<el-menu-item index="1">主页</el-menu-item>
				<el-menu-item index="2">日常</el-menu-item>
				<el-menu-item index="3">博文</el-menu-item>
				<el-menu-item index="4">关于我</el-menu-item>
				<el-menu-item index="5">交流</el-menu-item>			
		</el-menu>
	</div>
</template>

<script setup lang="ts">
	import {
		ref
	} from 'vue';
	const activeIndex = ref('1')
</script>

<style lang="scss" scoped>
	/**
 * 自定义动画效果
 * 
 */
	@keyframes myframe {
		from {
			transform: scale(1.0, 1.0);
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
