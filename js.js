
let array = ["Mango", "Poly", "Kiwi", "Ajax"];
let result = "";

for (let i = 0; i < array.length; i++) {
    result += array[i];
    if (i < array.length - 1) {
        result += ", "; 
    }
}

console.log("Результат через for:", result); 


let array2 = ["Mango", "Poly", "Kiwi", "Ajax"];
let result2 = array2.join(", ");
console.log("Результат через join():", result2); 



let cards = [
    { id: 1, title: "Card 1", description: "Description 1" },
    { id: 2, title: "Card 2", description: "Description 2" },
    { id: 3, title: "Card 3", description: "Description 3" },
    { id: 4, title: "Card 4", description: "Description 4" },
    { id: 5, title: "Card 5", description: "Description 5" }
];

function removeCard(cardId) {
    const index = cards.findIndex(card => card.id === cardId);
    if (index !== -1) {
        cards.splice(index, 1); 
    }
}

removeCard(3);
console.log("Після видалення:", cards);

function addCard(title, description) {
    const newCard = {
        id: cards.length ? cards[cards.length - 1].id + 1 : 1,
        title: title,
        description: description
    };
    cards.push(newCard);
}

addCard("Card 6", "Description 6");
console.log("Після додавання:", cards);

function updateCard(cardId, newTitle, newDescription) {
    const card = cards.find(card => card.id === cardId);
    if (card) {
        card.title = newTitle;
        card.description = newDescription;
    }
}

updateCard(1, "Updated Card 4", "Updated Description 4");
console.log("Після оновлення:", cards);
