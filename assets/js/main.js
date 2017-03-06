var aCelcius = document.getElementById('aCelcius');
var aFahrenheit = document.getElementById('aFahrenheit');

aCelcius.onclick = function() {
	var valorF = document.getElementById('Fahrenheit').value;
	var totalC = (valorF - 32) * (5/9);
	document.getElementById('Celsius').value = totalC;
}

aFahrenheit.onclick=function(){
	var valorC = document.getElementById('Celsius').value;
	var totalF =   ((9/5) * valorC) + 32;
	document.getElementById('Fahrenheit').value = totalF;
}