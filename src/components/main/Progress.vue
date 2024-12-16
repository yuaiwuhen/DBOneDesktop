<template>
    <div class="task-list">
        <div class="task-item">
            <i class="iconfont icon-file-folder"></i>
            <span>下载任务列表</span>
            <el-progress :percentage="props.progress" />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ElProgress } from 'element-plus'
import { h, defineProps, watch } from 'vue'

const props = defineProps<{
    progress: number
}>()

watch(props, () => {
    console.log('watch progress', props.progress)
})
// 改变进度条状态的相关逻辑代码
function changeProgress() {
    if (props.progress >= 100) {
        // emit('finish', status.value) // 发射事件，并传递一个参数
    }
}
</script>
  
<style scoped>
.task-item {
    width: 290px;
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: 2fr 1fr 2fr;
    align-items: center;
}

.task-item i {
    font-size: 30px;
    color: rgb(252, 203, 66);
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 4;
}
</style>