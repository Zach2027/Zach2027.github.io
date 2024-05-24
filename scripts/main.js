let btn = document.querySelector(".change");

let bigPeople = ["/images/mh-3-23-coleman-1648059910.png","/images/flat,750x,075,f-pad,750x1000,f8f8f8.jpg","/images/download.webp","/images/Muscles-worked-by-machine-chest-fly.webp"]

function change(){
    btn.setAttribute("src",bigPeople[rand(bigPeople.length)]);
}

function rand(num){
    return Math.floor( Math.random() * num )
}