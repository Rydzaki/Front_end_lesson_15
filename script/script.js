const formNode = document.querySelector("#addForm");

// const priorValues = {
//   0: "Low",
//   1: "Medium",
//   2: "High",
// };

const todos = [];

formNode.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("submited");
  const { title, prior } = event.target; /* деструктуризация так короче */
  console.log(title.value); // это свойство элемента формы в HTML, которое содержит текущее значение введенное пользователем или выбранное пользователем в поле ввода. Это свойство чаще всего используется с элементами <input>, <select> и <textarea>
  // console.log(prior.value);
  const todo = {
    title: title.value,
    prior: prior.value
  };
  todos.push(todo);
  rerender();
  console.log(todos);
  event.target.reset();
});

function getTodo(title, prior) {
  /* получает 2 значения */

  const container = document.createElement("div");
  const titleNode = document.createElement("p");
  const priorNode = document.createElement("p");

  titleNode.innerText = title;
  // priorNode.innerText = prior; // комментируем чтобы убрать вывод параграфа, но сохранить значение

  container.classList.add("item"); // добавили класс елементу верски (div)

  container.append(titleNode/* , priorNode */);

  const bgColors = {
    0: "#1abc9c",
    1: "#f39c12",
    2: "#d35400"
}

  container.style.backgroundColor = bgColors[prior];

  return container;
}

function rerender() {
  const container = document.querySelector("#todoContainer");
  container.innerText = "";
  todos.forEach(({title, prior }) => container.append(getTodo(title, prior)));
}

/* const targetNode = document.querySelector(".target")
//inline указание стилей */

/* targetNode.style.backgroundColor = "red";
targetNode.style.width = "400px"; */


// style свойства ноды с множеством стилей

// cвойство ноды с множеством свойств стилей для указания им значений
// targetNode.style

// backgroundColor 
// при указании стилей через inline в JS используется camel case так как - не является допустимым символом 
// в имени переменной/свойства

/* targetNode.setAttribute("class", "marked target");
targetNode.classList.add("marked") */ //  classList свойство с набором метотодовв для взаимодействия с КЛАССАМИ


/* setInterval(() => {
  targetNode.classList.toggle('marked')
}, 500) */


// classList - свойство с набором методов для взаимодействия с классами
// targetNode.classList

// add - добавление класса
// remove - удалить класс
// toggle - удаляет класс, если он есть или добавляет, если его нет

