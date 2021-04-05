var assert = require('assert');
var javascriptFunctions = require('../javascriptFunctions');

describe('givenTwoIntegersWhenSumThenSuccess', function(){
    it('sum(1,2) = 3', function() {
        //GIVEN 
        var a = 1;
        var b = 2;
        var expectedResult = 3;

        //WHEN 
        var actualResult = javascriptFunctions.sum(a,b);

        //THEN 
        assert.strictEqual(expectedResult, actualResult);
    })
})