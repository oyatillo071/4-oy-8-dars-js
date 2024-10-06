// 1-mashq **Masala**: 1 dan 50 gacha bo‘lgan sonlarni tekshiring. Agar son
//  5 ga bo‘linadigan bo‘lsa, "5 ga bo‘linadi", 3 ga bo‘linadigan bo‘lsa, 
// "3 ga bo‘linadi", ikkalasiga ham bo‘linadigan bo‘lsa, "5 va 3 ga bo‘linadi"
//  deb ternary operator yordamida aniqlang va natijani chop eting.

document.getElementById('first--btn').addEventListener('click', function () {

    let firstAnswer = " ";

    for (let i = 1; i <= 50; i++) {

        firstAnswer += (i % 5 === 0 && i % 3 === 0) ? i + " 5 va 3 ga bo'linadi <br>"
            : (i % 5 === 0) ? i + " 5 ga bo'linadi <br>"
                : (i % 3 === 0) ? i + " 3 ga bo'linadi <br>"
                    : "<br>";

    }

    document.getElementById('first--answer').innerHTML = firstAnswer;

    document.getElementById('first--close').addEventListener('click', function () {
        document.getElementById('first--answer').innerHTML = "";

    });
});

// 2-mashq **Masala**: 1 dan 100 gacha bo‘lgan sonlarni tekshirib, faqat 30 va 70
//  orasidagi juft sonlarning yig‘indisini hisoblang. Har bir son uchun bu son juft
//  yoki toq ekanligini ternary operator yordamida aniqlang.
document.getElementById('second--btn').addEventListener('click', function () {
    let secondAnswer = " ";
    let secondSum = 0;
    for (let i = 30; i <= 70; i++) {
        i % 2 == 0 ? secondAnswer += i + "juft son <br>" : secondAnswer += i + "toq son <br>";
        i % 2 == 0 ? secondSum += i : null;
    }

    document.getElementById('second--answer--numbers').innerHTML = secondAnswer;
    document.getElementById('second--answer--sum').innerHTML = secondSum;

    document.getElementById('second--close').addEventListener('click', function () {
        document.getElementById('second--answer').innerHTML = "";

    });
});


// 3-mashq **Masala**: -20 dan 20 gacha bo‘lgan sonlar orasidan faqat musbat va
//  toq sonlarni aniqlang. Ternary operator yordamida son musbat va toq bo‘lsa,
//  ularni sanang va nechta musbat va toq son borligini natijada chiqaring.
document.getElementById('third--btn').addEventListener('click', function () {
    let thirdCounter = 0;
    for (let i = -20; i <= 20; i++) {

        i % 2 == 1 && i > 0 ? thirdCounter++ : thirdCounter += 0;


    }
    document.getElementById('third--answer').innerHTML = thirdCounter;

    document.getElementById('third--close').addEventListener('click', function () {
        document.getElementById('third--answer').innerHTML = "";

    });
});

// 4-mashq **Masala**: 1 dan 100 gacha bo‘lgan sonlarni tekshiring.
//  Agar son 2 yoki 7 ga bo‘linadigan bo‘lsa, bu son "maxsus son" 
// deb belgilang. Har bir sonni ternary operator yordamida tekshirib, natijani chop eting.
document.getElementById('four--btn').addEventListener('click', function () {
    let fourAnswer = " ";
    for (let i = 1; i <= 100; i++) {
        i % 2 == 0 || i % 7 == 0 ? fourAnswer += i + " maxsus son <br>" : fourAnswer += i + " maxsus son emas <br>";
    }


    document.getElementById('four--answer').innerHTML = fourAnswer;
    document.getElementById('four--close').addEventListener('click', function () {
        document.getElementById('four--answer').innerHTML = "";
    })
});


// ====================== break continue====================



// 5-mashq **Masala**: 1 dan 100 gacha bo‘lgan sonlarni tekshiring.
// Agar son 25 ga teng bo‘lsa, tsiklni `break` operatori yordamida
//  to‘xtating. Bunga qadar bo‘lgan barcha sonlarni chop eting.
document.getElementById('five--btn').addEventListener('click', function () {
    let fiveAnswer = " ";
    for (let i = 1; i <= 100; i++) {
        if (i == 25) {
            break;
        }
        fiveAnswer += " " + i + " ";
    }


    document.getElementById('five--answer').innerHTML = fiveAnswer;
    document.getElementById('five--close').addEventListener('click', function () {
        document.getElementById('five--answer').innerHTML = "";
    })
});


// 6-mashq  1 dan 20 gacha bo‘lgan sonlarni tekshiring. Agar son juft bo‘lsa, 
// `continue` operatori yordamida uni o‘tkazib yuboring va faqat toq sonlarni chop eting.
document.getElementById('six--btn').addEventListener('click', function () {
    let sixAnswer = " ";
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            continue;
        }
        sixAnswer += " " + i + " ";
    }


    document.getElementById('six--answer').innerHTML = sixAnswer;
    document.getElementById('six--close').addEventListener('click', function () {
        document.getElementById('six--answer').innerHTML = "";
    })
});





// 7-mashq  **Masala**: 1 dan 50 gacha bo‘lgan sonlarni tekshiring.
//  Agar son 30 dan katta bo‘lsa, tsiklni `break` operatori
//  yordamida to‘xtating. Faqat 10 va 30 orasidagi 
// sonlarni chop eting, qolganlarni `continue` bilan o‘tkazib yuboring.

document.getElementById('seven--btn').addEventListener('click', function () {
    let sevenAnswer = " ";
    for (let i = 1; i <= 50; i++) {
        if (i < 10 || i > 30) {
            continue;
        }

        if (i > 30) {
            break;
        }
        sevenAnswer += " " + i + " ";
    }


    document.getElementById('seven--answer').innerHTML = sevenAnswer;

    document.getElementById('seven--close').addEventListener('click', function () {
        document.getElementById('seven--answer').innerHTML = "";
    })
});


// ============================ Switch case===================================

// 8-mashq **Masala**: 1 dan 7 gacha bo‘lgan raqamlarni kiritganingizda, mos ravishda haftaning kunini (`1 - Dushanba`, `2 - Seshanba` va hokazo) switch...case orqali aniqlang va chop eting.
document.getElementById('eight--btn').addEventListener('click', function () {
    let eightValue = parseInt(document.getElementById('eight--value').value);
    let eightAnswer;

    switch (eightValue) {
        case 1:
            eightAnswer = "Dushanba";
            break;
        case 2:
            eightAnswer = "Seshanba";
            break;
        case 3:
            eightAnswer = "Chorshanba";
            break;
        case 4:
            eightAnswer = "Payshanba";
            break;
        case 5:
            eightAnswer = "Juma";
            break;
        case 6:
            eightAnswer = "Shanba";
            break;
        case 7:
            eightAnswer = "Yakshanba";
            break;
        default:
            eightAnswer = "Xato qiymat bunday hafta kuni mavjud emas";
            break;
    }
    document.getElementById('eight--answer').innerHTML = eightAnswer;

    document.getElementById('eight--close').addEventListener('click', function () {
        document.getElementById('eight--answer').innerHTML = "";
    })
});



// 9-mashq **Masala**: 1 dan 12 gacha bo‘lgan raqamlarni kiritganingizda, 
// bu raqam qaysi oyga mos kelishini aniqlang va bu oy qaysi faslga 
document.getElementById('nine--btn').addEventListener('click', function () {
    let nineValue = parseInt(document.getElementById('nine--value').value);
    let nineAnswer;

    switch (nineValue) {
        case 1:
        case 2:
        case 12:
            nineAnswer = "Qish";
            break;
        case 3:
        case 4:
        case 5:
            nineAnswer = "Bahor";
            break;
        case 6:
        case 7:
        case 8:
            nineAnswer = "Yoz";
            break;
        case 9:
        case 10:
        case 11:
            nineAnswer = "Kuz";
            break;
        default:
            nineAnswer = "Xato qiymat bunday Oy mavjud emas";
            break;
    }
    document.getElementById('nine--answer').innerHTML = nineAnswer;

    document.getElementById('nine--close').addEventListener('click', function () {
        document.getElementById('nine--answer').innerHTML = "";
    })
});


// 10-mashq  **Masala**: 1 dan 5 gacha bo‘lgan raqamlarni kiriting.
// Ushbu raqamga mos ravishda bahoni (`1 - Juda yomon`, `2 - Yomon`, 
// `3 - Qoniqarli`, `4 - Yaxshi`, `5 - A'lo`) switch...case orqali
//  aniqlang va chop eting.

document.getElementById('ten--btn').addEventListener('click', function () {
    let tenValue = parseInt(document.getElementById('ten--value').value);
    let tenAnswer;

    switch (tenValue) {
        case 1:
            tenAnswer = "Juda yomon";
            break;
        case 2:
            tenAnswer = "Yomon";
            break;
        case 3:
            tenAnswer = "Qoniqarli";
            break;
        case 4:
            tenAnswer = "Yaxshi";
            break;
        case 5:
            tenAnswer = "A'lo";
            break;
        default:
            tenAnswer = "Xato qiymat kiritildi ";
            break;
    }
    document.getElementById('ten--answer').innerHTML = tenAnswer;

    document.getElementById('ten--close').addEventListener('click', function () {
        document.getElementById('ten--answer').innerHTML = "";
    })
});





// 11-mashq  **Masala**: Tariflar rejasiga ko‘ra, foydalanuvchi 1 dan 3 gacha raqam kiritsin.
//  `1 - Ekonom`, `2 - Standart`, `3 - Premium` tariflaridan birini tanlaganini switch...case
//   orqali aniqlang va tarif nomini chop eting.

document.getElementById('eleven--btn').addEventListener('click', function () {
    let elevenValue = parseInt(document.getElementById('eleven--value').value);
    let elevenAnswer;

    switch (elevenValue) {
        case 1:
            elevenAnswer = "Ekonom";
            break;
        case 2:
            elevenAnswer = "Standart";
            break;
        case 3:
            elevenAnswer = "Premium";
            break;
        default:
            elevenAnswer = "Xato qiymat kiritildi ";
            break;
    }

    document.getElementById('eleven--answer').innerHTML = elevenAnswer;

    document.getElementById('eleven--close').addEventListener('click', function () {
        document.getElementById('eleven--answer').innerHTML = "";
    })
});



//  12-mashq **Masala**: Foydalanuvchi 1 dan 4 gacha bo‘lgan raqamlarni kiritsin.
//  Har bir raqamga mos ravishda bir meva tanlang (`1 - Olma`, `2 - Apelsin`,
//  `3 - Banan`, `4 - Uva`) va ularning narxini switch...case orqali chop eting.
document.getElementById('twelve--btn').addEventListener('click', function () {
    let twelveValue = parseInt(document.getElementById('twelve--value').value);
    let twelveAnswer;

    switch (twelveValue) {
        case 1:
            twelveAnswer = 6000;
            break;
        case 2:
            twelveAnswer = 12000;
            break;
        case 3:
            twelveAnswer = 26000;
            break;
        case 4:
            twelveAnswer = 9000;
            break;

        default:
            twelveAnswer = "Xato qiymat kiritildi ";
            break;
    }

    document.getElementById('twelve--answer').innerHTML = twelveAnswer;

    document.getElementById('twelve--close').addEventListener('click', function () {
        document.getElementById('twelve--answer').innerHTML = "";
    })
});


//  13-mashq **Masala**: Foydalanuvchi 1 dan 3 gacha bo‘lgan variantlardan
//  birini kiritsin. `1 - Parolni tiklash`, `2 - Parolni o'zgartirish`, 
//  `3 - Chiqish` variantlarini switch...case orqali aniqlang va tegishli
//   xabarni chop eting.


document.getElementById('thirdteen--btn').addEventListener('click', function () {
    let thirdteenValue = parseInt(document.getElementById('thirdteen--value').value);
    let thirdteenAnswer;

    switch (thirdteenValue) {
        case 1:
            thirdteenAnswer = "Parolni tiklash." + "<br>";
            thirdteenAnswer += "Eski parol : " + prompt("Eski parolni kiriting:") + "<br>";
            thirdteenAnswer += "Yangi parol :   " + prompt("Yangi parolni kiriting:") + "<br>";
            thirdteenAnswer += "Tasdiqlangan parol :  " + prompt("Yangi parolni tasdiqlang:") + "<br>";
            break;
        case 2:
            thirdteenAnswer = "Parolni ozgartirish" + "<br>";
            thirdteenAnswer += "Yangi parol :   " + prompt("Yangi parolni kiriting:") + "<br>";
            thirdteenAnswer += "Tasdiqlangan parol :  " + prompt("Yangi parolni tasdiqlang:") + "<br>";

            break;
        case 3:
            thirdteenAnswer = "Chiqish";
            break;

        default:
            thirdteenAnswer = "Xato qiymat kiritildi ";
            break;
    }

    document.getElementById('thirdteen--answer').innerHTML = thirdteenAnswer;

    document.getElementById('thirdteen--close').addEventListener('click', function () {
        document.getElementById('thirdteen--answer').innerHTML = "";
    })
});



// ========================= While, do…while. Ushbu masalalarni har ikki operator orqali ishlansin ===============================



// 14-mashq **Masala**: 1 dan 10 gacha bo‘lgan sonlarni 
// `while` sikli yordamida chiqarib bering.

document.getElementById('fourteen--btn').addEventListener('click', function () {
    let fourteenSwitch = document.getElementById('fourteen--value').value;
    let fourteenAnswer = " ";
    let fourteenCounter = 1;

    switch (fourteenSwitch) {
        case 1:
        case "1":

            while (fourteenCounter <= 10) {
                fourteenAnswer += fourteenCounter + " ";
                fourteenCounter++;
            }
            break;

        case 2:
        case "2":


            do {
                fourteenAnswer += fourteenCounter + " ";
                fourteenCounter++;

            } while (fourteenCounter <= 10);
            break;

        default:
            fourteenAnswer = "Xato qiymat kiritildi 1 yoki 2 kiriting:";
            break;

    }



    document.getElementById('fourteen--answer').innerHTML = fourteenAnswer;
    document.getElementById('fourteen--close').addEventListener('click', function () {
        document.getElementById('fourteen--answer').innerHTML = "";
    })
});


// 15-mashq **Masala**: 10 dan 1 gacha bo‘lgan sonlarni teskari tartibda
//  `while` sikli yordamida chop eting.
document.getElementById('fiveteen--btn').addEventListener('click', function () {
    let fiveteenSwitch = document.getElementById('fiveteen--value').value;
    let fiveteenAnswer = " ";
    let fiveteenCounter = 10;

    switch (fiveteenSwitch) {
        case 1:
        case "1":

            while (fiveteenCounter >= 1) {
                fiveteenAnswer += fiveteenCounter + " ";
                fiveteenCounter--;
            }
            break;

        case 2:
        case "2":


            do {
                fiveteenAnswer += fiveteenCounter + " ";
                fiveteenCounter--;

            } while (fiveteenCounter >=1);
            break;

        default:
            fiveteenAnswer = "Xato qiymat kiritildi 1 yoki 2 kiriting:";
            break;

    }



    document.getElementById('fiveteen--answer').innerHTML = fiveteenAnswer;
    document.getElementById('fiveteen--close').addEventListener('click', function () {
        document.getElementById('fiveteen--answer').innerHTML = "";
    })
});
