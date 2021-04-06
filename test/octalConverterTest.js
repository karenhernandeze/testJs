var assert = require('assert');
var octalConverter = require('../octalConverter');

describe('givenDecimalWhenConvertThenOctal1', function(){
    it('convert(1) = 1', function() {
        //GIVEN 
        var a = 1;
        var expectedResult = 1;

        //WHEN 
        var actualResult = octalConverter.convert(a);
        
        //THEN 
        assert.strictEqual(expectedResult, actualResult);
    })
})