var p1= Math.floor((Math.random()*6))+1;
var p2= Math.floor((Math.random()*6))+1;

var imgp1=document.querySelectorAll("img")[0];
var imgp2=document.querySelectorAll("img")[1];

var src="dice"+p1+".png";
var src2="dice"+p2+".png";
var imgsrc="images/"+src;
var imgsrc2="images/"+src2;

imgp1.setAttribute("src",imgsrc);
imgp2.setAttribute("src",imgsrc2);

if(p1>p2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!!"
}
else if(p1<p2){
    document.querySelector("h1").innerHTML="Player 2 wins!!🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw!!"

}
