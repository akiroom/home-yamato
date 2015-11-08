'use strict';

const app = require('app');
const BrowserWindow = require('browser-window');
const TrayManager = require('./ui/tray-manager.js')

const Server = require('./server.js');

require('crash-reporter').start();
var mainWindow = null;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', () => {
  this.trayManager = new TrayManager();

  //mainWindow = new BrowserWindow({width: 800, height: 600});
  //mainWindow.loadUrl('file://' + __dirname + '/index.html');
  //mainWindow.on('closed', function() {
  //  mainWindow = null;
  //});
});
