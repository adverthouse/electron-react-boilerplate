const { BrowserWindow, app, Menu,ipcMain, Tray  } = require('electron');
const path = require('path');
const url = require("url");

const isDev = !app.isPackaged;
 
let mainWindow,addWindow; 

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}


app.on("ready", ()=> {

  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minHeight:500,
    minWidth:500,
    backgroundColor: "white",
    frame : true,
    webPreferences: {
      nodeIntegration: true,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true, 
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadFile("index.html");

  /*
  tray = new Tray("orbit.png");
  tray.setToolTip("Hello from space");

  tray.on("click", ()=> {
    mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();
  });

  let template = [
    { label : "Item 1" }, 
    { label : "item 2", type: "radio" },
    { type: 'separator' },
    { label : "Quit",
      click: () => {
        app.quit();
      }
    }
  ];

  let contextMenu = Menu.buildFromTemplate(template);
  tray.setContextMenu(contextMenu);
*/

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);

  ipcMain.on('notify', (_, message) => {
    console.log(message);
    //new Notification({title: 'Notifiation', body: message}).show();
  });

  ipcMain.on('newWindow', (_, message) => {
      createWindow();
  });

  ipcMain.on('quitApp', (_, message) => {
    app.quit();
  });

  ipcMain.on('quitWindow', (_, message) => {
    addWindow.close();
    addWindow = null;
  });

   mainWindow.on("close",()=> {
      app.quit();
   })
});

function createWindow(){
  addWindow = new BrowserWindow({
    width: 1200,
    height: 800,    
    backgroundColor: "white",
    title: "Modal window",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }   
  });

  addWindow.setResizable(false);

  addWindow.loadFile("modal.html");

  addWindow.on("close", () => {
      addWindow = null;
  });


//  Menu.setApplicationMenu(null);
}

const mainMenuTemplate = [
  {
     label: "Dosya",
     submenu : [
        {
            label : "Ekle",
            click: async () => {
             createWindow();
           }
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

if (isDev){
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