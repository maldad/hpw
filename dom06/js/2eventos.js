var btn = document.getElementById('boton1')
var parr1 = document.getElementById('parr1')
var inpt1 = document.getElementById('input1')

var f = function(oe){
  parr1.textContent = Number(parr1.textContent)
  + 1;}

var g = function(oe){
  inpt1.value = Number(inpt1.value) + 1;}

btn.addEventListener('click', f, false)
btn.addEventListener('click', g, false)
