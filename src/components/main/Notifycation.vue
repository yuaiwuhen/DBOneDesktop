<template>
    <div>
        <el-progress :percentage="11"></el-progress>
    </div>
</template>
<script setup lang="ts">
import { ElNotification, ElProgress } from 'element-plus'
import { h, defineProps, watch } from 'vue'
import progress from "@/components/main/Progress.vue"

const props = defineProps<{
    progress: number
}>()

let notice = ElNotification({
    title: '下载进度',
    position: 'bottom-right',
    duration: 0,
    message: h(progress, {
        progress: props.progress, // 传递给子组件progress的prop
    } as any)
})
</script>