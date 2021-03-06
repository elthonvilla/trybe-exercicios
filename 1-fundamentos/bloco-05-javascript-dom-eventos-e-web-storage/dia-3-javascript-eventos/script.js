function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercicio 1

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const daysContainer = document.querySelector("#days");
for (let i = 0; i < dezDaysList.length; i += 1) {
  let day = dezDaysList[i];
  let dayItem = document.createElement("li");
  dayItem.innerText = day;
  dayItem.className = "day";
  if (day == 24 || day == 25 || day == 31) {
    dayItem.className += " holiday";
  }
  if (day == 4 || day == 11 || day == 18 || day == 25) {
    dayItem.className += " friday";
  }
  daysContainer.appendChild(dayItem);
}

// Exercicio 2
let btnHoliday = document.createElement("button");
let btnContainer = document.querySelector(".buttons-container");

function holidayCreator(Feriados) {
  btnHoliday.id = "btn-holiday";
  btnHoliday.innerText = Feriados;
  btnContainer.appendChild(btnHoliday);
}
holidayCreator("Feriados"); //teste de validacao da funcao

// Exercicio 3
let arrayHolidays = document.getElementsByClassName("holiday");

btnHoliday.addEventListener("click", function () {
  for (let i = 0; i < arrayHolidays.length; i += 1) {
    let a = arrayHolidays[i];
    if (a.style.backgroundColor === "") {
      a.style.backgroundColor = "red";
    } else {
      a.style.backgroundColor = "";
    }
  }
});

// Exercicio 4
let btnFriday = document.createElement("button");

function fridayCreator(Sextas) {
  btnFriday.id = "btn-friday";
  btnFriday.innerText = Sextas;
  btnContainer.appendChild(btnFriday);
}
fridayCreator("Sexta-Feira"); //teste de validacao da funcao

// Exercicio 5
let arrayFridays = document.getElementsByClassName("friday");
let arrayFridayDays = [4, 11, 18, 25];

btnFriday.addEventListener("click", function () {
  for (let i = 0; i < arrayFridays.length; i += 1) {
    let a = arrayFridays[i];
    if (a.innerText !== "SEXTOU") {
      a.innerText = "SEXTOU";
    } else {
      a.innerText = arrayFridayDays[i];
    }
  }
});

// Exercicio 6
const day0 = document.getElementsByClassName("day")[0];

// day0.addEventListener("mouseover", function (){
// day0.style.fontSize ='2em';
// })
// day0.addEventListener("mouseout", function (){
// day0.style.fontSize = '';
// })
// entendi o conceito do event.target graças a esse site https://www.w3schools.com/jsref/tryit.asp?filename=try_dom_event_target
daysContainer.addEventListener("mouseover", function (dente) {
  dente.target.style.fontSize = "2em";
});
daysContainer.addEventListener("mouseout", function (dente) {
  dente.target.style.fontSize = "";
});

// Exercicio 7
const myTaskMenu = document.querySelector("div.my-tasks");
function taskCreator (taskDescription) {
  let myTask = document.createElement('span');
  myTask.innerText = taskDescription;
  myTaskMenu.appendChild(myTask);
}
taskCreator ('Estudar muuuuuito');

// Exercicio 8
let mySub = document.createElement('div');
function taskSubtitle (cor) {
  //let mySub = document.createElement('div');
  mySub.className = 'task';
  mySub.style.backgroundColor = cor;
  myTaskMenu.appendChild(mySub);
}
taskSubtitle ('green');

// Exercicio 9 
  mySub.addEventListener("click", function(obj) {
    if (mySub.className !== 'task selected'){
      obj.target.className = 'task selected';
    } else {
      obj.target.className = 'task';
    }
  })

  // Exercicio 10
  
  daysContainer.addEventListener("click", function (event){
    let colorTaskSelected = document.querySelector(".selected").style.backgroundColor;
    let actualColor = event.target.style.backgroundColor;
    if (actualColor !== colorTaskSelected) {
      event.target.style.backgroundColor = colorTaskSelected;
    } else {
      event.target.style.backgroundColor = "";
    }
    
  })

