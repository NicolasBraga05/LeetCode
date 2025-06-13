function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const count: { [char: string]: number } = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) {
            return false; 
        }
        count[char]--;
    }

    return true;
}


function isAnagram2(s: string, t: string): boolean {
    if(s.length !== t.length) return false;

    const newS = s.split('').sort().join('')
    const newT = t.split('').sort().join('')

    if(newS === newT) return true;
    return false;
};