var possibleStringCount = function(word) {
    let total = 1;
    let i = 0;
    while (i < word.length) {
        let char = word[i];
        let count = 0;
        while (i < word.length && word[i] === char) {
            count++;
            i++;
        }
        total *= count;
    }
    return total;
};
console.log(possibleStringCount("abc")); 

