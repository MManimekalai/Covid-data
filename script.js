
var div = document.createElement("div");
div.style.margin = "100px";

var input = document.createElement("input");
input.setAttribute("type", "text");
input.style.width = "30%";
input.id = "countryname";

var button = document.createElement("button");
button.setAttribute("type", "button");
button.innerHTML = "Click me";
button.style.margin = "5px";
button.addEventListener("click", getdata);

var resultDiv = document.createElement("div");
div.append(input, button, resultDiv);
document.body.append(div);

async function getdata() {
  let res = document.getElementById("countryname").value;
  try {
    let res1 = await fetch(`https://api.covid19api.com/total/dayone/country/${res}`);
    let res2 = await res1.json();
    index = res2.length - 1;
    resultDiv.innerHTML = `
      <p>Active: ${res2[index].Active}</p>
      <p>Deaths: ${res2[index].Deaths}</p>
      <p>Recovered: ${res2[index].Recovered}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `Error: ${error.message}`;
  }
}
