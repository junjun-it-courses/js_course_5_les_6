'use strict';


const yearOfBirth = prompt('Введите год рождения!');

if(yearOfBirth !== null && !isNaN(+yearOfBirth)) {
    const city = prompt('В каком городе живете?');

    if(city !== null && city.trim().length) {
        const sport = prompt('Какой любимый вид спорта у вас?');


        if(sport !== null && city.trim().length) {


        } else {
            alert('Жаль, что Вы не захотели ввести свой любимый вид спорта!')
        }

    } else {
        alert('Жаль, что Вы не захотели ввести свой город!')
    }

} else {
    alert('Жаль, что Вы не захотели ввести свой год рождения!')
}

