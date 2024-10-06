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

            } while (fiveteenCounter >= 1);
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


// 16-mashq **Masala**: Foydalanuvchi musbat son kiritmaguncha, 
// undan son  kiritishni talab qiladigan `while` sikli tuzing.

document.getElementById('sixteen--btn').addEventListener('click', function () {
    let sixteenSwitch = document.getElementById('sixteen--value').value;
    let sixteenAnswer = " ";
    let sixteenChecker = true;
    let sixteenInput = 0;

    switch (sixteenSwitch) {
        case 1:
        case "1":

            while (sixteenChecker) {

                sixteenInput = +prompt("Son kiriting:");
                if (sixteenInput >= 0) {
                    sixteenAnswer += " " + sixteenInput + " ";
                } else {
                    sixteenChecker = false;
                }

            }
            break;

        case 2:
        case "2":


            do {
                sixteenInput = +prompt("Son kiriting:");
                if (sixteenInput >= 0) {
                    sixteenAnswer += " " + sixteenInput + " ";
                } else {
                    sixteenChecker = false;
                }

            } while (sixteenChecker);

            break;
        default:
            sixteenAnswer = "Xato qiymat kiritildi 1 yoki 2 kiriting:";
            break;

    }



    document.getElementById('sixteen--answer').innerHTML = "Kiritilgan sonlar :" + "<br>" + sixteenAnswer;
    document.getElementById('sixteen--close').addEventListener('click', function () {
        document.getElementById('sixteen--answer').innerHTML = "";
    })
});



// 17-mashq **Masala**: 1 dan 20 gacha bo‘lgan juft sonlarni `while`
//  sikli yordamida chiqarib bering.

document.getElementById('seventeen--btn').addEventListener('click', function () {
    let seventeenSwitch = document.getElementById('seventeen--value').value;
    let seventeenAnswer = " ";
    let seventeenCounter = 1;

    switch (seventeenSwitch) {
        case 1:
        case "1":

            while (seventeenCounter <= 20) {

                if (seventeenCounter % 2 == 0) {
                    seventeenAnswer += " " + seventeenCounter + " ";
                }
                seventeenCounter++;
            }
            break;

        case 2:
        case "2":


            do {
                if (seventeenCounter % 2 == 0) {
                    seventeenAnswer += " " + seventeenCounter + " ";
                }
                seventeenCounter++;
            } while (seventeenCounter <= 20);

            break;
        default:
            seventeenAnswer = "Xato qiymat kiritildi 1 yoki 2 kiriting:";
            break;

    }

    document.getElementById('seventeen--answer').innerHTML = "Kiritilgan sonlar :" + "<br>" + seventeenAnswer;
    document.getElementById('seventeen--close').addEventListener('click', function () {
        document.getElementById('seventeen--answer').innerHTML = "";
    })
});


// 18-mashq **Masala**: Berilgan sonning barcha raqamlarini ajratib,
//  ularning yig‘indisini `while` sikli yordamida toping. Masalan, 
// 123 soni uchun yig‘indi 1 + 2 + 3 bo‘lsin.

document.getElementById('eightteen--btn').addEventListener('click', function () {
    let eightteenSwitch = document.getElementById('eightteen--value').value;
    let eightteenInputValue = parseInt(document.getElementById('eightteen--input--value').value);
    let eightteenAnswer = 0;

    switch (eightteenSwitch) {
        case "1":
        case 1:
            while (eightteenInputValue > 0) {
                eightteenAnswer += eightteenInputValue % 10;
                eightteenInputValue = Math.floor(eightteenInputValue / 10);
            }
            break;
        case 2:
        case "2":

            do {
                eightteenAnswer += eightteenInputValue % 10;
                eightteenInputValue = Math.floor(eightteenInputValue / 10);
            } while (eightteenInputValue > 0);
            break;

        default:
            eightteenAnswer = "Xato qiymat kiritildi, 1 yoki 2 kiriting:";
            break;
    }

    document.getElementById('eightteen--answer').innerHTML = "Yig'indisi :" + eightteenAnswer;
    document.getElementById('eightteen--close').addEventListener('click', function () {
        document.getElementById('eightteen--answer').innerHTML = "";
    });
});


//  19-mashq  **Masala**: Foydalanuvchi son kiritsin. `while` sikli
//  yordamida ushbu sonni 2 ga bo‘lib boring va natijani chop eting.
//  Sikl son 1 dan kichik bo‘lgunga qadar davom etsin.


document.getElementById('nineteen--btn').addEventListener('click', function () {
    let nineteenSwitch = document.getElementById('nineteen--value').value;
    let nineteenInputValue = parseInt(document.getElementById('nineteen--input--value').value);
    let nineteenAnswer = " ";

    switch (nineteenSwitch) {
        case "1":
        case 1:
            while (nineteenInputValue > 1) {
                nineteenAnswer += " " + nineteenInputValue / 2 + " ";
                nineteenInputValue = nineteenInputValue / 2;
            }
            break;
        case 2:
        case "2":

            do {
                nineteenAnswer += "  " + nineteenInputValue / 2 + " ";
                nineteenInputValue = nineteenInputValue / 2;
            } while (nineteenInputValue > 1);
            break;

        default:
            nineteenAnswer = "Xato qiymat kiritildi, 1 yoki 2 kiriting:";
            break;
    }

    document.getElementById('nineteen--answer').innerHTML = nineteenAnswer;
    document.getElementById('nineteen--close').addEventListener('click', function () {
        document.getElementById('nineteen--answer').innerHTML = "";
    });
});


// 20-mashq **Masala**: Berilgan sonning barcha raqamlarini tekshirib,
//  faqat toq raqamlarini `while` sikli yordamida chop eting.


document.getElementById('twenty--btn').addEventListener('click', function () {
    let twentySwitch = document.getElementById('twenty--value').value;
    let twentyInputValue = parseInt(document.getElementById('twenty--input--value').value);
    let twentyAnswer = " ";
    let twentyCheck = 0;

    switch (twentySwitch) {
        case "1":
        case 1:
            while (twentyInputValue > 0) {
                twentyCheck = twentyInputValue % 10;
                if (twentyCheck % 2 == 1) {
                    twentyAnswer += " " + twentyCheck + "  ";
                }
                twentyInputValue = Math.trunc(twentyInputValue / 10);
            }
            break;
        case 2:
        case "2":

            do {

                twentyCheck = twentyInputValue % 10;
                if (twentyCheck % 2 == 1) {
                    twentyAnswer += " " + twentyCheck + "  ";
                }
                twentyInputValue = Math.trunc(twentyInputValue / 10);

            } while (twentyInputValue > 0);
            break;

        default:
            twentyAnswer = "Xato qiymat kiritildi, 1 yoki 2 kiriting:";
            break;
    }

    document.getElementById('twenty--answer').innerHTML = twentyAnswer;
    document.getElementById('twenty--close').addEventListener('click', function () {
        document.getElementById('twenty--answer').innerHTML = "";
    });
});





// 21-mashq **Masala**: Foydalanuvchi boshlang'ich son va yakuniy son kiritadi. 
// `while` sikli yordamida ushbu sonlar orasidagi faqat 3 ga bo‘linadigan sonlarni 
// chop eting. Barcha boshqa sonlarni o‘tkazib yuboring.

document.getElementById('twentyone--btn').addEventListener('click', function () {
    let twentyoneSwitch = document.getElementById('twentyone--value').value;
    let twentyoneFirstValue = parseInt(document.getElementById('twentyone--first--value').value);
    let twentyoneSecondValue = parseInt(document.getElementById('twentyone--second--value').value);

    let twentyoneMaxValue = Math.max(twentyoneFirstValue, twentyoneSecondValue);
    let twentyoneMinValue = Math.min(twentyoneFirstValue, twentyoneSecondValue);

    let twentyoneAnswer = " ";
    let twentyoneCounter = twentyoneMinValue;

    switch (twentyoneSwitch) {
        case "1":
        case 1:

            while (twentyoneCounter == twentyoneMaxValue) {
                if (twentyoneCounter % 3 == 0) {
                    twentyoneAnswer += " " + twentyoneCounter + " ";
                }

                twentyoneCounter++;
            }

            break;
        case 2:
        case "2":

            do {
                if (twentyoneCounter % 3 == 0) {
                    twentyoneAnswer += " " + twentyoneCounter + " ";
                }
                twentyoneCounter++;
            } while (twentyoneCounter == twentyoneMaxValue);
            break;

        default:
            twentyoneAnswer = "Xato qiymat kiritildi, 1 yoki 2 kiriting:";
            break;
    }

    document.getElementById('twentyone--answer').innerHTML = twentyoneAnswer;
    document.getElementById('twentyone--close').addEventListener('click', function () {
        document.getElementById('twentyone--answer').innerHTML = "";
    });
});



//  22-mashq **Masala**: Foydalanuvchi biror son kiritsin. Ushbu sonning
//  raqamlarini teskari tartibda (`1234` ni `4321` ko‘rinishida) `while`
//  sikli yordamida chop eting.


document.getElementById('twentytwo--btn').addEventListener('click', function () {
    let twentytwoSwitch = document.getElementById('twentytwo--value').value;
    let twentytwoInputValue = parseInt(document.getElementById('twentytwo--input--value').value);
    let twentytwoAnswer = " ";
    let twentytwoCheck = 0;

    switch (twentytwoSwitch) {
        case "1":
        case 1:
            while (twentytwoInputValue > 0) {
                twentytwoCheck = twentytwoInputValue % 10;

                twentytwoAnswer += " " + twentytwoCheck + "  ";

                twentytwoInputValue = Math.trunc(twentytwoInputValue / 10);
            }
            break;
        case 2:
        case "2":

            do {

                twentytwoCheck = twentytwoInputValue % 10;
                twentytwoAnswer += " " + twentytwoCheck + "  ";

                twentytwoInputValue = Math.trunc(twentytwoInputValue / 10);

            } while (twentytwoInputValue > 0);
            break;

        default:
            twentytwoAnswer = "Xato qiymat kiritildi, 1 yoki 2 kiriting:";
            break;
    }

    document.getElementById('twentytwo--answer').innerHTML = twentytwoAnswer;
    document.getElementById('twentytwo--close').addEventListener('click', function () {
        document.getElementById('twentytwo--answer').innerHTML = "";
    });
});




// 23-mashq **Masala**: Foydalanuvchi berilgan son bo‘yicha fibonachchi ketma-ketligini
//  (0, 1, 1, 2, 3, 5...) aniqlab, shu ketma-ketlikdagi sonlarni `while` sikli yordamida
//   chop eting. Ketma-ketlikda kiritilgan son qiymatidan oshmasligi kerak.
document.getElementById('twentythree--btn').addEventListener('click', function () {
    let twentythreeSwitch = document.getElementById('twentythree--value').value;
    let twentythreeInputValue = parseInt(document.getElementById('twentythree--input--value').value);
    let twentythreeAnswer = ""; 
    let twentythreePrev = 0; 
    let twentythreeCurrent = 1;

    twentythreeAnswer += twentythreePrev + " ";
    twentythreeAnswer += twentythreeCurrent + " "; 

    switch (twentythreeSwitch) {
        case "1":
        case 1:
            while (true) {
                let twentythreeNext = twentythreePrev + twentythreeCurrent; 
                if (twentythreeNext > twentythreeInputValue) {
                    break;
                }
                twentythreeAnswer += twentythreeNext + " ";
                twentythreePrev = twentythreeCurrent; 
                twentythreeCurrent = twentythreeNext; 
            }
            break;

        case "2":
        case "2":
            do {
                let twentythreeNext = twentythreePrev + twentythreeCurrent; 
                if (twentythreeNext > twentythreeInputValue) {
                    break;
                }
                twentythreeAnswer += twentythreeNext + " "; 
                twentythreePrev = twentythreeCurrent; 
                twentythreeCurrent = twentythreeNext;
            } while (twentythreeInputValue > 0);
            break;

        default:
            twentythreeAnswer = "Xato qiymat kiritildi, 1 yoki 2 kiriting:";
            break;
    }

    document.getElementById('twentythree--answer').innerHTML = twentythreeAnswer; 
    document.getElementById('twentythree--close').addEventListener('click', function () {
        document.getElementById('twentythree--answer').innerHTML = "";
    });
});





//  24-mashq **Masala**: Foydalanuvchi bir son kiritsin. Ushbu sonning barcha raqamlarini
//  ajratib, ularning ko‘paytmasini (masalan, 234 uchun 2 * 3 * 4) `while` sikli yordamida toping.

document.getElementById('twentyfour--btn').addEventListener('click', function () {
    let twentyfourSwitch = document.getElementById('twentyfour--value').value;
    let twentyfourInputValue = parseInt(document.getElementById('twentyfour--input--value').value);
    let twentyfourAnswer = 1;
    let twentyfourCheck = 0;

    switch (twentyfourSwitch) {
        case "1":
        case 1:
            while (twentyfourInputValue > 0) {
                twentyfourCheck = twentyfourInputValue % 10;

                twentyfourAnswer *= twentyfourCheck;

                twentyfourInputValue = Math.trunc(twentyfourInputValue / 10);
            }
            break;
        case 2:
        case "2":

            do {

                twentyfourCheck = twentyfourInputValue % 10;
                twentyfourAnswer *= twentyfourCheck;

                twentyfourInputValue = Math.trunc(twentyfourInputValue / 10);

            } while (twentyfourInputValue > 0);
            break;

        default:
            twentyfourAnswer = "Xato qiymat kiritildi, 1 yoki 2 kiriting:";
            break;
    }

    document.getElementById('twentyfour--answer').innerHTML ="Ko'paytmasi : "+ twentyfourAnswer;
    document.getElementById('twentyfour--close').addEventListener('click', function () {
        document.getElementById('twentyfour--answer').innerHTML = "";
    });
});
