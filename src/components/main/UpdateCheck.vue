<template>
  <div v-if="downloadProcessShow" class="el-notification right" role="alert" style="top: 16px; z-index: 2029;">
    <div class="el-notification__group">
      <h2 class="el-notification__title">{{ t('message.update_downloading') }}</h2>
      <div class="el-notification__content">
        <el-progress :percentage="downloadProgress"></el-progress>
      </div>
      <i-ep-close class="el-icon el-notification__closeBtn" @click="hideDownloadProgress" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import isElectron from "is-electron"
import bus from "@/utils/eventBus";
import { ElNotification, ElMessageBox, ElProgress } from 'element-plus';

const { t } = useI18n();
const { ipcRenderer } = isElectron() ? (window as any).require('electron') : { ipcRenderer: null };

const manual = ref(false)
const updateChecking = ref(false)
const downloadProcessShow = ref(false)
const downloadProgress = ref(0);

onBeforeMount(() => {
  ipcRenderer?.send('update-check')
  bus.on('update-check', (manualVal = false) => {
    manual.value = manualVal as boolean

    // update checking running...
    if (updateChecking.value) {
      return
    }

    updateChecking.value = true
    ElNotification.closeAll()

    ipcRenderer?.send('update-check')
  })
})

const bindRendererListener = () => {
  // already bind listening
  if (ipcRenderer.binded) {
    return
  }

  ipcRenderer.binded = true

  ipcRenderer.on('update-available', (event: any, arg: any) => {
    console.log('update available', arg)
    ElNotification.closeAll()

    const ignoreUpdateKey = `IgnoreUpdateVersion_${arg.version}`
    // version ignored
    if (!manual.value && localStorage[ignoreUpdateKey]) {
      return resetDownloadProcess()
    }

    ElMessageBox.confirm(arg.releaseNotes, {
      title: `${t('message.update_available')}: ${arg.version}`,
      confirmButtonText: t('message.begin_update'),
      cancelButtonText: t('message.ignore_this_version'),
      dangerouslyUseHTMLString: true,
    })
      .then(() => {
        console.log('begin update')
        // update btn clicked
        manual.value = true
        ipcRenderer.send('continue-update')
      })
      .catch(() => {
        console.log('ignore this version')
        // ignore this version
        localStorage[ignoreUpdateKey] = true
        resetDownloadProcess()
      })
  })

  ipcRenderer.on('update-not-available', () => {
    ElNotification.closeAll()
    resetDownloadProcess()

    // latest version
    manual.value &&
      ElNotification.success({
        title: t('message.update_not_available'),
        duration: 2000
      })
  })

  ipcRenderer.on('update-error', (event: any, arg: any) => {
    resetDownloadProcess()

    let message = ''
    let error = (arg.code ? arg.code : arg.message).toLowerCase()

    // auto update check at app init
    if (!manual.value || !error) {
      return
    }

    // mac not support auto update
    if (error.includes('zip') && error.includes('file')) {
      message = t('message.mac_not_support_auto_update')
    }

    // err_internet_disconnected err_name_not_resolved err_connection_refused
    else {
      message = t('message.update_error') + `: ${error}`
    }

    ElNotification.error({
      message: message,
      duration: 0,
      dangerouslyUseHTMLString: true
    })
  })

  ipcRenderer.on('download-progress', (event: any, arg: any) => {
    console.log('download progress', arg)
    if (!downloadProcessShow.value && !downloadProgress.value) {
      downloadProcessShow.value = true
    }

    setProgressBar(Math.floor(arg.percent))
  })

  ipcRenderer.on('update-downloaded', () => {
    setProgressBar(100)
    resetDownloadProcess()
    ElNotification.success({
      title: t('message.update_downloaded'),
      duration: 0
    })
  })
}
const setProgressBar = (percent: number) => {
  if (downloadProcessShow.value) downloadProgress.value = percent;
}
const resetDownloadProcess = () => {
  updateChecking.value = false
  downloadProcessShow.value = false
}

const hideDownloadProgress = () => {
  downloadProcessShow.value = false
}

onMounted(() => {
  if (isElectron()) {
    bindRendererListener()
  }
})
</script>

<style scoped type="sass">
.el-notification__group {
  width: 100%;
}
</style>
