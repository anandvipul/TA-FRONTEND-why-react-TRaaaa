let btn = document.querySelectorAll(".btn");
let input = document.querySelector("input");
let selected = document.querySelector(".selected");
let root = document.querySelector(".movie-item-list");
let watchedStatus = document.querySelectorAll(".watched-status");

let count = 0;
class Movie {
  constructor(name, watched, id) {
    this.name = name;
    this.isWatched = watched;
    this.id = id;
  }

  switch() {
    this.isWatched = !this.isWatched;
  }
}

class UserInterface {
  constructor(data) {
    this.data = data;
  }

  renderUI(item) {
    let Article = document.createElement("article");
    Article.classList.add("movie-item");
    Article.setAttribute("data-id", item.id);
    let divName = document.createElement("div");
    divName.classList.add("movie-name");
    divName.innerText = item.name;
    let divStatus = document.createElement("div");
    divStatus.classList.add("watched-status");
    divStatus.addEventListener("click", (event) => {
      event.preventDefault();
      let id = event.target.parentNode.getAttribute("data-id");
      toggle(id);
      console.log();
    });
    if (item.isWatched) {
      divStatus.innerText = "Watched";
      divStatus.classList.add("watched");
    } else {
      divStatus.innerText = "To Watch";
      divStatus.classList.add("to-watch");
    }

    Article.appendChild(divName);
    Article.appendChild(divStatus);

    return Article;
  }

  render() {
    return this.data.map((item) => this.renderUI(item));
  }
}

let data = [];

Array.from(btn).forEach((item) =>
  item.addEventListener("click", (event) => {
    Array.from(btn).forEach((item) => {
      item.classList.remove("selected");
    });
    event.target.classList.toggle("selected");
  })
);

function toggle(id) {
  data.forEach((item) => {
    if (item.id == id) {
      item.switch();
      renderUI();
    }
  });
}

function renderUI() {
  root.innerHTML = "";
  let UI = new UserInterface(data, root);
  let components = UI.render(data);
  components.map((item) => {
    root.append(item);
  });
  console.log(UI.render());
  count += 1;
}

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    let watched = false;
    if (selected.classList.contains("selected")) {
      watched = true;
    }

    event.preventDefault();
    data.push(new Movie(event.target.value, watched, count));
    renderUI();
  }
});
