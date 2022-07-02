//Количество картиночекб
const IMAGES = 7; //<--- Менять когда что то добавляешь

//Разрешение картиночекб
const EXTENSION = ".png"; //<--- Менять когда нужно

let body = document.body; //<--- Выкапываем тело

function funny_random(num) {
    return Math.floor(Math.random() * num + 1).toString(); // <--- Фанни функция на рандом (+ 1 ибо нумерация начинается с 1.jpg)
}

body.style["background"] = ("background", "url(" + funny_random(IMAGES) + EXTENSION + ")"); // <--- !!!!!!!ТУТ НИЧЕГО НЕ МЕНЯТЬ!!!!!!
