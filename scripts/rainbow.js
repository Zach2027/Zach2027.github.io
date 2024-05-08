


let rainbowray = ["red", "orange", "tan", "rebeccapurple", "transparent"];

let ul = document.createElement("ul")
    
for (let i = 0; i < rainbowray.length; i++){
    let li = documnet.createElement("li");
    li.innerHTML = rainbowray[i];

    ul.appendChild(li);
}
document.body.appendChild(ul);