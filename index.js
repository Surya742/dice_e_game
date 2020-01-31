var n= Math.random();
n=n*6;
n= Math.floor(n)+1;
// console.log(n);
// alert(n);

if(n===1){
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}
else if(n===2){
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if(n===3){
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if(n===4){
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if(n===5){
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else{
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}




var p= Math.random();
p=p*6;
p= Math.floor(p)+1;
if(p===1){
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}
else if(p===2){
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if(p===3){
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if(p===4){
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if(p===5){
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else{
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}


if(n===p){
    document.querySelector("h1").innerHTML= "<em>Draw</em>";
}
if(n>p){
    document.querySelector("h1").innerHTML= "<em>Player_1 wins</em>";
}
if(n<p){
    document.querySelector("h1").innerHTML= "<em>Player_2 wins</em>";
}