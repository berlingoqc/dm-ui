'use strict';
exports.__esModule = true;
var electron_1 = require('electron');
var path = require('path');
var url = require('url');
var win;
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function() {
  if (win === null) {
    createWindow();
  }
});
function createWindow() {
  win = new electron_1.BrowserWindow();
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, '/../dist/download-manager-ui/index.html')
    })
  );
  win.webContents.openDevTools();
  win.on('closed', function() {
    win = null;
  });
}
