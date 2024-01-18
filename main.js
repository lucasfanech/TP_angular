const { app, BrowserWindow } = require('electron');
app.whenReady().then(() => {
  win = new BrowserWindow({width: 800, height: 800});
  win.loadFile('dist/mon-nouveau-projet/browser/index.html');
})
