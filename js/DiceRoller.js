//
// "use strict";
// (function () {
//
//     var mainHeader = document.getElementById("main-header");
//
//     var listener = function (event) {
//         mainHeader.innerText = "YOU ROLLED: " + listOfRollsFromDieFunc();
//     };
//     document.getElementById('button').addEventListener('click', listener, false);
//
//
//     var numberOfRolls = document.getElementById('mySelect2');
//     // console.log(numberOfRolls);
//
//     var diceFunction = document.getElementById('mySelect');
//     // console.log(diceFunction);
//
//     function listOfRollsFromDieFunc() {
//         var dieChosen = diceFunction.value;
//         console.log(dieChosen);
//         var rollAmount = numberOfRolls.value;
//         console.log(rollAmount);
//         var diceArray = [];
//         for (var i = 0; i < rollAmount ; i++) {
//             diceArray.push(Math.floor(Math.random() * dieChosen) + 1);
//         }
//         console.log(diceArray);
//         return diceArray
//     }
//
// })();


function matchHouses(step) {
    if (step > 0 ){
        return (step*5)+1
    }else {
        return 0
    }
}


