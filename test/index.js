var Currency    = require('../app');
var should      = require('should');


describe('Currency',function(){

  it('test convert EN to TH should not error', function(){

    Currency.convert('EN', 'TH', function(err,rate){
      should.not.exist(err);
      rate.should.have.property('data')
        .with.is.a.Number;
    });
  });
});
