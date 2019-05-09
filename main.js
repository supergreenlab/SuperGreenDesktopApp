/*
**  Http
*/

const express = require('express');
const httpapp = express();
let serverUrl = 'http://localhost:'
httpapp.use('/', express.static(__dirname + '/www'));
const server = httpapp.listen(0, () => serverUrl += server.address().port);

/*
** Electron
*/
let win = null // Current window
const electron = require('electron')
const path = require('path')
const app = electron.app
const newWin = () => {
	win = new electron.BrowserWindow({
		icon: path.join(__dirname, 'static/icon.png')
	})
	win.maximize()
	win.on('closed', () => win = null)
  return win.loadURL(serverUrl)
}
app.on('ready', newWin)
app.on('window-all-closed', () => app.quit())
app.on('activate', () => win === null && newWin())
