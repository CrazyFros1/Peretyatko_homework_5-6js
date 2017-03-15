var x = 0;                                                              
var y = 0;
var z = 0;
var m = 0;

var clickButton = false;                                                
var timerId;                                                             
var msTimerId;

var ms = document.querySelector('.timer__ms');                          
var sec = document.querySelector('.timer__sec');
var min = document.querySelector('.timer__min');
var hour = document.querySelector('.timer__hour');
var startButton = document.querySelector('.timer__start-button');
var clearButton = document.querySelector('.timer__clear-button');

startButton.addEventListener('click', timer);                           
clearButton.addEventListener('click', clear);

function clear() {                                                      
    x = -1;
    y = -1;
    z = -1;
    m = -1;
    msTimer();
    secTimer();
    minTimer();
    hourTimer();
}

function timer () {                                                     
    if (clickButton == false) {
        timerId = setInterval(secTimer, 1000);
        msTimerId = setInterval(msTimer, 0);
        clickButton = true;
        startButton.innerHTML = 'Stop';
    } else {
        clickButton = false;
        clearInterval(timerId);
        clearInterval(msTimerId);
        startButton.innerHTML = 'Start';
    }
}

function msTimer() {                                                     
    m++;
    if (m < 10) {
        ms.innerHTML = '00' + m;
    } else if (m < 100) {
        ms.innerHTML = '0' + m;
    } else if (m == 1000) {
        m = 0;
        ms.innerHTML = '00' + m;
    } else {
        ms.innerHTML = m;
    }
}

function secTimer() {                                                   
    x++;                                                                
    if (x < 10) {                                                       
        sec.innerHTML = '0' + x;
    } else if (x == 60) {
        x = 0;
        sec.innerHTML = '0' + x;
        minTimer();                                                      
    } else {
        sec.innerHTML = x;
    }
}

function minTimer() {                                                   
    y++;
    if (y < 10) {
        min.innerHTML = '0' + y + ':';
    } else if (y == 60) {
        y = 0;
        min.innerHTML = '0' + y + ':';
        hourTimer();
    } else {
        min.innerHTML = y + ':';
    }
}

function hourTimer() {                                                  
    z++;
    if (z < 10) {
        hour.innerHTML = '0' + z + ':';
    } else  if (z == 24) {
        z = 0;
        hour.innerHTML = '0' + z + ':';
    } else {
        hour.innerHTML = z + ':';
    }
}