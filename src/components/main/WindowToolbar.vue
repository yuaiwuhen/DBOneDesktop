<template>
  <div class="window-toolbar">
    <template v-if="isElectron">
      <el-button v-if="!fullScreenDef" @click="fullScreen" link text round plain :title="t('fullscreen')">
        <el-icon :size="20">
          <Icon icon="fluent:full-screen-maximize-24-regular" />
        </el-icon>
      </el-button>
      <el-button v-if="fullScreenDef" @click="fullScreen" link text round plain :title="t('exit_fullscreen')">
        <el-icon :size="20">
          <Icon icon="fluent:full-screen-minimize-24-regular" />
        </el-icon>
      </el-button>

      <el-button @click="minimize" link text round plain :title="t('minimize')">
        <el-icon :size="20">
          <Icon icon="fluent:minimize-24-regular" />
        </el-icon>
      </el-button>

      <el-button v-if="!maximizeDef" @click="maximize" link text round plain :title="t('maximize')">
        <el-icon :size="20">
          <Icon icon="fluent:maximize-24-regular" />
        </el-icon>
      </el-button>
      <el-button v-if="maximizeDef" @click="maximize" link text round plain :title="t('restore')">
        <el-icon :size="20">
          <Icon icon="fluent:panel-separate-window-20-regular" />
        </el-icon>
      </el-button>

      <el-button @click="exit" link text round plain :title="t('close')">
        <el-icon :size="20">
          <Icon icon="fluent:dismiss-24-regular" />
        </el-icon>
      </el-button>
    </template>
  </div>
</template>

<script setup lang="ts">

import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { getElectron } from "@/utils/common";
import settings from "@/config/settings";
import { Icon } from '@iconify/vue';

const { t } = useI18n();

const isElectron = ref(getElectron())

const fullScreenDef = ref(false)
const fullScreen = (): void => {
  console.log('fullScreen')
  fullScreenDef.value = !fullScreenDef.value

  const { ipcRenderer } = (window as any).require('electron')
  ipcRenderer.send(settings.electronMsg, 'fullScreen')
}

const maximizeDef = ref(true)
const minimize = (): void => {
  console.log('minimize')

  const { ipcRenderer } = (window as any).require('electron')
  ipcRenderer.send(settings.electronMsg, 'minimize')
}
const maximize = (): void => {
  console.log('maximize')

  const { ipcRenderer } = (window as any).require('electron')
  ipcRenderer.send(settings.electronMsg, maximizeDef.value ? 'unmaximize' : 'maximize')
  maximizeDef.value = !maximizeDef.value
}

const exit = (): void => {
  console.log('exit')
  const { ipcRenderer } = (window as any).require('electron')
  ipcRenderer.send(settings.electronMsg, 'exit')
}
</script>

<style scoped type="sass">
.window-toolbar {
  position: fixed;
  right: 0;
}
</style>
