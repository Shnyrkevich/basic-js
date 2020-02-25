const chainMaker = {

  mas: [],

  getLength() {
    return this.mas.length;
  },
  addLink(value) {
    this.mas.push(value);
    return this;
  },
  removeLink(position) {
    if( typeof(position) != 'number' || position-1 < 0 || position > this.getLength()){
      this.mas = [];
      throw new Error();
    } else {
      this.mas.splice(position-1, 1);
    }
    return this;
  },
  reverseChain() {
    this.mas.reverse();
    return this;
  },
  finishChain() {
    let exit = "";
    for(let i = 0; i < this.getLength(); i++){
      if( i == this.getLength()-1){
        exit += `( ${this.mas[i]} )`;
      } else {
        exit += `( ${this.mas[i]} )~~`;
      }
    }
    this.mas = [];
    return exit;
  }
};

module.exports = chainMaker;
