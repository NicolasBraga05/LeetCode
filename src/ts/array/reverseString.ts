function reverseWords(s: string): string {
    const arr1 = s.split(' ')
    const arr2 = arr1.filter(item => item !== "")

    console.log(arr2, 'ARR2')

    let arr3: string[] = []
    for(let i: number = arr2.length - 1; i >= 0; i--) {
        arr3.push(arr2[i])
    }
    const newS = arr3.join(' ');

    return newS

};

console.log(reverseWords('   Nicolas   Braga    '))