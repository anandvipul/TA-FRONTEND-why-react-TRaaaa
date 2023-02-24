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

  createElement(type, para) {
    let rootElem = document.createElement(`${type}`);
    // console.log(rootElem);
    for (let key in para) {
      if (key == "classes") {
        para["classes"].forEach((item) => {
          rootElem.classList.add(item);
        });
      }
      if (key == "attribute") {
        for (let attribute in para["attribute"]) {
          rootElem.setAttribute(
            `${attribute}`,
            para["attribute"][`${attribute}`]
          );
        }
      }
      if (key == "event") {
        for (let events in para["event"]) {
          rootElem.addEventListener(`${events}`, (event) => {
            para["event"][`${events}`](event);
          });
        }
      }
      if (key == "innerText" || key == "innerHTML") {
        key == "innerText"
          ? (rootElem.innerText = para["innerText"])
          : (rootElem.innerHTML = para["innerHTML"]);
      }
      if (key == "children") {
        for (let item of para["children"]) {
          // console.log(item);
          rootElem.append(item);
        }
      }
    }
    return rootElem;
  }

  renderUI(item) {
    let Article = this.createElement("article", {
      classes: ["movie-item"],
      attribute: {
        "data-id": item.id,
      },
      children: [
        this.createElement("div", {
          classes: ["movie-name"],
          innerText: `${item.name}`,
        }),
        this.createElement("div", {
          classes: [
            "watched-status",
            `${item.isWatched ? "watched" : "to-watch"}`,
          ],
          event: {
            click: (event) => {
              event.preventDefault();
              let id = event.target.parentNode.getAttribute("data-id");
              toggle(id);
              console.log();
            },
          },
          innerText: `${item.isWatched ? "Watched" : "To Watch"}`,
        }),
      ],
    });

    // let Article = document.createElement("article");
    // Article.classList.add("movie-item");
    // Article.setAttribute("data-id", item.id);
    // let divName = document.createElement("div");
    // divName.classList.add("movie-name");
    // divName.innerText = item.name;
    // let divStatus = document.createElement("div");
    // divStatus.classList.add("watched-status");
    // divStatus.addEventListener("click", (event) => {
    //   event.preventDefault();
    //   let id = event.target.parentNode.getAttribute("data-id");
    //   toggle(id);
    //   console.log();
    // });
    // if (item.isWatched) {
    //   divStatus.innerText = "Watched";
    //   divStatus.classList.add("watched");
    // } else {
    //   divStatus.innerText = "To Watch";
    //   divStatus.classList.add("to-watch");
    // }

    // Article.appendChild(divName);
    // Article.appendChild(divStatus);

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
  console.log(components);
  components.map((item) => {
    root.append(item);
  });
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
