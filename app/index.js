'use strict';

var request   = require('request');
var cheerio   = require('cheerio');

var app = {

  convert: function(from, to, callback){

    if(!from || !to) return callback(new Error('params is invalid.'));
    //var url = 'https://www.google.com/finance/converter?a=1&from='+from+'&to='+to;
    var url = 'http://www.xe.com/currencyconverter/convert/?Amount=1&From='+from+'&To='+to+'#converter';
    //var url = 'http://rate-exchange.appspot.com/currency?from='+from+'&to='+to+'&q=1';
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var data  = cheerio('table.ucc-result-table tr.uccRes td',body).eq(2).find('span').html('').parent().text().trim();
        if(data && Number(data) > 0) return callback(null,{data: Number(data).toFixed(5)});
        if(!data && Number(data) <= 0) return callback(new Error('Have error data not find or data <= 0'));
      }
      if(error) return callback(error);
      if(!error && response.statusCode !== 200) return callback(new Error('Status code'+response.statusCode));
    });

  }

}


module.exports  = app;
