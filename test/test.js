var assert = require('assert');
var arrayToString = require('../index.js');

describe('Test', function() {

    it('should callback result without error', function(done) {

        // test data
        var array = [1,2,3,4,5,7,8,9,12,18,29,30,31,32,32,34,39,40,48,50,51,52,53,54,58,59,60,120,
                     380,381,382,383,384,385,386,1001,1002,1100,1111,1112,1113,1114, 1900];

        var correctResult = '1-5,7-9,12,18,29-32,34,39-40,48,50-54,58-60,120,380-386,1001-1002,1100,1111-1114,1900';

        arrayToString(array, function (err, result) {
            if (err) {
                throw err;
            } else {
                if (result == correctResult) {
                    done()
                } else {
                    throw new Error('Wrong result returned');
                }
            }
        });

    });

});
