module.exports = function countCats(mas) {
  //throw 'Not implemented';
  
  let counter = 0;

  for(let i = 0; i < mas.length; i++){
    for(let j = 0; j < mas[i].length; j++){
      if(mas[i][j] == "^^"){
        counter++;
      }
    }
  }
  return counter;

};
