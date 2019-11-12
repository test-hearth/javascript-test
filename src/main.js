var getList = function (params) {
    var tt = coreLogger(params);
    console.log('strings', tt);
};
// core function作って、その中ではstringsを引数に、引数を元にlogを吐き出す
var coreLogger = function (params) {
    var tt = '\?';
    // querystrings の組み立て(?始まり&区切りのid=string形式)
    if (Array.isArray(params)) {
        for (var _i = 0; _i < params.length; _i++) {
            var item = params[_i];
            tt += "id=" + item + "&";
        }
        return tt.slice(0, -1);
    }
    else if (typeof params === 'string') {
        console.log(params);
    }
};
// core functionにstring[]を渡して、引数が配列の場合、こちらの配列を使う 
