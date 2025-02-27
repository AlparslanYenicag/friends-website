function collatzSequence (n){
    let sequence = [n];

    while(n !==1)
    {
        if(n % 2 ===0)
        {
            n =n / 2;
        }
        else
        {
            n = 3*n+1;
        }
        sequence.push(n);
    }

    return sequence;
}

function longestCollatz(limit)
{
    let longestSequence = [];
    let startingNUmber = 0;

    for (let i =1; i<= limit; i++)
    {
        let sequence = collatzSequence(i)
        if (sequence.length > longestSequence.length)
        {
            longestSequence = sequence;
            startingNumber = i;
        }
    }
    return { startingNumber, longestSequence };
}

let userLimit = Number(prompt("Bir üst sınır girin:"));
let result = longestCollatz(userLimit);

console.log("En uzun Collatz dizisini başlatan sayı:", result.startingNumber);
console.log("Dizi:", result.longestSequence);