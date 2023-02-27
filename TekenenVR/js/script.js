const redSphere = document.getElementById("js--sphere--red");
const blueSphere = document.getElementById("js--sphere--blue");
const yellowSphere = document.getElementById("js--sphere--yellow");

const cursor = document.getElementById("js--cursor");

redSphere.onmouseleave = function(){
    cursor.setAttribute("color", "red");
}

blueSphere.onmouseleave = function(){
    cursor.setAttribute("color", "blue");
}

yellowSphere.onmouseleave = function(){
    cursor.setAttribute("color", "yellow");
}

const box1 = document.getElementById("js--box1");
const box2 = document.getElementById("js--box2");
const box3 = document.getElementById("js--box3");
const box4 = document.getElementById("js--box4");
const box5 = document.getElementById("js--box5");
const box6 = document.getElementById("js--box6");
const box7 = document.getElementById("js--box7");
const box8 = document.getElementById("js--box8");
const box9 = document.getElementById("js--box9");

box1.onmouseenter = function(){
    box1.setAttribute("color", cursor.getAttribute("color"));
}

box2.onmouseenter = function(){
    box2.setAttribute("color", cursor.getAttribute("color"));
}

box3.onmouseenter = function(){
    box3.setAttribute("color", cursor.getAttribute("color"));
}

box4.onmouseenter = function(){
    box4.setAttribute("color", cursor.getAttribute("color"));
}

box5.onmouseenter = function(){
    box5.setAttribute("color", cursor.getAttribute("color"));
}

box6.onmouseenter = function(){
    box6.setAttribute("color", cursor.getAttribute("color"));
}

box7.onmouseenter = function(){
    box7.setAttribute("color", cursor.getAttribute("color"));
}

box8.onmouseenter = function(){
    box8.setAttribute("color", cursor.getAttribute("color"));
}

box9.onmouseenter = function(){
    box9.setAttribute("color", cursor.getAttribute("color"));
}