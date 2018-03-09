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