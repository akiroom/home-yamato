'use strict';
const mdns = require('mdns-js');
const http = require('http');

class IRKit {
  constructor () {
    console.log('ほげ');

    var browser = mdns.createBrowser();

    browser.on('ready', function () {
      console.log('でぃすかば')
      browser.discover();
    });

    browser.on('update', (data) => {
      const name = data['type'][0]['name'];
      console.log(name)
      if (name === 'irkit') {
        const ipAddress = data['addresses'][0];
        console.log(name, ipAddress);
        this.ipAddress = ipAddress;
      }
    });
  }

  getMessages () {
    const options = {
      host: this.ipAddress,
      port: 80,
      path: '/messages',
      method: 'GET'
    };
    var req = http.request(options, (res) => {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
      });
    });
    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });
    req.end();
  }

  postMessage (message) {
    const options = {
      host: this.ipAddress,
      port: 80,
      path: '/messages',
      method: 'POST'
    };
    var req = http.request(options, (res) => {
      console.log('STATUS: ' + res.statusCode);
      console.log('HEADERS: ' + JSON.stringify(res.headers));
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
      });
    });
    req.on('error', function(e) {
      console.log('problem with request: ' + e.message);
    });
    req.write(message);
    req.end();
  }
}

module.exports = new IRKit();
