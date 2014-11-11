convert currency
===================================

### How to install###

    npm install bluezip/currency

~~~javascript
var currency    = require('bluezip-currency');
currency.convert('EN','TH',function(err,rate){
  // rate = {data: 123.000000};
  console.log(rate);
});
~~~
