module.exports = function getSeason(date) {
  //throw 'Not implemented';

  if(!date){
    return 'Unable to determine the time of year!';
  } else if (date.toString.toString() !== 'function toString() { [native code] }'){
    throw new Error();
  }

  let month = date.getMonth();

  if(month == 1 || month == 0 || month == 11 ){
    return 'winter';
  } else if(month == 2 || month == 3 || month == 4 ){
    return 'spring';
  } else if(month == 5 || month == 6 || month == 7 ){
    return 'summer';
  } else if(month == 8 || month == 9 || month == 10 ){
    return 'autumn';
  }


};
