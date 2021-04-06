function convert(decimal){

    const base = 8
    var octalString = decimal.toString(base);
    var octalNumber = parseInt(octalString);
    
    return octalNumber;
    
}

exports.convert = convert;