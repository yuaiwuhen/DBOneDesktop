<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import Sortable from "sortablejs";
import { ref, onMounted } from 'vue'
import type { TabPaneName } from 'element-plus'

let tabIndex = 2
const editableTabsValue = ref('2')
const editableTabs = ref([
  {
    title: 'Tab 1',
    name: '1',
    content: 'Tab 1 content',
  },
  {
    title: 'Tab ,
    name: '2',
    content: 'Tab 2 content',
  },
  {
    title: 'Tab 3',
    name: '3',
    content: 'Tab 3 content',
  },
  {
    title: 'Tab 4',
    name: '4',
    content: 'Tab 4 content',
  },
])

onMounted(() => {
  rowDrop()
})

const rowDrop = () => {
      const el = document.querySelector(".demo-tabs .el-tabs__nav"); //找到想要拖拽的那一列
      el && Sortable.create(el as HTMLElement, {
        forceFallback: false,
	      dragClass:'bgs',
        onEnd(e:any) {
          console.log(e.originalEvent.layerX, e.originalEvent.layerY, e.originalEvent.clientX, e.originalEvent.clientY)
          if(e.originalEvent.clientX < 0 || e.originalEvent.clientY < 0 || e.originalEvent.clientX > document.body.clientWidth || e.originalEvent.clientY > document.body.clientHeight){
            console.log('create window')
          }
          //oldIIndex拖放前的位置， newIndex拖放后的位置  //tabOptionList为遍历的tab签
          // const currRow = _this.tabOptionList.splice(oldIndex, 1)[0]; //鼠标拖拽当前的el-tabs-pane
          // _this.tabOptionList.splice(newIndex, 0, currRow); //tableData 是存放所以el-tabs-pane的数组
        },
      });
    }

const handleTabsEdit = (
  targetName: TabPaneName | undefined,
  action: 'remove' | 'add'
) => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    editableTabs.value.push({
      title: 'New Tab',
      name: newTabName,
      content: 'New Tab content',
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs.value
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }

    editableTabsValue.value = activeName
    editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
  }
}
</script>

<template>
    <el-tabs
    v-model="editableTabsValue"
    type="card"
    editable
    class="demo-tabs"
    @edit="handleTabsEdit"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.bgs{
  opacity: 1;
  background-color: red !important;
}
</style>