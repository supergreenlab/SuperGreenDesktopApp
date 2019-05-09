/*
 * Copyright (C) 2019  SuperGreenLab <towelie@supergreenlab.com>
 * Author: Constantin Clauzel <constantin.clauzel@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

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
