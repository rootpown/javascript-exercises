// Напишите функцию filterRange(arr, a, b), которая получает массив arr,
//  ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция не должна изменять массив. Она должна возвращать новый массив.

// Например:

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (matching values)

// alert( arr ); // 5,3,8,1 (not modified)


// elem >= a || elem <= b


function filterRange(arr,a,b) { 
    return arr.filter(elem => { 
        if( elem >= a && elem <= b) { 
            return elem
        }
    })
    
}

console.log(filterRange([5, 3, 8, 1], 1, 4)) // 3.1
console.log(filterRange([1,2,3,4,5], 1, 4)) // 1 ,2,3,4
console.log(filterRange([1,2,3,4,5], 3, 4)) // 3 , 4