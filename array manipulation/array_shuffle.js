let arr = [1, 2, 3, 4, 5];

// Fisher-Yates shuffle algorithm
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

console.log(shuffle(arr)); // Random output, e.g., [3, 5, 1, 4, 2]