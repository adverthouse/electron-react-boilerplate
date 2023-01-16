
const { ipcRenderer, contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send('notify', message);
    },
    newWindow(message){
      ipcRenderer.send('newWindow', message);
    },
    quitApp() {
      ipcRenderer.send('quitApp');
    },
    quitWindow(){
      ipcRenderer.send('quitWindow');
    }
  },
  batteryApi: {

  },
  filesApi: {

  }
})
