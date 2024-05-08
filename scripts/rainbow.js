


let rainbowray = ["red", "orange", "tan", "rebeccapurple", "transparent"];

let ul = document.createElement("ul")
    
for (let i = 0; i < rainbowray.length; i++){
    let li = document.createElement("li");
    li.innerHTML = rainbowray[i];

    li.style.color(rainbowray[i]);

    ul.appendChild(li);
}
document.body.appendChild(ul);