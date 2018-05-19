let startBtn = document.querySelector('.start'),
    breakBtn = document.querySelector('.break'),
    resetBtn = document.querySelector('.reset'),
    minutes = document.querySelector('.minutes'),
    seconds = document.querySelector('.seconds'),
    title = document.querySelector('#title'),
    alarm = new Audio('http://www.orangefreesounds.com/wp-content/uploads/2016/06/Ringing-clock.mp3?_=1'),
    pomodoro = 25,
    rest = 5,
    flag,
    countInt;
startBtn.addEventListener('click', startPomodoro);
breakBtn.addEventListener('click', startRest);
resetBtn.addEventListener('click', reset);

function startPomodoro() {
  clearInterval(countInt);
  countDown(pomodoro, 0);
  flag = true;
  title.innerHTML = 'Работать!!!';
}

function startRest() {
  clearInterval(countInt);
  countDown(rest, 0);
  flag = false;
  title.innerHTML = 'Можно отдохнуть!';
}

function reset() {
  clearInterval(countInt);
  pomodoro = 25;
  rest = 5;
  minutes.innerHTML = getZero(pomodoro);
  seconds.innerHTML = getZero(0);
  title.innerHTML = 'Таймер Помодоро';
}

function countDown(m, s) {
  countInt = setInterval(function(){
    if (m == 0 && s == 0) {
      clearInterval(countInt);
      if (flag) {
        countDown(rest, 0);
        title.innerHTML = 'Можно отдохнуть!';
        flag = false;
      } else {
        countDown(pomodoro, 0);
        title.innerHTML = 'Работать!!!';
        flag = true;
      } 
      alarm.play();
    } else if (s!= 0) {
      s -= 1;
    } else if (s == 0) {
      s = 59;
      m -=1;
    }
    minutes.innerHTML = getZero(m);
    seconds.innerHTML = getZero(s);
  }, 1000);
}

function getZero(num) {
  if (num >=0 && num <10) {
    return '0' + num;
  } else {
    return num;
  }
}

