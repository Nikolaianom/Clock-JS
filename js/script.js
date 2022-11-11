const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes')

// console.log(new Date().getMinutes());



function clock() {

    let time = new Date()
    let hours = time.getHours() * 30
    let minutes = time.getMinutes() * 6
    let seconds = time.getSeconds() * 6

    hour.style.transform = `rotate(${hours}deg)`
    min.style.transform = `rotate(${minutes}deg)`
    sec.style.transform = `rotate(${seconds}deg)`

    // innerHTML - это свойство, которое позволяет получить или изменить HTML-содержимое элемента.

    hoursNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours()
    minutesNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()

    // ! Рекурсия - это вызов функции внутри самой себя

    setTimeout(() => {
        clock()
    }, 1000);
}

clock()

// setTimeout(() => {
//     console.log('hello');
// }, 5000);

// setInterval(() => {
//     console.log('hello');
// }, 2000);


const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem')

// console.log(tabsItem);
// console.log(tabsContentItem);

tabsItem.forEach((item, i) => {
    item.addEventListener('click', () => {
        addAndRemoveActive(item, tabsItem)
        addAndRemoveActive(tabsContentItem[i], tabsContentItem)
    })
})

// classList - это свойство, которое позволяет получить доступ к классам элемента.
// add - добавляет класс
// remove - удаляет класс

function addAndRemoveActive(element, arr) {
    arr.forEach(item => {
        item.classList.remove('active')
    })
    element.classList.add('active')
}


const stopWatchBtn = document.querySelector('.stopwatch__btn'),
    secondWatch = document.querySelector('.stopwatch__seconds'),
    minuteWatch = document.querySelector('.stopwatch__minutes'),
    hourWatch = document.querySelector('.stopwatch__hours'),
    stopWatchInfo = document.querySelector('.tabsLink__span')

stopWatchBtn.addEventListener('click', () => {
    if (stopWatchBtn.innerHTML == 'start') {
        stopWatchBtn.innerHTML = 'stop'
        stopWatchInfo.classList.add('active')
        let i = 0
        setTimeout(() => {
            stopWatch(stopWatchBtn, i)
        }, 1000);
    } else if (stopWatchBtn.innerHTML == 'stop') {
        stopWatchBtn.innerHTML = 'reset'
        stopWatchInfo.classList.remove('active')
        stopWatchInfo.classList.add('active_clear')
    } else {
        stopWatchBtn.innerHTML = 'start'
        stopWatchInfo.classList.remove('active_clear')
        secondWatch.innerHTML = 0
        minuteWatch.innerHTML = 0
        hourWatch.innerHTML = 0
    }
})


function stopWatch(element, i) {
    if (element.innerHTML == 'stop') {
        if (i == 60) {
            i = 0
            secondWatch.innerHTML = i
            if (minuteWatch.innerHTML == 60) {
                minuteWatch.innerHTML = 0
                hourWatch.innerHTML++
            } else {
                minuteWatch.innerHTML++
            }
        } else {
            i++
            secondWatch.innerHTML = i
        }
        setTimeout(() => {
            stopWatch(element, i)
        }, 1000);
    }
}