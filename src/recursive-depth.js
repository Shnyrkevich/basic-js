module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1) {
        //console.log("Array:", arr);
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                depth += this.calculateDepth([].concat(...arr), depth);//concat объеденяет массив например [1,2,3].concat[1,2] = [1,2,3,1,2]
                //console.log("Counter:", depth);                        //spread(..,) разворачивает массив и передает его поэлементно 
                break;                                                 //Решение подсмотрел у BlazarQSO
                                                                       //Мое решение проверяло каждый элемент массива и подсчитывало общее количество массивов
            }
        }
        return depth;
    }
};