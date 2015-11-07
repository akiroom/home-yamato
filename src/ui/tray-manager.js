'use strict';

const Tray = require('tray');
const Menu = require('menu');
const Assets = require('../assets.js');
const app = require('app');
var spawn = require('child_process').spawn
const Command = require('../lib/command.js');

class TrayManager {
  constructor () {
    console.log(Assets.url('/assets/icon@18px.png'));
    const appIcon = new Tray(Assets.url('/assets/icon@18px.png'));

    const contextMenu = Menu.buildFromTemplate([
      //{label: '選択メニュー1', type: 'radio'},
      //{label: '選択メニュー2', type: 'radio'},
      //{type: 'separator'},
      //{label: 'サブメニュー', submenu: [
      //  {label: 'サブメニュー1'},
      //  {label: 'サブメニュー2'}
      //]},
      {label: 'ラジオ体操を再生する', click: () => Command.playRadioExercise() },
      {type: 'separator'},
      {label: '終了', accelerator: 'Command+Q', click: () => app.quit() }
    ]);
    appIcon.setContextMenu(contextMenu);
    // アイコンにマウスオーバーした時の説明
    appIcon.setToolTip('home-yamato');

    // MEMO: 日本語も話せるよ！
    //spawn("say", ["'はろう'"]);
  }
}

module.exports = TrayManager
