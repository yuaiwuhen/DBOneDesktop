import { ipcMain } from 'electron'
import { autoUpdater } from "electron-updater";
import { logInfo } from './app/utils/log'

autoUpdater.autoDownload = false
// autoUpdater.setFeedURL('https://github.com/yuaiwuhen/DBOneDesktop/releases/latest/')
let mainEvent: { sender: { send: (arg0: string, arg1: any) => void } }

const update = () => {
    bindMainListener()

    ipcMain.on('update-check', (event: any) => {
        mainEvent = event
        //debug update progresss
        // const progressObj = {
        //     "total": 82907771,
        //     "delta": 229376,
        //     "transferred": 67105710,
        //     "percent": 0,
        //     "bytesPerSecond": 233837
        // }
        // setInterval(() => {
        //     progressObj.percent += 1.1123;
        //     if(progressObj.percent > 100) {
        //         progressObj.percent = 100;
        //     }
        //     mainEvent.sender.send('download-progress', progressObj)
        // }, 1000)

        autoUpdater
            .checkForUpdates()
            .then(() => {})
            .catch((err: any) => {
                logInfo('check update error: ' + err)
                mainEvent.sender.send('update-error', err)
            })
    })

    ipcMain.on('continue-update', () => {
        autoUpdater
            .downloadUpdate()
            .then(() => { })
            .catch((err: any) => {
                logInfo('update error: ' + err)
                mainEvent.sender.send('update-error', err)
            })
    })
}

function bindMainListener() {
    autoUpdater.on('checking-for-update', () => {
        logInfo('checking fro update...')
    })

    autoUpdater.on('update-available', (info: any) => {
        logInfo('update available' + JSON.stringify(info))
        mainEvent.sender.send('update-available', info)
    })

    autoUpdater.on('update-not-available', (info: any) => {
        logInfo('update not available' + JSON.stringify(info))
        mainEvent.sender.send('update-not-available', info)
    })

    autoUpdater.on('error', (err: any) => {
        mainEvent.sender.send('update-error', err)
    })

    autoUpdater.on('download-progress', (progressObj: any) => {
        mainEvent.sender.send('download-progress', progressObj)
    })

    autoUpdater.on('update-downloaded', (info: any) => {
        mainEvent.sender.send('update-downloaded', info)
    })
}

export default update
