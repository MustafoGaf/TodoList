let btn = document.querySelector(".btn");
let box = document.querySelector(".box");
let list = document.querySelector(".list");
let input = document.querySelector("#inputList");
let btnAdd = document.querySelector(".BtnAdd");

let data = [];

if (data.length == 0) {
  list.innerHTML = "<h1>Пока нет дело</h1>";
}
function addList() {
  list.innerHTML = "";
  if (data.length == 0) {
    list.innerHTML = "<h1>Пока нет дело</h1>";
  }
  data.forEach((el, i) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    p.innerHTML = el.todo;
    p.style.fontSize = "20px";
    p.style.padding = "0";
    let delBtn = document.createElement("button");
    delBtn.innerHTML = "Удалить";
    delBtn.classList.add("delBtn");
    delBtn.onclick = () => {
      modal(el);
    };
    div.classList.add("listDiv");
    div.appendChild(p);
    div.appendChild(delBtn);
    list.appendChild(div);
  });
}

btnAdd.onclick = () => {
  if (input.value !== "") {
    let newObj = {
      todo: input.value,
      id: new Date().getTime(),
      
    };
    data.unshift(newObj);
    addList();
  } else {
    alert("Введите дело хотя бы один слова!");
  }
  input.value = "";
};

function modal(el) {
  let div = document.createElement("div");
  div.classList.add("divPosi");
  let h3 = document.createElement("h3");
  h3.innerHTML = `Действытельно вы хотите удалить дело <span>${el.todo}</span>`;
  let ok = document.createElement("button");
  ok.innerHTML = "Удалить";
  ok.onclick = () => {
    data = data.filter((obj) => obj.id !== el.id);
    addList();
  };
  let ex = document.createElement("button");
  ex.innerHTML = "Отмена";
  ex.onclick = () => {
    addList();
  };
  div.append(h3, ok, ex);
  list.appendChild(div);
}
