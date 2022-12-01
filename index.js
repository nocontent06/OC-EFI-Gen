//
//        OC-EFI-Gen - OpenCore configurtor
//
//       Created by Felix Pirs @NoContent_06 (c) 2022
//
///////////////////////////////////////////////////////////



//++++++++ Electron Functions ++++++++++

const electron = require('electron')
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu
const globalShortcut = electron.globalShortcut;
const { dialog } = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs')

let version = '1.0 Beta 3'
// Enable live reload for all the files inside your project directory
// require('electron-reload')(__dirname, {
//   // Note that the path to electron may vary according to the main file
//   electron: require(`${__dirname}/node_modules/electron`)
// });

// let win;
// let path_ = './package.json'
// const fileContents = fs.readFileSync(path_, 'utf8');
// let data = JSON.parse(fileContents);

function createWindow(){
  win = new BrowserWindow({
    //890
    width: 1024,
    height: 800,
    //icon: __dirname + '\\resources\\appicons\\appicon_dummy.ico',
    
    // file deepcode ignore ElectronInsecureWebPreferences: <please specify a reason of ignoring this>, file deepcode ignore ElectronInsecureWebPreferences: <please specify a reason of ignoring this>
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    resizable: false
    
    
  });
  globalShortcut.register('f5', function() {
		console.log('f5 is pressed')
		win.reload()
	})

  //win.webContents.openDevTools()

  win.loadFile('index.html')
  // win.webContents.on('did-finish-load', () => {
  //   dialog.showOpenDialog({
  //     properties: ['openDirectory'],
  //     defaultPath:app.getPath('downloads'),
  //     buttonLabel: 'Select "OpenCore-***-Release/Debug Folder"'
  //   })})

  }

app.on('ready', () => {
  createWindow()
  const template = [
    // {
    //   label: "Demo", 
    //   submenu: [
    //     {
    //       label: 'submen1',
    //       click: function(){
    //         console.log("HW")
    //       }
    //     }, 
    //     {
    //       type: 'separator'
    //     },
    //     {
    //       label: 'submen2'
    //     }
    //   ]
    // },
    {
      label: "OpenCore Configurator",
      submenu: [
        {
          label: 'About OpenCore Configurator',
          click: function(){
            dialog.showMessageBox({ message: `OpenCore EFI Generator - Version: ` + version + `\n\n Made with love by @nocontent06 (TheAppleLegacyGuy#7469 Discord) ` })
          }
        }
      ]
    },
    {
      label: "Help",
      submenu: [
        {
          label: 'Discord',
          click: function(){
            electron.shell.openExternal('https://discord.gg/hyTP8ynDAz')
          }
        },
        //{type: 'seperator'},
        {
          label: 'GitHub',
          click: function(){
            electron.shell.openExternal('https://github.com/nocontent06')
          }
        }
      ]
    }
    ]

  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

});

// // Create Electron Window & Instance
//   // file deepcode ignore PromiseNotCaughtNode: <please specify a reason of ignoring this>
//   // file deepcode ignore PromiseNotCaughtNode: <please specify a reason of ignoring this>
//   // app.whenReady().then(() => {
// createWindow.main = function createWindow(){
//     win = new BrowserWindow({
//       width: 1200,
//       height: 650,
      
//       // file deepcode ignore ElectronInsecureWebPreferences: <please specify a reason of ignoring this>, file deepcode ignore ElectronInsecureWebPreferences: <please specify a reason of ignoring this>
//       webPreferences: {
//         nodeIntegration: true,
//         contextIsolation: false,
//         enableRemoteModule: true,
//       },
//       resizable: false
      
//     });
    
//     win.webContents.openDevTools()

//     win.loadFile('index.html')

//   }

module.exports = createWindow;
//   // createWindow()


//   app.on('ready', () => {
//     createWindow.main();
//     const template = [
//       {
//         label: "Demo"
//       }
//     ]
//     let menu_;
//     menu_ = menu_.buildFromTemplate(template)
//     menu_.setApplicationMenu(menu)
 
//   })











// //++++++++ App Functions ++++++++++











// //      Hardware Infos       //

// const App_Hardware_CPU     = null;
// const App_Hardware_BIOS    = null;
// const App_Hardware_GPU     = null;
// const App_Hardware_Storage = null;
// const App_Hardware_Audio   = null;
// const App_Hardware_Network = null;

// ///////////////////////////////

