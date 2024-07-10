

export function arrSum(arr1, arr2) {
   
    return [...arr1, ...arr2].reduce((acc, curr) => acc + curr, 0);
}

console.log(arrSum([1, 2, 3], [4, 5, 6])); // 21
console.log(arrSum([-1, -2, -3], [-4, -5, -6])); // -21
console.log(arrSum([0, 0, 0], [4, 5, 6])); // 15
console.log(arrSum([100, 200, 300], [400, 500, 600])); // 2100

