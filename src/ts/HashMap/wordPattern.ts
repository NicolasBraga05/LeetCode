function wordPattern(pattern: string, s: string): boolean {
    const newS = s.split(' ')
    if(pattern.length !== newS.length) return false;

    const map1 = new Map<string, string>();
    const map2 = new Map<string, string>();

    for(let i: number = 0; i < pattern.length; i++) {
        const char = pattern[i]
        const word = newS[i]

        if(map1.has(char)){
            if(map1.get(char) !== word) return false
        }
        map1.set(char, word)

        if(map2.has(word)) {
            if(map2.get(word) !== char) return false
        }
        map2.set(word, char)
        
    }
    return true
};