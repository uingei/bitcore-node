'use strict';

var request = require('request');
var config = require('./config.json');
var addresses = require('/tmp/large_amounts_utxos.json');

// each of those addresses has a large number of utxos

// we are going to act like this group of addresses is our wallet, this ought to be fun!

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var url = config.old;

if (process.argv[2] === 'old') {
  url = config.new;
}

var options = {

  url: url,
  method: 'POST',
  qs: { from: 0, to: 5, noAsm: 1, noScriptSig: 1, noSpent: 1 },
  json: { addrs: '1H4drU7anmDUdJKAcJXfoExPPNJbwiM7nJ' }
  //json: { addrs: addresses }
};

request(options, function(err, response, body) {
  console.log(JSON.stringify(body));
});



