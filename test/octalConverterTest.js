var assert = require('assert');
var octalConverter = require('../octalConverter');

describe('givenDecimal1WhenConvertThenOctal1', function(){
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

describe('givenDecimal2WhenConvertThenOctal2', function(){
    it('convert(2) = 2', function() {
        //GIVEN 
        var a = 2;
        var expectedResult = 2;

        //WHEN 
        var actualResult = octalConverter.convert(a);
        
        //THEN 
        assert.strictEqual(expectedResult, actualResult);
    })
})

describe('givenDecimal8WhenConvertThenOctal10', function(){
    it('convert(8) = 10', function() {
        //GIVEN 
        var a = 8;
        var expectedResult = 10;

        //WHEN 
        var actualResult = octalConverter.convert(a);
        
        //THEN 
        assert.strictEqual(expectedResult, actualResult);
    })
})