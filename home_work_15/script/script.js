const formNode = document.querySelector("#addForm");

const listOfName = [];

formNode.addEventListener("submit", (event) => {
  event.preventDefault();
  const { name, lastName, age } = event.target;

  const person = {
    name: name.value,
    lastName: lastName.value,
    age: age.value,
  };
  listOfName.push(person);

  rerender();
  console.log(listOfName);
  event.target.reset();
});

const randomNumber = Math.floor((Math.random() * (100 - 1 +1)+1));
console.log(randomNumber);

// const randomNumber1 = Math.round((Math.random() * (255 - 25 +1)+25)); 
// const randomNumber2 = Math.round((Math.random() * (255 - 25 +1)+25));
// const randomNumber3 = Math.round((Math.random() * (255 - 25 +1)+25));
// console.log(randomNumber1);
// const color = `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`;
// console.log(color);

function getPerson(name, lastName, age) {
  const container = document.createElement("div");
  const nameNote = document.createElement("p");
  const lastNameNote = document.createElement("p");
  const ageNote = document.createElement("p");

  nameNote.innerText = "Name: " + name;
  lastNameNote.innerText = "Last name: " + lastName;
  ageNote.innerText = "Age: " + age;

  container.classList.add("item");
  container.style.border = "0px solid white";
  container.style.margin = "5px auto";
  container.style.display = "flex";
  container.style.justifyContent = "space-between";
  container.style.alignItems = "flex-end";
  container.style.padding = "25px";


  const bgColor = (randomNumber < 33) ? "#1abc9c" : (randomNumber > 33) ? "#3498db" : "#e74c3c";
  container.style.background = bgColor;
  container.append(nameNote, lastNameNote, ageNote);
  return container;
}

const btnNode = document.querySelector("button");
setInterval(() => {btnNode.classList.toggle('btn')}, 400);

function rerender() {
  const container = document.querySelector("#containerPerson");
  container.innerText = "";
  listOfName.forEach(({ name, lastName, age }) =>
    container.append(getPerson(name, lastName, age))
  );
}

/* container.style.backgroundColor: Устанавливает или возвращает цвет фона элемента. Может быть установлен в формате цвета (например, "#RRGGBB" или "rgb(255, 0, 0)").

container.style.color: Устанавливает или возвращает цвет текста внутри элемента.

container.style.fontFamily: Устанавливает или возвращает семейство шрифта для текста внутри элемента.

container.style.fontSize: Устанавливает или возвращает размер шрифта для текста внутри элемента. Может быть установлен в пикселях, процентах и т.д.

container.style.border: Устанавливает или возвращает стиль, ширину и цвет границы элемента в одной строке.

container.style.padding: Устанавливает или возвращает внутренний отступ элемента.

container.style.margin: Устанавливает или возвращает внешний отступ элемента.

container.style.display: Устанавливает или возвращает режим отображения элемента (например, "block", "inline", "none").

container.style.position: Устанавливает или возвращает тип по */
