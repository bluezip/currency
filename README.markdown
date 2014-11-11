convert currency
===================================

### How to install###

    npm install bluezip/currency

~~~javascript
var currency    = require('bluezip-currency');
currency.convert('USD','THB',function(err,rate){
  // rate = { data: '32.86110' };
  console.log(rate);
});
~~~
