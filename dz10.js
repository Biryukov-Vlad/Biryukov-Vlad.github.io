

/* что бы вернуть объект стрелочной функцией без фигурных скобок, нужно обернуть объект в ку=руглые скобки
(()=> log())
*/

// два объекта
// магазин с продуктами и магазин с видеоиграми 
// магазин имеет поле store [все продукты/ игры ]  который представляет из себя массив 
// функция поиска которая работая ищет по подстроке 

const containerGames = document.getElementsByClassName("steam__container-games_js")[0];
















function getName() {
    return this.name
}

function searchName(searchName) {
    let check
    for (let i = 0; i < this.store.length; i++) {
        check = this.store[i].name.indexOf(searchName)
        if (check != Number(-1)) {
            console.log("найден товар под номером", i + 1, "ценой", this.store[i].price);
        }
    }
}

var steam = {
    name: "steam",
    store: [
        { name: "первая игра", price: 11 },
        { name: "вторая игра", price: 22 },
        { name: "третья игра", price: 33 },
    ],
    age: 22,
    get: getName,
    search: searchName
}




for (let i = 0; i < steam.store.length; i++) {
    // создаём div
    let game = document.createElement("div");
    let nameGame = document.createElement("div");
    let priceGame = document.createElement("div");
    let deleteGame = document.createElement("div");
    let close = document.createElement("div")
    // добавляем им class 
    game.classList.add("steam__game", "steam__game_js")
    nameGame.classList.add("steam__name-game", "steam__name-game_js")
    priceGame.classList.add("steam__price-game", "steam__price-game_js")
    deleteGame.classList.add("steam__delete-game", "steam__delete-game_js")
    close.classList.add("steam__close", "steam__close_js", "close")
    // добавляем текст 
    nameGame.innerText = `${steam.store[i].name}`;
    priceGame.innerText = `${steam.store[i].price}`;

    // собираем
    containerGames.insertAdjacentElement("beforeend", game);
    game.insertAdjacentElement("beforeend", nameGame)
    game.insertAdjacentElement("beforeend", priceGame)
    game.insertAdjacentElement("beforeend", deleteGame)
    deleteGame.insertAdjacentElement("beforeend", close)
}


//containerGames















function addGame(name, price) {
    // создаём div
    let game = document.createElement("div");
    let nameGame = document.createElement("div");
    let priceGame = document.createElement("div");
    let deleteGame = document.createElement("div");
    let close = document.createElement("div")
    // добавляем им class 
    game.classList.add("steam__game", "steam__game_js")
    nameGame.classList.add("steam__name-game", "steam__name-game_js")
    priceGame.classList.add("steam__price-game", "steam__price-game_js")
    deleteGame.classList.add("steam__delete-game", "steam__delete-game_js")
    close.classList.add("steam__close", "steam__close_js", "close")
    // добавляем текст
    nameGame.innerText = `${steam.store[i]}`
    // собираем
    containerGames.insertAdjacentElement("beforeend", game);
    game.insertAdjacentElement("beforeend", nameGame)
    game.insertAdjacentElement("beforeend", priceGame)
    game.insertAdjacentElement("beforeend", deleteGame)
    deleteGame.insertAdjacentElement("beforeend", close)
}