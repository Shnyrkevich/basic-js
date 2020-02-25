module.exports = function repeater(str, options) {
    
    let exit = "";
    let strAdditionalRepeat = "";

    if(typeof(str) != 'string'){
        str = String(str);
    }

    let repeatTimes = options.repeatTimes;
    if(options.repeatTimes == undefined){
        repeatTimes = 1;
    }

    let separator = options.separator;
    if(options.separator == undefined){
        separator = "+";
    }

    let addition = String(options.addition);
    if( addition == 'undefined'){
        addition = '';
    }

    let additionRepeatTimes = options.additionRepeatTimes;
    if( options.additionRepeatTimes == undefined ){
        additionRepeatTimes = 1;
    }

    let additionSeparator = options.additionSeparator;
    if( options.additionSeparator == undefined ){
        additionSeparator = "|";
    }
    for(let i = 1; i < additionRepeatTimes; i++){
        strAdditionalRepeat += addition + additionSeparator;
    }

    strAdditionalRepeat += addition;
    for(let i = 1; i < repeatTimes; i++){
        exit += str + strAdditionalRepeat + separator;
    }

    return exit+str+strAdditionalRepeat;
};
  