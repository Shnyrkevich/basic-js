module.exports = class DepthCalculator {
   calculateDepth(arr, depth = 1) {
        //console.log("Array:", arr);
        for(let i = 0; i <= arr.length-1; i++){
            if(Array.isArray(arr[i])){
                depth++;
                depth = this.calculateDepth(arr[i], depth);
                //console.log("Counter:", depth);
               // break;
            }
        }
        return depth;
    }
};