function countdown(num) {
    while (num > -1) {
        console.log(num);
        num -= 1;
    }
}

function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards
}