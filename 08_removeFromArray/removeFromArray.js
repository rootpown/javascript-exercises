const removeFromArray = function(arr, ...args) {
    // const Arrays = []                   // 2,3,5, => ... 
    // arr.forEach(elems => { 
    //     if(!args.includes(elems)) { 
    //         Arrays.push(elems)
    //     }
    // })
    // return Arrays
    return arr.filter(elems => !(args.includes(elems)))
};
removeFromArray([1,2,3,4], 3)
// Do not edit below this line
module.exports = removeFromArray;
