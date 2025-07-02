function twoSum(numbers: number[], target: number): number[] {
    const arr: number[] = []
    for(let i: number = 0; i < numbers.length; i++) {
        for(let j: number = numbers.length - 1; j >= 0; j--) {
            if(numbers[i] + numbers[j] === target) {
                arr.push(i + 1, j + 1)
                return arr
            }
        }
    }
    return []
};