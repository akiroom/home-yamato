'use strict';

class Assets {
  constructor () {
  }

  url(path) {
    return __dirname + path;
  }
}

module.exports = new Assets();
