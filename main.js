const { BrowserWindow, app, Menu,ipcMain  } = require('electron');
const path = require('path');
const url = require("url");

const isDev = !app.isPackaged;
 
let mainwindow; 

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

app.on("ready", ()=> {

  mainwindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainwindow.loadURL(
    url.format({
      pathname : path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes : true
    })
  );

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);

  ipcMain.on('notify', (_, message) => {
    console.log(message);
    //new Notification({title: 'Notifiation', body: message}).show();
  });

});


const mainMenuTemplate = [
  {
     label: "Dosya",
     submenu : [
        {
            label : "Ekle"
        },
        {
          label : "Tümünü sil"
        }, 
        {
          label : "Çıkış",
          accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
          role :"quit"
        }
     ]
  }
]

if (process.platform == "darwin"){
   mainMenuTemplate.unshift({
      label : app.getName(),
      role: "TODO"
   });
}

if (process.env.NODE_ENV != "production"){
   mainMenuTemplate.push( {
    label: "Dev Tools",
    submenu : [
      { 
        label : "Dev",
        click(item, focusedWindow){
            focusedWindow.toggleDevTools();
        }
      },
      { 
        label : "Reload",
        click(item, focusedWindow){
            focusedWindow.reload();
        }
      }
    ]
  });
}