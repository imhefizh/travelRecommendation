const jsonFile = "./travel_recommendation.json";

const input = document.getElementById("search");

const options = [
  {
    timeZone: "Australia/Sydney",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  },
  {
    timeZone: "Australia/Melbourne",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  },
  {
    timeZone: "Asia/Tokyo",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  },
  {
    timeZone: "America/Belem",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  },
  {
    timeZone: "Indian/Cocos",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  },
  {
    timeZone: "Europe/Prague",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  },
];
const sydney = new Date().toLocaleTimeString("en-US", options[0]);
const melb = new Date().toLocaleTimeString("en-US", options[1]);
const tokyo = new Date().toLocaleTimeString("en-US", options[2]);
const brazil = new Date().toLocaleTimeString("en-US", options[4]);
const india = new Date().toLocaleTimeString("en-US", options[5]);
const french = new Date().toLocaleTimeString("en-US", options[6]);

function searching() {
  //   console.log(input.value.toLowerCase());
  //   debugger;
  clearResult();
  if (
    input.value.toLowerCase() == "beach" ||
    input.value.toLowerCase() == "beaches"
  ) {
    document.getElementById("top-bar").style = "display: block; ";
    fetch(jsonFile)
      .then((response) => response.json())
      .then((data) => {
        for (let item in data) {
          if (item == "beaches") {
            for (let i = 0; i < data[item].length; i++) {
              const img = document.createElement("img");
              const name = document.createElement("h2");
              const description = document.createElement("p");
              const button = document.createElement("button");
              const time = document.createElement("h5");
              time.innerHTML = `Time : ${
                data[item][i].time == "french" ? french : brazil
              }`;
              button.innerHTML = "Visit";
              img.src = data[item][i].imageUrl;
              name.innerHTML = data[item][i].name;
              description.innerHTML = data[item][i].description;
              const div = document.createElement("div");
              div.appendChild(img);
              div.appendChild(name);
              div.appendChild(description);
              div.appendChild(button);
              div.appendChild(time);
              document
                .getElementById("recommendation-container")
                .appendChild(div);
            }
          }
        }
      })
      .catch((error) => console.error("Error:", error));
  } else if (
    input.value.toLowerCase() == "temples" ||
    input.value.toLowerCase() == "temple"
  ) {
    document.getElementById("top-bar").style = "display: block; ";
    fetch(jsonFile)
      .then((response) => response.json())
      .then((data) => {
        for (let item in data) {
          if (item == "temples") {
            for (let i = 0; i < data[item].length; i++) {
              const img = document.createElement("img");
              const name = document.createElement("h2");
              const description = document.createElement("p");
              const button = document.createElement("button");
              const time = document.createElement("h5");
              time.innerHTML = `Time : ${
                data[item][i].time == "sydney" ? sydney : india
              }`;
              button.innerHTML = "Visit";
              img.src = data[item][i].imageUrl;
              name.innerHTML = data[item][i].name;
              description.innerHTML = data[item][i].description;
              const div = document.createElement("div");
              div.appendChild(img);
              div.appendChild(name);
              div.appendChild(description);
              div.appendChild(button);
              div.appendChild(time);
              document
                .getElementById("recommendation-container")
                .appendChild(div);
            }
          }
        }
      })
      .catch((error) => console.error("Error:", error));
  } else if (
    input.value.toLowerCase() == "countries" ||
    input.value.toLowerCase() == "country"
  ) {
    document.getElementById("top-bar").style = "display: block; ";
    // debugger;
    fetch(jsonFile)
      .then((response) => response.json())
      .then((data) => {
        for (let item in data) {
          if (item == "countries") {
            for (let i = 0; i < data[item].length; i++) {
              for (let j = 0; j < data[item][i]["cities"].length; j++) {
                const img = document.createElement("img");
                const name = document.createElement("h2");
                const description = document.createElement("p");
                const button = document.createElement("button");
                const time = document.createElement("h5");
                time.innerHTML = `Time : ${
                  data[item][i]["cities"][j].time == "sydney"
                    ? sydney
                    : data[item][i]["cities"][j].time == "melb"
                    ? melb
                    : data[item][i]["cities"][j].time == "tokyo"
                    ? tokyo
                    : data[item][i]["cities"][j].time == "brazil"
                    ? brazil
                    : "-"
                }`;
                button.innerHTML = "Visit";
                img.src = data[item][i]["cities"][j].imageUrl;
                name.innerHTML = data[item][i]["cities"][j].name;
                description.innerHTML = data[item][i]["cities"][j].description;
                const div = document.createElement("div");
                div.appendChild(img);
                div.appendChild(name);
                div.appendChild(description);
                div.appendChild(button);
                div.appendChild(time);
                document
                  .getElementById("recommendation-container")
                  .appendChild(div);
              }
            }
          }
        }
      })
      .catch((error) => console.error("Error:", error));
  } else if (input.value.toLowerCase() == "australia") {
    document.getElementById("top-bar").style = "display: block; ";
    fetch(jsonFile)
      .then((response) => response.json())
      .then((data) => {
        for (let item in data) {
          if (item == "countries") {
            for (let j = 0; j < data[item][0]["cities"].length; j++) {
              const img = document.createElement("img");
              const name = document.createElement("h2");
              const description = document.createElement("p");
              const button = document.createElement("button");
              // const time = document.createElement("h5");
              // time.innerHTML = `Time : ${
              //   data[item][0][j].time == "sydney" ? sydney : melb
              // }`;
              button.innerHTML = "Visit";
              img.src = data[item][0]["cities"][j].imageUrl;
              name.innerHTML = data[item][0]["cities"][j].name;
              description.innerHTML = data[item][0]["cities"][j].description;
              const div = document.createElement("div");
              div.appendChild(img);
              div.appendChild(name);
              div.appendChild(description);
              div.appendChild(button);
              // div.appendChild(time);
              document
                .getElementById("recommendation-container")
                .appendChild(div);
            }
          }
        }
      })
      .catch((error) => console.error("Error:", error));
  } else if (input.value.toLowerCase() == "japan") {
    document.getElementById("top-bar").style = "display: block; ";
    fetch(jsonFile)
      .then((response) => response.json())
      .then((data) => {
        for (let item in data) {
          if (item == "countries") {
            for (let j = 0; j < data[item][1]["cities"].length; j++) {
              const img = document.createElement("img");
              const name = document.createElement("h2");
              const description = document.createElement("p");
              const button = document.createElement("button");
              // const time = document.createElement("h5");
              // time.innerHTML = `Time : ${
              //   data[item][0][j].time == "sydney" ? sydney : melb
              // }`;
              button.innerHTML = "Visit";
              img.src = data[item][1]["cities"][j].imageUrl;
              name.innerHTML = data[item][1]["cities"][j].name;
              description.innerHTML = data[item][1]["cities"][j].description;
              const div = document.createElement("div");
              div.appendChild(img);
              div.appendChild(name);
              div.appendChild(description);
              div.appendChild(button);
              // div.appendChild(time);
              document
                .getElementById("recommendation-container")
                .appendChild(div);
            }
          }
        }
      })
      .catch((error) => console.error("Error:", error));
  } else if (input.value.toLowerCase() == "brazil") {
    document.getElementById("top-bar").style = "display: block; ";
    fetch(jsonFile)
      .then((response) => response.json())
      .then((data) => {
        for (let item in data) {
          if (item == "countries") {
            for (let j = 0; j < data[item][2]["cities"].length; j++) {
              const img = document.createElement("img");
              const name = document.createElement("h2");
              const description = document.createElement("p");
              const button = document.createElement("button");
              // const time = document.createElement("h5");
              // time.innerHTML = `Time : ${
              //   data[item][0][j].time == "sydney" ? sydney : melb
              // }`;
              button.innerHTML = "Visit";
              img.src = data[item][2]["cities"][j].imageUrl;
              name.innerHTML = data[item][2]["cities"][j].name;
              description.innerHTML = data[item][2]["cities"][j].description;
              const div = document.createElement("div");
              div.appendChild(img);
              div.appendChild(name);
              div.appendChild(description);
              div.appendChild(button);
              // div.appendChild(time);
              document
                .getElementById("recommendation-container")
                .appendChild(div);
            }
          }
        }
      })
      .catch((error) => console.error("Error:", error));
  } else {
    alert(
      "Choose between beach(es), temple(s), or country(es), australia, japan, or brazil"
    );
  }
}

function clearResult() {
  document.getElementById("recommendation-container").innerHTML = "";
  document.getElementById("top-bar").style = "display: none";
}

document.getElementById("search-form").onsubmit = (event) => {
  event.preventDefault();
  searching();
};

document.getElementById("searchicon").onclick = () => searching();

document.getElementById("search-form").onreset = () => clearResult();
