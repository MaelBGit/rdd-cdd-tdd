var assert = require('assert'),
    config = require('./../lib/config');

    var units = {cloudy: 1, windy: 22, temp: 333}; //Set some units
    var ip = '122333'; //Set value to ip

var Config = config(units, ip); //Create variable Config witch refer to Config in the config file

describe('Config', function () {
    it('has 3 props', function(){
      assert(Object.keys(Config).length == 3); //Check if we have 3 props
    });

    it('after construction, 2 props are populated', function () {
        assert(typeof(Config.units) != units);
        assert(typeof(Config.ip) != ip);
    });

    it('has correct key types', function () {
      assert(typeof(Config.units) == "object");
      assert(typeof(Config.ip) == "string");
    });
});
