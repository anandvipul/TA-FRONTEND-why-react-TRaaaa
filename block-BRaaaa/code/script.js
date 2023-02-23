let btn = document.querySelectorAll(".btn");
let input = document.querySelector("input");
let selected = document.querySelector(".selected");
let root = document.querySelector(".movie-item-list");
class Movie {
  constructor(name, watched) {
    this.name = name;
    this.isWatched = watched;
  }

  watched() {
    this.isWatched = true;
  }
}

class UserInterface {
  constructor(data) {
    this.data = data;
  }

  renderUI(item) {
    let Article = document.createElement("article");
    Article.classList.add("movie-item");
    let divName = document.createElement("div");
    divName.classList.add("movie-name");
    divName.innerText = item.name;
    let divStatus = document.createElement("div");
    divStatus.classList.add("watched-status");
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

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    let watched = false;
    if (selected.classList.contains("selected")) {
      watched = true;
    }

    event.preventDefault();
    data.push(new Movie(event.target.value, watched));
    root.innerHTML = "";
    let UI = new UserInterface(data, root);
    let components = UI.render(data);
    components.map((item) => {
      root.append(item);
    });
    console.log(UI.render());
  }
});
