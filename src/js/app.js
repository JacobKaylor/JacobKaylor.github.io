function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
const modal = document.getElementById('myModal');
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
function show()
{
if(document.getElementById('expand').style.display == 'none'){
  document.getElementById('expand').style.display = 'block';
}else{
  document.getElementById('expand').style.display = 'none';
}
}
function show1()
{
if(document.getElementById('expand1').style.display == 'none'){
  document.getElementById('expand1').style.display = 'block';
}else{
  document.getElementById('expand1').style.display = 'none';
}
}
function show2()
{
if(document.getElementById('expand2').style.display == 'none'){
  document.getElementById('expand2').style.display = 'block';
}else{
  document.getElementById('expand2').style.display = 'none';
}
}
let slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    let i;
    const x = document.getElementsByClassName("jacob-photo");
    if (n > x.length) {slideIndex = 1} 
        if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}