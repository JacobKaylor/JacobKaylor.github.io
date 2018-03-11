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