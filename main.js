const electron = require('electron');
const url = require('url');
const path = require('path');
require('@electron/remote/main').initialize();

var nodeConsole = require('console');
var myConsole = new nodeConsole.Console(process.stdout, process.stderr);
myConsole.log('Hi:)');

const {app, BrowserWindow, Menu} = electron;
Menu.setApplicationMenu(null);

let mainWindow;

app.on('ready', function(){
    mainWindow = new BrowserWindow({width: 1200, height: 720, resizable: false, frame: false, webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true
    }, icon: "Static/Icon.ico"});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
});