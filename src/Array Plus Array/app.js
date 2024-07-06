function arrSum(arr1, arr2) {
    const sum = arr1.map((num, idx) => num + arr2[idx]);
    const totalSum = sum.reduce((acc, curr) => acc + curr, 0);
    return totalSum;
}

console.log(arrSum([1, 2, 3], [4, 5, 6])); // 21
console.log(arrSum([-1, -2, -3], [-4, -5, -6])); // -21
console.log(arrSum([0, 0, 0], [4, 5, 6])); // 15
console.log(arrSum([100, 200, 300], [400, 500, 600])); // 2100

