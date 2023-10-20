let counter = 0;
let data1_numeric, data2_numeric, data3_numeric, data1, data2, data3;
const frwdButton = document.createElement('a');
frwdButton.textContent = 'Дальше';

function setData () {
// let data1 = document.querySelector('.choice1').value;
let values1 = document.querySelectorAll('.choice1');
for (let i = 0; i < values1.length; i++) {
    if(values1[i].checked) {
        data1 = values1[i].value;
        break;
    }
}

if (data1 == 'True'){
    data1_numeric = 1;
} else if(data1 == 'False') {
    data1_numeric = 0;
       }
// let data2 = document.querySelector('.choice2').value;
let values2 = document.querySelectorAll('.choice2');
for (let i = 0; i < values2.length; i++) {
    if(values2[i].checked) {
        data2 = values2[i].value;
        break;
    }
}

if (data2 == 'True'){
    data2_numeric = 1;
} else if(data2 == 'False') {
    data2_numeric = 0;
       }
// let data3 = document.querySelector('.choice3').value;
let values3 = document.querySelectorAll('.choice3');
for (let i = 0; i < values3.length; i++) {
    if(values3[i].checked) {
        data3 = values3[i].value;
        break;
    }
}
if (data3 == 'True'){
    data3_numeric = 1;
} else if(data3 == 'False') {
    data3_numeric = 0;
       }

console.log(data1_numeric, data2_numeric, data3_numeric);
counter = data1_numeric + data2_numeric + data3_numeric;
document.querySelector('.div_for_frwdButton').append(frwdButton);
}


const buttonInput = document.querySelector('.button__input');
buttonInput.addEventListener('click', setData)




function chooseVideo() {
    if (data1_numeric == 0 && counter == 1) {
        frwdButton.setAttribute('href', '../pages/video__final_fake1.html');
    }
    else if (counter == 0) {
        frwdButton.setAttribute('href', '../pages/video__final_1p_f1.html');
    } else if (counter == 1) {
        frwdButton.setAttribute('href', '../pages/video__final_1p_f1.html');
    } else if (counter == 2) {
        frwdButton.setAttribute('href', '../pages/video__final_2p_f1.html');
    } else if (counter == 3) {
        frwdButton.setAttribute('href', '../pages/video__final_3p_f1.html');
    }

    console.log('Новая ссылка ' + frwdButton.getAttribute('href'));

   
}


frwdButton.addEventListener('click', chooseVideo);









