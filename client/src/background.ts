import { app } from 'electron'
import { DEBUG } from './app/utils/consts'
import { DBOApp } from './app/app'
import { logInfo } from './app/utils/log'
import update from './update.js'

//debug update
// Object.defineProperty(app, 'isPackaged', {
//   get() {
//     return true
//   }
// })

app.whenReady().then(async () => {
  logInfo(`DEBUG=${DEBUG}`)

  const dboApp = new DBOApp()
  app.whenReady().then(async () => {
    let url = ''
    if (process.argv[2]) {
      url = process.argv[2]
    } else {
      url = 'index.html'
    }
    dboApp.ready(url)
    update()
  })
})
