function convert(decimal){
    var a = Math.floor(decimal/8);
    var b = decimal%8;
    var c = a*10 + b;
    return c;
}

exports.convert = convert;