
//hide results div
document.querySelector("#results").style.display = "none";

//hide loader
document.querySelector("#loader").style.display = "none";


let amount =  document.querySelector('#amount');
let saving = document.querySelector('#interest');
let months = document.querySelector('#months');


let monthlyPayment = document.querySelector('#monthly-payment');
let totalPayment = document.querySelector('#total-payment');
let totalSave = document.querySelector('#total-interest');

document.querySelector('#red').addEventListener('click', calculate);



function calculate(e){
	//display load
 	load();
	
	let amountValue = parseInt(amount.value);
	let monthsVal = parseInt(months.value);
	 
	 
	monthlyPayment.value  = parseFloat((amountValue/5 + amountValue) / monthsVal).toFixed(2);
	totalPayment.value = parseFloat(amountValue/5 + amountValue).toFixed(2);
	 
	//setTimeout(load, 3000);
 
	//setTimeout(results, 3000);
	
	 
	totalSave.value = amountValue/5;
	 
	
	//hide results
	document.querySelector("#results").style.display = "none";
	
	//display results
	setTimeout(results, 2000);
	
	 
	e.preventDefault();
}

function load(){
	document.querySelector("#loader").style.display = "block";
	 
}
 
function results(){
	document.querySelector("#loader").style.display = "none";
	document.querySelector("#results").style.display = "block";
} 