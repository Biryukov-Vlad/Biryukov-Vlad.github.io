// var dateSlider = document.getElementsByClassName("slider__date_js")[0]
// var date = new Date()
// var input_Y = document.getElementsByClassName("slider__input_js")[0]
// var input_M = document.getElementsByClassName("slider__input_js")[1]
// var input_D = document.getElementsByClassName("slider__input_js")[2]
// var button = document.getElementsByClassName("slider__button_js")[0]
// var result = document.getElementsByClassName("slider__result_js")[0]
// var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// var body = document.body;

// body.addEventListener("keydown", (e) => {
//     console.log(e.keyCode);

// })
// console.log(date);
// dateSlider.innerHTML = date;
// button.addEventListener("click", function name() {
//     dateSlider.innerHTML = new Date(input_Y.value, input_M.value, input_D.value);
//     var ret = new Date()
//     result.innerHTML = days[ret.getDay()]
// })


 
// // VAR
// var quantity,
//     position,
//     message,
//     counter,
//     clone,
//     arr,
//     i,
//     n;



// /////////////////////////////////////
// /********* первое задание **********/

// var user = {};

// function infoUser() {
//     message = prompt("введите Ваше Имя", "Ваше имя");
//     if (checkString(message)) {
//         user.name = message;
//         message = prompt(user.name + ", введите ваш возраст", "21");
//         if (checkNumber(message)) {
//             user.age = Number(message);
//             console.log(user);
//         }
//         else alert("возраст указан не в том формате "), infoUser();

//     }
//     else infoUser();
// }

// // infoUser();


// ////////////////////////////////////
// /********* второе задание**********/
// /************вариант №1************/

// var list = [];
// quantity = list.length;

// function notebook() {
//     for (i = 0; i < 5; i++) {
//         message = prompt("что записать в список под номером " + (Number(i) + Number(1)));
//         if (checkInput(message)) {
//             list.push(message);
//         }
//         else if (message === "none") {
//             i = 5;
//         }
//         else {
//             alert("если вы не хотите ничего записывать, введите none");
//             i--;
//         }
//     }
//     console.log(list);
//     console.log(list.reverse());
// }

// // notebook();



// ////////////////////////////////////
// /********* второе задание**********/
// /************вариант №2************/


// var list_2 = [];
// var message;
// quantity = list_2.length;

// function notebook2() {
//     i = 0;
//     while (true) {
//         message = prompt("что записать в список под номером " + (Number(i) + Number(1)))
//         if (checkInput(message)) {
//             list_2.push(message);
//             // quantity = list_2.length;
//             i++;
//             if (i == 5) {
//                 console.log(list_2);
//                 console.log(list_2.reverse());
//                 break;
//             }
//         }
//         else if (message == "none") {
//             break;
//         }

//         else if (!checkInput(message)) {
//             alert("если вы не хотите ничего записывать, введите none");
//         }
//     }
// }

// // notebook2();


// /////////////////////////////////////////////////////////////////////////////
// /*принимает на вход текст с ошибкой после точки, выводит исправленый текст */




// function correctionArray() {
//     position = 0;
//     arr = message;
//     // поделил по точке и преобразовал в массив 
//     arr = arr.split(". ");
//     for (i = 0; i < arr.length; i++) {
//         //поделил предложение по символам 
//         arr[i] = arr[i].split("");
//         //первый символ в предложении начинается с заглавной буквы
//         if (arr[i][position] != " ") {
//             arr[i][position] = arr[i][position].toLocaleUpperCase();
//         }
//         //если пустая позиция
//         else if (arr[i][position] == " ") {
//             while (true) {
//                 if (arr[i][position] == " ") {
//                     position++;
//                 }
//                 else if (position != " ") {
//                     arr[i][position] = arr[i][position].toLocaleUpperCase();
//                     break;
//                 }
//             }
//         }
//         //преобразую в строку 
//         arr[i] = arr[i].join("");
//     }
//     //склеил предложения в одну строку
//     message = arr.join(". ");
// }

// function correctionText() {
//     message = prompt("Введите предложение которое нужно исправить");
//     //обработка текста
//     correctionArray();
//     //выводит исправленый текст
//     alert(message);
// }
// // correctionText()



// /////////////////////
// /*  третье задание */

// position = 0;
// // функция, находит позицию слова - исключения 
// function stopWord(array, text) {
//     position = array.indexOf(text);
// }
// function textCuckoo() {
//     message = prompt("Введите текст, на слове  'Кукушка ' текст обрежется ");
//     arr = message;
//     stopWord(arr, "Кукушка");
//     alert(arr.slice(0, position));

// }
// // textCuckoo()



// var block,
//     message;

// // *** первое задание ***
// createElements("div", "block_js", 1);

// block = document.getElementsByClassName("block_js")[0];
// block.innerHTML = "cat-metal";



// // *** второе задание ***
// function showClass() {
//     // message = prompt("Введите название класса"); !!!
//     if (checkClass(message)) {
//         console.log("содержимое класса " + '"' + message + '": ' + document.getElementsByClassName(message)[0].innerHTML);
//     }
//     else if (!checkClass(message)) console.log("класс " + message + " не найден");
// };

// showClass();

// // проверяет наличие класса
// function checkClass(nameClass) {
//     if (document.getElementsByClassName(nameClass)[0]) return true;
//     else return false;
// }

// //*** третье задание ***
// block.classList.add("block_test", "block_black");



// createElements("div", "wrap-square", 1);
// var wrap = document.getElementsByClassName("wrap-square")[0];
// for (var i = 0; i < 4; i++) {
//     wrap.innerHTML += '<div class="square_js"></div>';
// }
// for (var i = 0; i < document.getElementsByClassName("square_js").length; i++) {
//     document.getElementsByClassName("square_js")[i].innerHTML = i + 1;
//     document.getElementsByClassName("square_js")[i].classList.add("square-default_js", "square_" + (i + 1) + "_js");
// }

// var square_1 = document.getElementsByClassName("square_js")[0],
//     square_2 = document.getElementsByClassName("square_js")[1],
//     square_3 = document.getElementsByClassName("square_js")[2],
//     square_4 = document.getElementsByClassName("square_js")[3];

// var position = ["",
//     "square-top-left_js",
//     "square-top-right_js",
//     "square-bottom-right_js",
//     "square-bottom-left_js"
// ]

// function animationSquare() {
//     setTimeout(function name() {
//         square_1.classList.toggle(position[2]);
//         square_2.classList.toggle(position[3]);
//         square_3.classList.toggle(position[4]);
//         square_4.classList.toggle(position[1]);
//     }, 0)
//     setTimeout(function name() {
//         square_1.classList.toggle(position[2]);
//         square_1.classList.toggle(position[3]);
//         square_2.classList.toggle(position[3]);
//         square_2.classList.toggle(position[4]);
//         square_3.classList.toggle(position[4]);
//         square_3.classList.toggle(position[1]);
//         square_4.classList.toggle(position[1]);
//         square_4.classList.toggle(position[2]);
//     }, 2000)
//     setTimeout(function name() {
//         square_1.classList.toggle(position[3]);
//         square_1.classList.toggle(position[4]);
//         square_2.classList.toggle(position[4]);
//         square_2.classList.toggle(position[1]);
//         square_3.classList.toggle(position[1]);
//         square_3.classList.toggle(position[2]);
//         square_4.classList.toggle(position[2]);
//         square_4.classList.toggle(position[3]);
//     }, 4000)
//     setTimeout(function name() {
//         square_1.classList.toggle(position[4]);
//         square_1.classList.toggle(position[1]);
//         square_2.classList.toggle(position[2]);
//         square_3.classList.toggle(position[2]);
//         square_3.classList.toggle(position[3]);
//         square_4.classList.toggle(position[3]);
//         square_4.classList.toggle(position[4]);
//     }, 6000)
// }
// animationSquare()



// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////

// var button = document.getElementsByClassName("button_start_js")[0],
//     countdown = document.getElementsByClassName("countdown_js")[0],
//     mechanism = document.getElementsByClassName("mechanism_js")[0],
//     shell = document.getElementsByClassName("shell")[0];


// button.onclick = function () {
//     for (var i = 0; i < Number(countdown.innerHTML); i++) {
//         setTimeout(function () {
//             countdown.innerHTML = countdown.innerHTML - Number(1);
//             if (countdown.innerHTML == 0) {
//                 countdown.innerHTML = "BOOM!"
//             }
//         }, (i + 1) * 1000)
//     }
//     setTimeout(function () {
//         mechanism.classList.add("mechanism_fire_js");
//     }, countdown.innerHTML * 1000)
//     setTimeout(function () {
//         shell.classList.add("shell_fire_js");
//     }, countdown.innerHTML * 1000);
// }




// dz6Tasc3()
function dz6Tasc3() {
    var body = document.body,
        contextMenu = document.getElementsByClassName("context-menu_js")[0],
        contextMenuItem_1 = document.getElementsByClassName("context-menu__item_js")[0],
        contextMenuItem_2 = document.getElementsByClassName("context-menu__item_js")[1],
        contextMenuItem_3 = document.getElementsByClassName("context-menu__item_js")[2],
        contextMenuItem_4 = document.getElementsByClassName("context-menu__item_js")[3],
        contextMenuItem_5 = document.getElementsByClassName("context-menu__item_js")[4],
        squareBlack,
        triangle,

        contextMenuText = [
            "Добавить/удалить квадрат",
            "Анимация квадрата",
            "Добавить/удалить треугольник",
            "Анимация треугольника",
            "Отчистить"
        ];

    contextMenuItem_1.innerHTML = contextMenuText[0];
    contextMenuItem_2.innerHTML = contextMenuText[1];
    contextMenuItem_3.innerHTML = contextMenuText[2];
    contextMenuItem_4.innerHTML = contextMenuText[3];
    contextMenuItem_5.innerHTML = contextMenuText[4];

    // показать меню
    body.oncontextmenu = function openContextMenu(e) {
        contextMenu.style.display = "block";
        contextMenu.style.top = e.clientY + "px";
        contextMenu.style.left = e.clientX + "px";
        positionContextMenuY = e.clientY + "px";
        positionContextMenuX = e.clientX + "px";
        return positionContextMenuY, positionContextMenuX, false;
    }

    body.addEventListener("click", (e) => {
        if (e.target !=contextMenu) {
            contextMenu.style.display = "none";
        }
    })
    // ESC
    body.addEventListener("keydown", function closeContextMenuKey(event) {
        if (event.keyCode == 27) {
            contextMenu.style.display = "none";
            clearField();
        }
    });

    // №1 добавляет/удаляет квадрат  
    contextMenuItem_1.addEventListener("click", function functionSquare() {
        body.removeEventListener("click", clickAddRemoveTriangle);
        body.removeEventListener("mousemove", leftRightTriangle);
        body.addEventListener("click", clickAddRemoveSquare);
    })

    // №2 bounce анимация квадрата
    contextMenuItem_2.addEventListener("click", function bounce() {
        body.removeEventListener("click", clickAddRemoveSquare);
        body.removeEventListener("click", clickAddRemoveTriangle);

        if (squareBlack && squareBlack.classList == "square-black_js") {
            animationTopBottomSquare(squareBlack, 3);
        }
    })

    // №3 Добовить/удалить треугольник
    contextMenuItem_3.addEventListener("click", function functionTriangle() {
        body.removeEventListener("click", clickAddRemoveSquare);
        body.removeEventListener("mousemove", leftRightTriangle);
        body.addEventListener("click", clickAddRemoveTriangle);
    })

    // №4 Активация анимации треугольника
    contextMenuItem_4.addEventListener("click", function animationTriangle() {
        body.removeEventListener("click", clickAddRemoveSquare);
        body.removeEventListener("click", clickAddRemoveTriangle);
        if (triangle && triangle.classList == "triangle_js") {
            body.addEventListener("mousemove", leftRightTriangle);
        }
    })

    // № 5 Отчистка
    contextMenuItem_5.addEventListener("click", clearField);




    // ADD Квадрат
    function clickAddRemoveSquare(e) {

        if (!squareBlack) {
            createElements("div", "square-black_js", 1);
            squareBlack = document.getElementsByClassName("square-black_js")[0];
            squareBlack.style.top = positionContextMenuY;
            squareBlack.style.left = positionContextMenuX;
        }
        else if (squareBlack) {
            squareBlack.classList.toggle("square-black_hidden_js");
            squareBlack.style.top = e.clientY + "px";
            squareBlack.style.left = e.clientX + "px";
        }
    }
    squareBlack = document.getElementsByClassName("square-black_js")[0];



    // ADD треугольник
    function clickAddRemoveTriangle(e) {
        if (!triangle) {
            createElements("div", "triangle_js", 1);
            triangle = document.getElementsByClassName("triangle_js")[0];
            triangle.style.top = positionContextMenuY;
            triangle.style.left = positionContextMenuX;
        }
        else if (triangle) {
            triangle.classList.toggle("triangle_hidden_js");
            triangle.style.left = e.clientX + "px";
            triangle.style.top = e.clientY + "px";
        }
    }

    // Анимация квадрата, аргументы (предмет,сколько раз повторить цикл)
    function animationTopBottomSquare(thing, quantity) {
        var a = -1500;
        var b = -1000;
        for (var i = 0; i < quantity; i++) {
            a += 1500;
            b += 1500;
            setTimeout(function () {
                thing.style.transition = "0.5s";
                thing.style.transform = "translate(-50%,-100%)";
            }, a)
            setTimeout(function () {
                thing.style.transition = "1s";
                thing.style.transform = "translate(-50%,-50% )";
            }, b);
        }
    }
    // Анимация треугольника 
    function leftRightTriangle(e) {
        triangle.style.left = e.clientX + "px";
    }

    // почистить поле
    function clearField() {
        // убрать квадрат
        if (squareBlack) {
            body.removeEventListener("click", clickAddRemoveSquare);
            squareBlack.classList = "square-black_js square-black_hidden_js";
        }
        // убрать треугольник
        if (triangle) {
            body.removeEventListener("click", clickAddRemoveTriangle);
            triangle.classList = "triangle_js triangle_hidden_js";
        }
    }
}





















// dz7Task1()
// dz7Task2()
// dz7Task3()



function dz7Task1() {
    var inputlist = document.getElementsByClassName("list__input_js")[0],
        listCard = document.getElementsByClassName("list__card_js")[0],
        buttonList = document.getElementsByClassName("list__button_js")[0],
        body = document.body;


    buttonList.addEventListener("click", addNewElementList);
    body.addEventListener("keydown", checkKay);

    function checkKay(e) {
        if (e.keyCode == 13) {
            addNewElementList();
        }
    }

    function addNewElementList() {
        if (!checkInput(inputlist.value)) {
            setTimeout(() => {
                inputlist.classList.toggle("list__input_invalid_js");
            }, 0)
            setTimeout(() => {
                inputlist.classList.toggle("list__input_invalid_js");
            }, 500)

        }
        if (checkInput(inputlist.value) && buttonList.innerHTML != "сохранить изменения") {
            let newListItem = document.createElement("div");
            newListItem.classList.add("list__item");
            listCard.insertAdjacentElement("beforeend", newListItem);
            newListItem.innerHTML = inputlist.value;
            inputlist.value = "";

            newListItem.addEventListener("dblclick", () => {
                inputlist.value = "";
                newListItem.style.transform = "translateX(100%)"
                setTimeout(function () {
                    newListItem.remove();
                    buttonList.innerHTML = "новая запись";
                    inputlist.value = "";
                }, 200)
            })
            // внести изменения
            newListItem.addEventListener("click", function changeListItem() {
                if (inputlist.value != newListItem.innerHTML) {
                    setTimeout(function () {
                        inputlist.value = newListItem.innerHTML;
                        buttonList.innerHTML = "сохранить изменения";
                    }, 50)

                    // сохраняет изменения
                    buttonList.addEventListener("click", saveСhanges)
                    body.onkeydown = function keySaveСhanges(key) {
                        if (key.keyCode == 13) {
                            saveСhanges();
                        }
                    }
                    function saveСhanges() {
                        var clone = newListItem.innerHTML;
                        if (inputlist.value != "") clone = inputlist.value;
                        inputlist.value = "";
                        buttonList.innerHTML = "новая запись";
                        buttonList.removeEventListener("click", saveСhanges);
                        return newListItem.innerHTML = clone;
                    }
                }
            })
        }
    }
}

 

function dz7Task2() {
    var body = document.body,
        inputTemper = document.getElementsByClassName("temperature__input_js")[0],
        button = document.getElementsByClassName("temperature__button_js")[0],
        temperSection = document.getElementsByClassName("temperature_js")[0],
        temperResult = document.getElementsByClassName("temperature__resilt_js")[0],
        idIntervalTemper,
        result,
        bgTemper = ["rgb(5, 106, 189)", "rgb(166, 190, 29)", "rgb(255, 38, 0)", "rgb(197, 180, 25)"],
        colorTemper = ["rgb(61, 36, 172)", "#fff", "rgb(150, 66, 17)"];

    function updateInput() {
        // знаю что не правильно, тут я просто практиковался с setInterval
        idIntervalTemper = setInterval(function () {
            if (inputTemper.value != "" && inputTemper.value != false || inputTemper.value === "0") {
                result = Number(inputTemper.value) * 1.8 + 32;

                if (inputTemper.value < -270 || inputTemper.value > 200) {
                    temperResult.innerHTML = "Результат: Такая температура не существует";
                }

                else if (checkInput(result) && checkNumber(result)) {
                    inputTemper.style.color = "black";
                    temperResult.innerHTML = `Результат: ${Number(inputTemper.value)}C&deg; = ${result}F&deg;`;
                    if (inputTemper.value < 10) {
                        temperSection.style.background = bgTemper[0];
                        temperSection.style.color = colorTemper[1];
                    }
                    else if (inputTemper.value < 25) {
                        temperSection.style.background = bgTemper[1];
                    }
                    else if (Number(inputTemper.value) > 10) {
                        temperSection.style.background = bgTemper[2];
                    }
                }
                else {
                    inputTemper.style.color = "red";
                    temperResult.innerHTML = "Результат:";
                }
            }
            else if (inputTemper.value == "") {
                inputTemper.style.color = "black";
                temperResult.innerHTML = "Результат:";
            }

        }, 50)
        return idIntervalTemper;
    }

    inputTemper.addEventListener("click", updateInput);

    window.addEventListener("click", function (e) {
        if (e.target != inputTemper/* e.target == body || e.target == temperBlock */) {
            inputTemper.value = "";
            inputTemper.style.color = "black";
            temperResult.innerHTML = "Результат:";
            temperSection.style.background = bgTemper[3];
            temperSection.style.color = colorTemper[2];
            clearTimeout(idIntervalTemper);
        }
    })
}




function dz7Task3() {
    var square = document.getElementsByClassName("square_js")[0],
        boxSquare = document.getElementsByClassName("box-square_js")[0],
        mechanism = document.getElementsByClassName("mechanism_js")[0],
        y = 0,
        x = 0,
        c = -136;
    var idSquareAnimate = setInterval(function () {

        if (x >= 0 && x < 400 && y == 0) {
            square.style.left = x++;
        }
        else if (x == 400 && y < 400) {
            square.style.top = y++;
        }
        else if (x <= 400 && x != 0 && y == 400) {
            square.style.left = x--;
        }
        else if (y <= 400 && x == 0) {
            square.style.top = y--;
        }
    }, 2)
    setTimeout(() => setInterval(function () {
        mechanism.style.transform = `rotate(${c++}deg)`;
        if (mechanism.style.transform == "rotate(350deg)") {
            square.innerHTML = "NOOO!!!";
            square.style.transition = "1s";
            square.style.background = "red";
            clearInterval(idSquareAnimate);
        }
    }, 18), 750)
}













































var body = document.body;

slider();
lamp();
date()
parallax()

function slider() {
   var sliderLine = document.getElementsByClassName("slider__line_js")[0],
      sliderСontrolLeft = document.getElementsByClassName("slider__control_js")[0],
      sliderСontrolRight = document.getElementsByClassName("slider__control_js")[1],
      sliderBullet_1 = document.getElementsByClassName("slider__bullet_js")[0],
      sliderBullet_2 = document.getElementsByClassName("slider__bullet_js")[1],
      sliderBullet_3 = document.getElementsByClassName("slider__bullet_js")[2],

      // вспомогательные переменные
      position = 0,
      coordinates = 0,
      valueWidth = 33.333333333333336,
      maxValueWidth = -66.6666666666666,

      color = [
         "#9c9c9c", // Gray
         "#3590cc", // Blue
      ];

   // стили по дэфолту
   sliderBullet_1.style.background = color[1];
   sliderСontrolLeft.style.opacity = "0.5";
   sliderСontrolLeft.style.cursor = "auto";

   sliderСontrolLeft.addEventListener("click", slideBack);
   sliderСontrolRight.addEventListener("click", slideForward);
   sliderLine.addEventListener("click", slideForward)

   body.addEventListener("keydown", (e) => {
      if (e.keyCode == 39) {
         slideForward();
      }
      else if (e.keyCode == 37) {
         slideBack();
      }
   })

   // назад
   function slideBack() {
      if (coordinates < 0) {
         sliderLine.style.transform = `translateX(${coordinates + valueWidth}%)`;
         coordinates = coordinates + valueWidth;
         colorBullet();
         if (sliderLine.style.transform == `translateX(0%)`) {
            sliderСontrolLeft.style.opacity = "0.5";
            sliderСontrolLeft.style.cursor = "auto";
         }
         return coordinates, position;
      }
   }
   // вперёд 
   function slideForward() {
      if (coordinates >= maxValueWidth) {
         sliderLine.style.transform = `translateX(${coordinates - valueWidth}%)`;
         coordinates = coordinates - valueWidth;
         colorBullet();
         sliderСontrolLeft.style.opacity = "1";
         sliderСontrolLeft.style.cursor = "pointer";
         return coordinates;
      }
      else {
         sliderLine.style.transform = `translateX(0%)`;
         coordinates = 0;
         sliderСontrolLeft.style.opacity = "0.5";
         sliderСontrolLeft.style.cursor = "auto";
         colorBullet();
         return coordinates;
      }
   }
   // цвет були
   function colorBullet() {
      if (coordinates == 0) {
         sliderBullet_1.style.background = color[1];
         sliderBullet_2.style.background = color[0];
         sliderBullet_3.style.background = color[0];
      }
      else if (coordinates == -33.333333333333336) {
         sliderBullet_1.style.background = color[0];
         sliderBullet_2.style.background = color[1];
         sliderBullet_3.style.background = color[0];
      }
      else if (coordinates == -66.66666666666667) {
         sliderBullet_1.style.background = color[0];
         sliderBullet_2.style.background = color[0];
         sliderBullet_3.style.background = color[1];
      }
   }
}

//  лампочки   

function lamp() {
   var lampSection = document.getElementsByClassName("lamp_js")[0],
      lampBlack = document.getElementsByClassName("lamp__img-lamp_black_js")[0],
      lampYellow = document.getElementsByClassName("lamp__img-lamp_yellow_js")[0],
      lampBlue = document.getElementsByClassName("lamp__img-lamp_blue_js")[0],
      lampTitle = document.getElementsByClassName("lamp__title_js")[0],

      color = [
         "rgba(0, 0, 0, 0.5)",        //(Black)  
         "rgba(239, 206, 74, 0.5)",   //(Yellow)  
         "rgba(66, 141, 255, 0.5)",   //(Blue)  
         "rgb(255, 255, 255)"         //White
      ],
      filterOpacity = [
         "opacity(0.5)",
         "opacity(1)"
      ],
      textTitle = [
         "наведите на лампочку",
         "навели на чёрную",
         "навели на жёлтую",
         "навели на синюю"
      ];

   // стили по дэфолту
   lampTitle.innerHTML = textTitle[0];
   lampSection.style.background = color[3];
   lampBlack.style.filter = filterOpacity[0];
   lampYellow.style.filter = filterOpacity[0];
   lampBlue.style.filter = filterOpacity[0];

   //Чёрная
   lampBlack.addEventListener("mouseover", function () {
      lampSection.style.background = color[0];
      lampBlack.style.filter = filterOpacity[1];
      lampTitle.innerHTML = textTitle[1];
   })
   lampBlack.addEventListener("mouseout", function () {
      lampSection.style.background = color[3];
      lampBlack.style.filter = filterOpacity[0];
      lampTitle.innerHTML = textTitle[0];

   })

   //Желтая
   lampYellow.addEventListener("mouseover", function () {
      lampSection.style.background = color[1];
      lampYellow.style.filter = filterOpacity[1];
      lampTitle.innerHTML = textTitle[2];
   })
   lampYellow.addEventListener("mouseout", function () {
      lampSection.style.background = color[3];
      lampYellow.style.filter = filterOpacity[0];
      lampTitle.innerHTML = textTitle[0];
   })

   //Синяя
   lampBlue.addEventListener("mouseover", function () {
      lampSection.style.background = color[2];
      lampBlue.style.filter = filterOpacity[1];
      lampTitle.innerHTML = textTitle[3];
   })
   lampBlue.addEventListener("mouseout", function () {
      lampSection.style.background = color[3];
      lampBlue.style.filter = filterOpacity[0];
      lampTitle.innerHTML = textTitle[0];
   })
}






function date() {
   var dateResult = document.getElementsByClassName("date__result_js")[0],
      dateInput = document.getElementsByClassName("date__input_js")[0],
      idInterval;


   dateInput.addEventListener("click", function clickInput() {
      var cloneInputValue = "";
      dateInput.value = "2020.10.10";

      dateInput.addEventListener("keydown", function watchInput() {
         //валидация инпута
         setTimeout(function validInput() {
            if (dateInput.value == " " || dateInput.value == "-") {
               dateInput.value = cloneInputValue;
            }
            else if (dateInput.value != " " && dateInput.value != "-") {
               cloneInputValue = dateInput.value;
            }
         }, 100)
      })

      body.onkeydown = function enterCompareDate(e) {
         if (e.keyCode == 13) {
            compareDate();
         }
      }
      function compareDate() {
         //если есть запущенный таймер - отменить и запустить новый с новыми данными
         if (idInterval) {
            clearInterval(idInterval);
         }
         // обработка полученных данных
         var arrClone = dateInput.value;
         arrClone = arrClone.split(".");
         var arrDate = arrClone;
         idInterval = setInterval(dateTimer, 1000);
         dateTimer();

         function dateTimer() {
            var dateToday = new Date();
            var number = 60;
            var dateCurrent = new Date(`${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`);
            var clone = Math.ceil((dateCurrent - dateToday) / 1000);
            var days = Math.floor(clone / (number * number * 24));
            clone = clone % (number * number * 24);
            var hours = Math.floor(clone / (number * number));
            clone = clone % (number * number);
            var minutes = Math.floor(clone / number);
            clone = clone % number;
            var second = clone;
            //выводим результат если время не прошло
            if (dateCurrent > dateToday) {
               dateResult.innerHTML =
                  days + " дней " +
                  hours + " часов " +
                  minutes + " минут " +
                  second + " секунд ";
               return idInterval;
            }
            //время прошло
            else if (dateCurrent < dateToday) {
               dateResult.innerHTML = "Время прошло как и 2007";
               return idInterval;
            }
            else {
               //поругаться немного)
               dateResult.innerHTML = "";
               var a = 0;
               for (let i = 0; i < 6; i++) {
                  a = a + 500;
                  setTimeout(() => {
                     dateInput.classList.toggle("date__input_invalid_js");
                     return a;
                  }, a)
               }
               clearInterval(idInterval);
            }
         }
      }
      dateInput.removeEventListener("click", clickInput);
   })
}



//////////////////////////////////////
//////////////////////////////////////
///////////////PARALLAX///////////////
//////////////////////////////////////
//////////////////////////////////////



function parallax() {

   var imgParallax = document.getElementsByClassName("parallax__img_js")[0],
      position = 0;

   body.addEventListener("mousewheel", function (e) {
      if (e.wheelDelta == -120) {
         if (position != -60) {
            position = position - 10
            imgParallax.style.transform = `translateY(${position}px)`
            return position
         }
      }
      else if (e.wheelDelta == 120) {
         if (position != 80) {
            position = position + 10
            imgParallax.style.transform = `translateY(${position}px)`
            return position
         }
      }
   })
}
 
/*************************** Инструменты *****************************/
/*************************** Функциии  ******************************/
//проверка на Number
function checkNumber(check) {
    if (String(Number(check)) != "NaN" && check !== "") return true;
    else return false;
}
//проверка на String
function checkString(check) {
    if (String(Number(check)) == "NaN" && check !== "") return true;
    else return false;
}
// проверка на ввод   
function checkInput(check) {
    if (check != "" && check != " " && check != "none" && check != "null" && check != null) return true;
    else return false;
}
// добавляет n количество элементов с class
function createElements(element, name, quantity) {
    var createDiv;
    for (var i = 0; i < quantity; i++) {
        createDiv = document.createElement(element);
        createDiv.classList = name;
        document.body.appendChild(createDiv);
    }
}
// //VAR

// var message,
//     position,
//     counter,
//     index,
//     clone,
//     i,
//     shop,
//     newName,
//     newPrice;
// ////////////////////////////////////////////
// /**************** магазин *****************/

// // init();


// function init() {
//     shop = {
//         products: [],
//         shopName: shopName,
//         quantityProduct: quantityProduct,
//         initProduct: initProduct,
//         shopFunction: shopFunction,

//         // функции магазина
//         searchProductPrice: searchProductPrice, //функция поиска по цене 
//         searchProductName: searchProductName,   //функция поиска по названию
//         showProducts: showProducts,             //функция вывода всех товаров
//         updateByIndex: updateByIndex,           //функция изменения цены товара по его номеру 
//         addProduct: addProduct,                 //функция добавления нового продукта в конец списка
//         deleteByIndex: deleteByIndex,           //функция удаления продута по номеру в списке
//         exitStore: exitStore                    //функция выхода из магазина и вывода всего магазина в консоли
//     };
//     // имя
//     shop.shopName();
//     // количество продуктов
//     shop.quantityProduct();
//     // добавление продукта
//     shop.initProduct();
//     // функции магазина
//     shop.shopFunction()
// }
// // функция определяющая название магазина 
// function shopName() {
//     while (true) {
//         message = prompt("Как назавёте свой магазин?", "Название магазина");
//         if (checkInput(message) && message != "noname") {
//             shop.name = message;
//             break;
//         }
//         else if (message == "noname") {
//             shop.name = "";
//             break;
//         }
//         else if (message == "") {
//             alert("Если вы хотите что бы магазан был без названия, напишени noname");
//         }
//     }
// }
// //  функция определяющая количество продуктов
// function quantityProduct() {
//     while (true) {
//         quantity = prompt("Введите количество продуктов", "2");
//         n = quantity - 1;
//         if (checkNumber(n) && n >= 0) {
//             break;
//         }
//         else if (quantity == "none") {
//             n = -1;
//             break;
//         }
//         else if (!checkNumber(n)) {
//             alert("Введите пожалуйста количество цифрами");
//         }

//         else {
//             alert("Вы не ввели количество продуктов, если вы хотите отменить ввод,  введите none");
//         }
//     }
// }

// // функция определяющая цену и название продукта
// function initProduct() {
//     for (i = 0; i <= n; i++) {
//         shop.products[i] = {};
//         message = prompt("Название продукта " + (i + 1), "Название продукта");

//         if (checkInput(message)) {
//             shop.products[i].name = message;
//             message = prompt("Укажите цену продукта: " + shop.products[i].name, "123");
//             if (checkNumber(message) && Number(message) >= 0.1) {
//                 shop.products[i].price = Number(message);
//             }
//             else if (!checkNumber(message)) {
//                 alert("Вы ввели не число");
//                 i--;
//             }
//             else if (message < 0.1) {
//                 alert("Не менее 0.1 рублей за продукт");
//                 i--;
//             }

//             else {
//                 ("Что то пошло не так попробуйте ещё раз");
//             }
//         }
//         else if (!checkInput(message)) {
//             alert("Введите пожалуйста название продукта");
//             i--;
//         }
//         else {
//             alert("Что то не так попробуйте ещё раз");
//         }
//     }
// }

// //функции магазина

// function shopFunction() {
//     while (true) {
//         message = prompt("можно выполнить следующие действия \n searchProductName - найти продукт по названию \n searchProductPrice - найти продукт по цене \n addProduct - добавить новый продукт \n updateByIndex - изменить цену товара по его номеру \n showProducts - Показать все продукты \n deleteByIndex - удалить продукт по номеру \n none - выти из магазина и вывести магазин в консоль");
//         // выйти и вывести в консоль весь магазин 
//         if (message == "none") {
//             alert("All the best!)");
//             shop.exitStore();
//             break;
//         }

//         // ищет продукт по названию
//         else if (message == "searchProductName") {
//             message = prompt("Введите название продукта который вы ищете");
//             if (checkInput(message)) {
//                 shop.searchProductName(message);
//             }
//             else {
//                 alert("Вы не ввели название продукта");
//             }
//         }
//         // ищет продукт по цене
//         else if (message == "searchProductPrice") {
//             message = prompt("Введите цену продукта который вы ищете");
//             if (checkNumber(message) && checkInput(message)) {
//                 shop.searchProductPrice(message);
//             }

//             else {
//                 alert("Вы не назвали цену");
//             }
//         }
//         // добавляет новый продукт
//         else if (message == "addProduct") {
//             while (true) {
//                 message = prompt("Введите название продукта");

//                 if (checkInput(message)) {
//                     newName = message;
//                     message = prompt("Введите цену продукта", "11");
//                     if (checkNumber(message)) {
//                         newPrice = message;
//                         shop.addProduct(newName, newPrice);
//                         alert("продукт " + '"' + newName + '"' + " с ценой " + newPrice + " успешно добавлен");
//                         break;
//                     }
//                     else alert("если вы передумали добавлять продукт - введите none");
//                 }

//                 else if (message == "none") break;
//                 else alert("если вы передумали добавлять продукт - введите none");
//             }
//         }
//         // выводит все продукты
//         else if (message == "showProducts") {
//             shop.showProducts();
//         }
//         // меняет цену продукта по индексу
//         else if (message == "updateByIndex") {
//             message = prompt("Укажите позицию продукта");
//             if (shop.products[message]) {
//                 index = message;
//                 message = prompt("Введите новую цену продукта: " + '"' + shop.products[message].name + '"');
//                 if (checkNumber(message)) {
//                     newPrice = message;
//                     shop.updateByIndex(index, newPrice);
//                     alert("Вы успешно изменили цену продукта");
//                 }
//                 else {
//                     alert("Вы не ввели новую цену продукта, изменение отменено");
//                 }
//             }
//             else if (!shop.products[message]) {
//                 alert("Такого продукта нет");
//             }
//         }
//         // Удалить продукт по индексу
//         else if (message == "deleteByIndex") {
//             message = prompt("Укажите позици продукта который нужно удалить");
//             if (shop.products[message]) {
//                 index = Number(message);
//                 clone = shop.products[index].name;
//                 shop.deleteByIndex(index);
//                 alert("Продукт " + '"' + clone + '"' + " удалён");
//             }
//             else if (!shop.products[message]) {
//                 alert("Такого продукта нет");
//             }
//         }
//     }
// }


// /////////////////////////////////////////////
// //функция удаления продута по номеру в списке 
// function deleteByIndex(index) {
//     shop.products.splice(index, 1);
// }

// ///////////////////////////////////////////////////
// //функция добавления нового продукта в конец списка 
// function addProduct(name, price) {
//     shop.products.push({ name: name, price: Number(price) });
// }

// /////////////////////////////////////////
// //функция вывода всего магазина в консоли 
// function exitStore() {
//     var show = "";
//     for (i = 0; i < shop.products.length; i++) {
//         position = i;
//         show += "продукт №:" + position + " " + shop.products[i].name + ", стоит " + shop.products[i].price + "\n";
//     }
//     console.log("Название магазина: " + shop.name);
//     if (show != "") console.log("В вашем магазение есть следующие продуты \n" + show);
//     else console.log("В магазине нету продуктов");
//     console.log(shop);
// }

// /////////////////////////////////////////////
// //функция изменения цены товара по его номеру 
// function updateByIndex(index, newPrice) {
//     shop.products[index].price = newPrice;
// }

// ////////////////////////////////
// // функция вывода всех продуктов
// function showProducts() {
//     var show = "";
//     for (i = 0; i < shop.products.length; i++) {
//         position = i;
//         show += "продукт №:" + position + " " + shop.products[i].name + ", стоит " + shop.products[i].price + "\n";
//     }
//     if (show != "") alert("В вашем магазение есть следующие продуты \n" + show);
//     else alert("В магазине нету продуктов");
// }

// ////////////////////////////////////////////////////////////////////////////////
// // функция которая находит продукт по названию, выводит название продукта и цену
// function searchProductName(name) {
//     counter = shop.products.length;
//     for (i = 0; i < shop.products.length; i++) {
//         position = shop.products[i].name.indexOf(name);
//         if (position !== Number(-1) && checkInput(name)) {
//             alert("по запросу " + '"' + name + '"' + " найден продукт:\n " + shop.products[i].name + " с ценой: " + shop.products[i].price);
//         }
//         else {
//             counter--;
//         }
//     }

//     if (counter === 0) {
//         alert("Такого товара нет в наличии");
//     }
// }

// ////////////////////////////////////////////////////////////////////////////
// // функция которая находит продукт по цене, выводит название продукта и цену
// function searchProductPrice(price) {
//     var found;
//     for (i = 0; i < shop.products.length; i++) {
//         if (shop.products[i].price === Number(price)) {
//             alert("найден товар с названием: " + '"' + shop.products[i].name + '"' + " с ценой: " + shop.products[i].price);
//             found = true;
//         }
//     }
//     if (!found) {
//         alert("Товар с ценой " + '"' + price + '"' + " нет в наличии");
//     }
// }

