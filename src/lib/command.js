'use strict';
const IRKit = require('./irkit.js');

class Command {
  constructor () {
  }

  playRadioExercise () {
    // 自宅のテレビでラジオ体操を再生する
    const powerCommand =
      '{"format":"raw","freq":38,"data":[6881,3341,873,873,873,2537,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,2537,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,2537,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,2537,873,873,873,2537,873,2537,873,2537,873,2537,873,873,873,873,873,2537,873,873,873,2537,873,2537,873,2537,873,2537,873,873,873,2537,873,65535,0,65535,0,17421,6881,3341,873,873,873,2537,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,2537,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,2537,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,873,2537,873,873,873,2537,873,2537,873,2537,873,2537,873,873,873,873,873,2537,873,873,873,2537,873,2537,873,2537,873,2537,873,873,873,2537,873,65535,0,65535,0,17421]}';
    const changeInput =
      '{"format":"raw","freq":38,"data":[6881,3341,904,815,904,2537,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,2537,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,2537,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,2537,904,815,904,2537,904,815,904,815,904,815,904,815,904,815,904,2537,904,815,904,2537,904,787,904,787,904,787,904,787,904,2537,904,65535,0,65535,0,17421,6881,3341,904,815,904,2537,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,2537,904,787,904,787,904,787,904,787,904,787,904,787,904,787,904,787,904,787,904,2537,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,2537,904,815,904,2537,904,815,904,815,904,815,904,815,904,815,904,2537,904,815,904,2537,904,815,904,815,904,815,904,815,904,2537,904,65535,0,65535,0,17421]}';
    const channel7 =
      '{"format":"raw","freq":38,"data":[6881,3341,904,815,904,2537,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,2537,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,815,904,2537,904,2537,904,815,904,815,904,2537,904,815,904,815,904,815,904,815,904,815,904,2537,904,2537,904,815,904,815,904,815,904,2537,904,815,904,2537,904,2537,904,2537,904,2537,904,815,904,815,904,2537,904,2537,904]}';
    IRKit.postMessage(powerCommand);
    setTimeout(() => {
      IRKit.postMessage(changeInput);
      setTimeout(() => {
        IRKit.postMessage(channel7);
      }, 1000);
    }, 1000);
  }
}

module.exports = new Command();