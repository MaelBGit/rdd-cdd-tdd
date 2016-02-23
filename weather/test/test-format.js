var assert = require('assert'),
    format = require('./../lib/format');

    describe('format', function () {
        it('is a constructor of the Format object', function () {
            var flag = typeof(format) === 'function';
            assert(flag);
        });
});
