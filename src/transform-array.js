module.exports = function transform(arr) {

    if(!Array.isArray(arr)){
        throw new Error();
    }
    
    if(arr === []){
        return arr;
    }

    let mas = [];

    for(let i = 0; i <= arr.length-1; i++){
        switch(arr[i]){
            case '--discard-next':
                if(i != arr.length-1){
                    i++;
                    //console.log(i, mas);
                }
                break;
            case '--discard-prev':
                if( i != 0){
                    mas.pop();
                    //console.log(i, mas);
                }
                break;
            case '--double-next':
                if( i != arr.length-1){
                    mas.push(arr[i+1]);
                    //console.log(i, mas);
                }
                break;
            case '--double-prev':
                if( i != 0){
                    mas.push(arr[i-1]);
                    //console.log(i, mas);
                }
                break;
            default:
                mas.push(arr[i]);
                //console.log(i, mas);
        }
    }
    return mas;

};
