nosa=[];
function submit(){
var n1 =document.getElementById("tn1").value;
var n2 =document.getElementById("tn2").value;
var n3 =document.getElementById("tn3").value;
var n4 =document.getElementById("tn4").value;

nosa.push(n1);
nosa.push(n2);
nosa.push(n3);
nosa.push(n4);

console.log(nosa);

document.getElementById("dn").innerHTML=nosa;
document.getElementById("sumbit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sorting() 
{
     nosa.sort();
      console.log(nosa);
       document.getElementById("dn").innerHTML = nosa; }
