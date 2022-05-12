//
//        Brewster - OpenCore configurtor
//
//       Created by Jason Jesse Huber (JJH) (c) 2022
//
///////////////////////////////////////////////////////////



//++++++++ Electron Functions ++++++++++

const { app, BrowserWindow } = require('electron')
const electron = require('electron')

// Enable live reload for all the files inside your project directory
require('electron-reload')(__dirname, {
  // Note that the path to electron may vary according to the main file
  electron: require(`${__dirname}/node_modules/electron`)
});

// Create Electron Window & Instance
  // file deepcode ignore PromiseNotCaughtNode: <please specify a reason of ignoring this>
  // file deepcode ignore PromiseNotCaughtNode: <please specify a reason of ignoring this>
  app.whenReady().then(() => {
    const createWindow = () => {
      const win = new BrowserWindow({
        width: 1200,
        height: 650,
        
        // file deepcode ignore ElectronInsecureWebPreferences: <please specify a reason of ignoring this>, file deepcode ignore ElectronInsecureWebPreferences: <please specify a reason of ignoring this>
        webPreferences: {
          nodeIntegration: true,
          contextIsolation: false,
          enableRemoteModule: true,
        },
        resizable: false
      });
      win.webContents.openDevTools()
    
      win.loadFile('index.html')
    }


    createWindow()

  })









//++++++++ App Functions ++++++++++











//      Hardware Infos       //

const App_Hardware_CPU     = null;
const App_Hardware_BIOS    = null;
const App_Hardware_GPU     = null;
const App_Hardware_Storage = null;
const App_Hardware_Audio   = null;
const App_Hardware_Network = null;

///////////////////////////////


