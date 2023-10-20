let counter = 0;
// let data_fake_numeric, data_ads_numeric, data3_numeric, data1, data2, data3;
const frwdButton = document.createElement('a');
frwdButton.textContent = 'Дальше';

function setData () {
// let data1 = document.querySelector('.choice1').value;
let values_fake = document.querySelectorAll('.choice_fake');
for (let i = 0; i < values_fake.length; i++) {
    if(values_fake[i].checked) {
        data_fake = values_fake[i].value;
        break;
    }
}
if (data_fake == 'True'){
    data_fake_numeric = 1;
} else if(data_fake == 'False') {
    data_fake_numeric = 0;
       }


// let data2 = document.querySelector('.choice2').value;
let values_ads = document.querySelectorAll('.choice_ads');
for (let i = 0; i < values_ads.length; i++) {
    if(values_ads[i].checked) {
        data_ads = values_ads[i].value;
        break;
    }
}
if (data_ads == 'True'){
    data_ads_numeric = 1;
} else if(data_ads == 'False') {
    data_ads_numeric = 0;
       }

       
// let data3 = document.querySelector('.choice3').value;
let values_biased = document.querySelectorAll('.choice_biased');
for (let i = 0; i < values_biased.length; i++) {
    if(values_biased[i].checked) {
        data_biased = values_biased[i].value;
        break;
    }
}
if (data_biased == 'True'){
    data_biased_numeric = 1;
} else if(data_biased == 'False') {
    data_biased_numeric = 0;
       }

console.log(data_fake_numeric, data_ads_numeric, data_biased_numeric);
counter = data_fake_numeric + data_ads_numeric + data_biased_numeric;
document.querySelector('.div_for_frwdButton').append(frwdButton);
}


const buttonInput = document.querySelector('.button__input');
buttonInput.addEventListener('click', setData)




function chooseVideo() {
    if (counter == 2 && data_fake_numeric == 0) {
        frwdButton.setAttribute('href', '../pages/video__final_2p_fake_f5.html');
    } 
    else if (counter == 0) {
        frwdButton.setAttribute('href', '../pages/video__final_0p_f5.html');
    } else if (counter == 1) {
        frwdButton.setAttribute('href', '../pages/video__final_1p_f5.html');
    } else if (counter == 2) {
        frwdButton.setAttribute('href', '../pages/video__final_2p_f5.html');
    } else if (counter == 3) {
        frwdButton.setAttribute('href', '../pages/video__final_3p_f5.html');
    }

    console.log('Новая ссылка ' + frwdButton.getAttribute('href'));

   
}


frwdButton.addEventListener('click', chooseVideo);










