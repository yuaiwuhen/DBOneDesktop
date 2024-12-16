<template>
  <div id="container">
    <div id="menu">
      <Navbar />
    </div>
    <div id="main">
      <Splitpanes id="mainRow" ref="mainRow">
        <Pane :size="20" id="leftPane" :min-size="minLeftPane" :max-size="50">
          <div>left pane</div>
        </Pane>

        <Pane id="centerPane" :min-size="paneMinSize">
          <div>center pane</div>
        </Pane>

        <Pane :size="20" id="rightPane" :min-size="minRightPane" :max-size="80">
          <button @click="toggleDark()" style="margin:100px">{{ isDark ? 'Dark' : 'Light' }}</button>
        </Pane>
      </Splitpanes>
    </div>
    <div id="footer">footer</div>
  </div>
</template>

<script setup lang="ts">
import 'splitpanes/dist/splitpanes.css'

import { useToggle } from '@vueuse/core'
import { useI18n } from "vue-i18n";
import { ref,onMounted } from 'vue'
import { isDark } from '@/utils/dark'
import Navbar from '@/components/main/Navbar.vue';
import { Splitpanes, Pane } from 'splitpanes'
import { useHeightToPercent, useWidthToPercent } from '@/components/hooks/use-pixels-to-percent';

const { t } = useI18n();
const paneMinSize = ref(0)
const mainRow = ref();
const [minLeftPane, minRightPane] = useWidthToPercent(mainRow, 220, 200);
const toggleDark = useToggle(isDark);

onMounted(() => {
  const resize_ob = new ResizeObserver((entries) => {
    const width = entries[0].contentRect.width
    paneMinSize.value = (360 * 100) / width
  })
  resize_ob.observe(mainRow.value.container)
})

</script>

<style scoped type="sass">
#container {
  padding: 0 6px;
}

#menu {
  height: 30px;
}

#main {
  height: calc(100vh - 60px);

  :deep(.splitpanes--vertical>.splitpanes__splitter) {
    background-color: var(--el-menu-border-color)!important;
  }
}

#footer {
  height: 30px;
}
</style>