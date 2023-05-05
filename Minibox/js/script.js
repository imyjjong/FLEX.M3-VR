const item = document.getElementById("js--item");
const itemGrabbed = document.getElementById("js--item--grabbed");
itemGrabbed.setAttribute("visible",false);
let grabbed = false;

item.onmouseenter = function(){
    if(item.getAttribute("visible") === true){
    item.setAttribute("visible",false);
    itemGrabbed.setAttribute("visible", true);
    cursorcone.setAttribute("visible", false);
    cone.setAttribute("visible", true);
    grabbed = true;
    }
    canIChopWood = false;
}

const yellowSpheres = document.getElementsByClassName("js--sphere");
const invisibleBox = document.getElementById("js--invisible--box");

for (let i = 0; i < yellowSpheres.length; i++){
    yellowSpheres[i].onmouseenter = function(){
        if(yellowSpheres[i].getAttribute("visible") === false || grabbed === false)
        {
            return;
        }
        let position = yellowSpheres[i].getAttribute("position");
        position.y = position.y + 1;
        yellowSpheres[i].setAttribute("visible", false);
        invisibleBox.setAttribute("position", position);
        invisibleBox.setAttribute("visible", true);
        itemGrabbed.setAttribute("visible", false);
        grabbed = false;
    }
}

const trees = document.getElementsByClassName("js--tree");
const cone = document.getElementById("js--cone");
const cursorcone = document.getElementById("js--cursorcone");
let wood = 0;

cone.onmouseenter = function(){
    if(cone.getAttribute("visible") === true){
    cone.setAttribute("visible", false);
    cursorcone.setAttribute("visible", true);
    itemGrabbed.setAttribute("visible", false);
    if(invisibleBox.getAttribute("visible") === false){
        item.setAttribute("visible",true);
    }
    canIChopWood = true;
}
}

let canIChopWood = false;

for (let i = 0; i < trees.length; i++){
    trees[i].onmouseenter = function(){
        if(trees[i].getAttribute("visible") === true && canIChopWood === true){
        trees[i].setAttribute("visible", false);
        wood = wood + 1;
        document.getElementById("js--wood").innerText = wood;
        }
    }
}

const castle = document.getElementsByClassName("js--castle");
let stone = 0;

for (let i = 0; i < castle.length; i++){
    castle[i].onmouseenter = function(){
        if(castle[i].getAttribute("visible") === true && canIChopWood === true){
        castle[i].setAttribute("visible", false);
        stone = stone + 1;
        document.getElementById("js--stone").innerText = stone;
        }
    }
}