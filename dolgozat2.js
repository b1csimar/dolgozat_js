// Stone Paper Scissors Winner
function stonePaperScissorsWinner(player1, player2) {
    if (player1 < 0 || player1 > 2 || player2 < 0 || player2 > 2) {
        return 'Invalid input';
    }

    if (player1 === player2) {
        return 'The game is a tie.';
    } else if (
        (player1 === 0 && player2 === 1) ||
        (player1 === 1 && player2 === 2) ||
        (player1 === 2 && player2 === 0)   
    ) {
        return 'The first player wins.';
    } else {
        return 'The second player wins.';
    }
}

// Leap Year
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }
    return false;
}

// Divisors
function divisors(number) {
    const result = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            result.push(i);
        }
    }
    return result;
}

// FizzBuzz
function fizzbuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'fizzbuzz';
    } else if (number % 3 === 0) {
        return 'fizz';
    } else if (number % 5 === 0) {
        return 'buzz';
    }
    return number;
}

console.log(stonePaperScissorsWinner(0, 1)); 
console.log(isLeapYear(2024)); 
console.log(divisors(12)); 
console.log(fizzbuzz(15)); 
