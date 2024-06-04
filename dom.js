/*var element;
var et;
element = document.all;
console.log(element);
var j;
j = document.links;
console.log(j);
var k;
k =document.getElementById("header").getAttribute("style");
console.log(k);
/*document.querySelector("#header").style.backgroundColor ="pink";
document.querySelector("#header").style.color ="purple";

et =document.querySelector("#header").style.border;
console.log(et);
document.querySelector("#header").className ="abc";

et =document.querySelector("#header").className;
console.log(et);
document.getElementById("header").onclick=abc;
function abc() {
document.getElementById("header").style.background="lightgreen";
    
}
document.getElementById("inner").parentElement.style.backgroundColor="lightgreen";
var t=document.body.parentElement;
console.log(t);*/
var a=document.getElementById("inner").childNodes;
document.getElementById("inner").children[1].style.background="red";
console.log(a);
var b=document.getElementById("inner").firstElementChild;
document.getElementById("inner").firstElementChild.style.color="blue";
console.log(b);
var c=document.getElementById("inner").lastElementChild;
document.getElementById("inner").lastElementChild.style.background="lightgreen";
console.log(c);
var c
var d=document.getElementById("child").nextElementSibling;
document.getElementById("child").nextElementSibling.style.background="yellow";
console.log(d);