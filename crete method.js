var newelement=document.createElement("h2");
var text=document.createTextNode("This is dom create methods");
var comment=document.createComment("this is a comment");
console.log(newelement);
console.log(text);
console.log(comment);
newelement.appendChild(text);
document.getElementById("test").appendChild(newelement);
document.getElementById("test").appendChild(comment);

console.log(newelement);
console.log(comment);
var target=document.getElementById("test");
target.insertBefore(newelement,target.childNodes[0]);
var target=document.getElementById("tests");
var newElement="<h2>This is heading</h2>";
target.insertAdjacentHTML("afterbegin",newElement);

var newElements=document.createElement("li");
var newText=document.createTextNode("gava");
newElements.appendChild(newText);
var targets=document.getElementById("list1");
var oldelement=targets.children[3];
targets.replaceChild(newElements,oldelement);
var targett=document.getElementById("list1").children[1];
var copy=targett.cloneNode(true);
document.getElementById("list2").appendChild(copy);
var parent=document.getElementById("test");
var trgt=document.getElementById("abc");
var find=parent.contains(trgt);
console.log(find);
var trgt=document.getElementById("test");
var find=trgt.hasAttribute("class");
console.log(find);
var trgt1=document.getElementById("list1").firstElementChild;
var trgt2=document.getElementById("list2").children[3];
var equal=trgt1.isEqualNode(trgt2);
console.log(equal);
function fnameFunction(e) {
    e.style.background="pink";
}
function blurFunction(e) {
    e.style.background="";
}
function inputFunction(e) {
    var x=e.value;
    document.getElementById("tst").innerHTML=x;
}
function changeFunction(e) {
    var x=e.value;
    document.getElementById("tst").innerHTML=x;

}
function submitFunction() {
alert("You are submited");
}
var a=0;
var c=setInterval(Anim,300);
function Anim(){
    a=a+10;
    if(a==300){
        clearInterval(c);
    }else{var t=document.getElementById("set");
    t.style.marginLeft=a+'px';
    t.style.width=a+'px';
t.style.backgroundColor='pink';}

}
var i=setTimeout(anm,5000);
function anm(){
    var t=document.getElementById("set");
    t.style.width="500px";
}
function stop(){
    clearInterval(i);
}
