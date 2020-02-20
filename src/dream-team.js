module.exports = function createDreamTeam(members) {
  //throw 'Not implemented';

  let toLetters = [];
  let counter = 0;
  let name = "";

  if(members )

  for(let i = 0; i < members.length; i++){
    if(typeof(members[i]) === 'string'){
      members[i] = members[i].trim();
      toLetters[i] = members[i][0].toUpperCase();
      counter++;
    }
  }

  toLetters.sort();

  if(toLetters.length > counter){
    toLetters = toLetters.splice(0, counter);
  }

  for(let i =0; i < toLetters.length; i++){
    name += toLetters[i];
  }

  return name;

  // remove line with error and write your code here
};