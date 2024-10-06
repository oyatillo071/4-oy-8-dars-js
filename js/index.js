// 1-mashq **Masala**: 1 dan 50 gacha bo‘lgan sonlarni tekshiring. Agar son 5 ga bo‘linadigan bo‘lsa, "5 ga bo‘linadi", 3 ga bo‘linadigan bo‘lsa, "3 ga bo‘linadi", ikkalasiga ham bo‘linadigan bo‘lsa, "5 va 3 ga bo‘linadi" deb ternary operator yordamida aniqlang va natijani chop eting.

document.getElementById('first--btn').addEventListener('click', function () {

    let firstAnswer = " ";

    for (let i = 1; i <= 50; i++) {

        firstAnswer += (i % 5 === 0 && i % 3 === 0) ? i + " 5 va 3 ga bo'linadi <br>"
            : (i % 5 === 0) ? i + " 5 ga bo'linadi <br>"
                : (i % 3 === 0) ? i + " 3 ga bo'linadi <br>"
                    : "<br>";

    }

    document.getElementById('first--answer').innerHTML = firstAnswer;

    document.getElementById('first--close').addEventListener('click',function(){
        document.getElementById('first--answer').innerHTML="";

});
});

// 2-mashq **Masala**: 1 dan 100 gacha bo‘lgan sonlarni tekshirib, faqat 30 va 70 orasidagi juft sonlarning yig‘indisini hisoblang. Har bir son uchun bu son juft yoki toq ekanligini ternary operator yordamida aniqlang.
document.getElementById('second--btn').addEventListener('click', function () {
    let secondAnswer = " ";
    let secondSum = 0;
    for (let i = 30; i <= 70; i++) {
        i % 2 == 0 ? secondAnswer += i + "juft son <br>" : secondAnswer += i + "toq son <br>";
        i % 2 == 0 ? secondSum += i : null;
    }

    document.getElementById('second--answer--numbers').innerHTML = secondAnswer;
    document.getElementById('second--answer--sum').innerHTML = secondSum;

    document.getElementById('second--close').addEventListener('click',function(){
        document.getElementById('second--answer').innerHTML="";

});
});


// 3-mashq **Masala**: -20 dan 20 gacha bo‘lgan sonlar orasidan faqat musbat va toq sonlarni aniqlang. Ternary operator yordamida son musbat va toq bo‘lsa, ularni sanang va nechta musbat va toq son borligini natijada chiqaring.
document.getElementById('third--btn').addEventListener('click', function () {
    let thirdCounter = 0;
    for (let i = -20; i <= 20; i++) {

        i % 2 == 1 && i > 0 ? thirdCounter++ : thirdCounter += 0;


    }
    document.getElementById('third--answer').innerHTML = thirdCounter;

    document.getElementById('third--close').addEventListener('click',function(){
        document.getElementById('third--answer').innerHTML="";

});
});

// 4-mashq **Masala**: 1 dan 100 gacha bo‘lgan sonlarni tekshiring. Agar son 2 yoki 7 ga bo‘linadigan bo‘lsa, bu son "maxsus son" deb belgilang. Har bir sonni ternary operator yordamida tekshirib, natijani chop eting.
document.getElementById('four--btn').addEventListener('click',function(){
    let fourAnswer=" ";
    for (let i = 1; i <= 100 ; i++) {
        i % 2 == 0 || i % 7 == 0 ? fourAnswer+=i+" maxsus son <br>" : fourAnswer+=i+" maxsus son emas <br>";
    }


    document.getElementById('four--answer').innerHTML=fourAnswer;
    document.getElementById('four--close').addEventListener('click',function(){
        document.getElementById('four--answer').innerHTML="";
    })
});


// ====================== break continue====================
// 5-mashq **Masala**: 1 dan 100 gacha bo‘lgan sonlarni tekshiring. Agar son 25 ga teng bo‘lsa, tsiklni `break` operatori yordamida to‘xtating. Bunga qadar bo‘lgan barcha sonlarni chop eting.
document.getElementById('five--btn').addEventListener('click',function(){
    let fiveAnswer=" ";
    for (let i = 1; i <= 100 ; i++) {
        if (i==25) {
            break;
        }
        fiveAnswer+=" "+i+" "; 
    }


    document.getElementById('five--answer').innerHTML=fiveAnswer;
    document.getElementById('five--close').addEventListener('click',function(){
        document.getElementById('five--answer').innerHTML="";
    })
});