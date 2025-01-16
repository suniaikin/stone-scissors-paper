function playGame(userChoice) {
    const choices = ["Камень", "Ножницы", "Бумага"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Задаю переменную для результата сравнения выбора юзера и компьютера
    let result;

    // Прописываю логику сравнения выбора
    if (userChoice === computerChoice) {
        result = "Ничья, играем дальше!";
    } else if (
        (userChoice === "Камень" && computerChoice === "Ножницы") ||
        (userChoice === "Ножницы" && computerChoice === "Бумага") ||
        (userChoice === "Бумага" && computerChoice === "Камень")
    ) {
        result = "Вы выиграли!";
    } else {
        result = "Компьютер выиграл!";
    }

    // Демонстрирую динамику выбора пользователя
    document.getElementById("user-choice").innerHTML = `
        <p>Вы:</p>
        <img src="${getImage(userChoice)}" alt="${userChoice}">
    `;

    // Демонстрирую динамику выбора компьютера
    document.getElementById("computer-choice").innerHTML = `
        <p>Компьютер:</p>
        <img src="${getImage(computerChoice)}" alt="${computerChoice}">
    `;

    // Демонстрирую динамику результата игры
    document.getElementById("game-result").innerText = result;


    // Подключаю картинки
    function getImage(choice) {
        if (choice === "Камень") {
            return "./images/rock.jpg";
        } else if (choice === "Ножницы") {
            return "./images/scissors.jpg";
        } else if (choice === "Бумага") {
            return "./images/paper.jpg";
        }
    }

}
