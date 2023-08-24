<template>
	<div class="text-gradient num-digit">Home 2342342 你好</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
onMounted(() => {
	// ;
	console.log(handleTest('chen', 'ps', 'c', 'h', 'e', 'n'));
})
function handleTest(firstName: string, ...restName: string[]): string {
	const fullName = firstName + restName.join(',');
	return fullName;
}
</script>

<style scoped>
</style>