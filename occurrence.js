function count_occur(str) {
    for (let i = 0; i < str.length; i++) {
        let count = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[i] === str[j] && i > j) {
                break;
            }
            if (str[i] == str[j]) {
                count++;
            }
        }
        if (count > 0) {
            console.log(`${str[i]} occurs ${count} times`);
        }
    }
}


function min_coin(deno, cash) {
    let ans = []
    for (let i = deno.length - 1; i >= 0; i--) {
        while (cash >= deno[i]) {
            cash -= deno[i]
            ans.push(deno[i])
        }
    }
    for (let i = 0; i < ans.length; i++) {
        console.log(" " + ans[i])
    }

}



const inputString = "geeksforgeeks";
const targetChar = 'g';

function countOccurrences(inputString, targetChar) {
    let count = 0;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === targetChar) {
            count++;
        }
    }
    return count;
}

const occurrences = countOccurrences(inputString, targetChar);
console.log(`The character "${targetChar}" occurs ${occurrences} times in the string.`);

// min_coin([1, 2, 5, 6, 10, 20, 50, 100, 500], 12)
let test_str = "geeksforgeeks";
count_occur(test_str);