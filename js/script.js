const inputName = document.getElementById('name');
const inputDistance = document.getElementById('kilometers');
const inputAge = document.getElementById('age');

const btnGenerate = document.getElementById('btn-generate');
const btnReset = document.getElementById('btn-reset');

const eleTicket = document.querySelector('.ticket');
const outputName = document.getElementById('ticket-name');
const outputPrice = document.getElementById('ticket-price');

const pricePerKilometer = 0.21;

btnGenerate.addEventListener('click', function () {
	const distance = parseFloat(inputDistance.value);
	const age = inputAge.value;

	if (inputDistance.value != '' && !isNaN(distance) && inputName.value != '' && inputAge.value != 'label') {
		const basePrice = pricePerKilometer * distance;

		let discountRate;
		switch (age) {
			case 'minorenne':
				discountRate = 20;
				break;

			case 'standard':
				discountRate = 0;
				break;

			case 'senior':
				discountRate = 40;
				break;
		}

		// alternativa A
		let totalPrice = basePrice - basePrice * discountRate / 100;
		// totalPrice = parseFloat(totalPrice.toFixed(2));
		totalPrice = Math.round(totalPrice * 100) / 100;

		console.log('Il prezzo del biglietto è: ' + totalPrice + ' €');

		outputName.innerHTML = inputName.value;
		outputPrice.innerHTML = totalPrice;
		eleTicket.classList.remove('hidden');
	} else {
		console.log('Inserire dei valori');
	}
})

btnReset.addEventListener('mouseenter', function () {
	outputName.innerHTML = '';
	outputPrice.innerHTML = '';
	eleTicket.classList.add('hidden');
});

inputName.addEventListener('focusin', function () {
	const distance = parseFloat(inputDistance.value);
	const age = inputAge.value;

	if (inputDistance.value != '' && !isNaN(distance) && inputName.value != '' && inputAge.value != 'label') {
		const basePrice = pricePerKilometer * distance;

		let discountRate;
		switch (age) {
			case 'minorenne':
				discountRate = 20;
				break;

			case 'standard':
				discountRate = 0;
				break;

			case 'senior':
				discountRate = 40;
				break;
		}

		// alternativa A
		let totalPrice = basePrice - basePrice * discountRate / 100;
		// totalPrice = parseFloat(totalPrice.toFixed(2));
		totalPrice = Math.round(totalPrice * 100) / 100;

		console.log('Il prezzo del biglietto è: ' + totalPrice + ' €');

		outputName.innerHTML = inputName.value;
		outputPrice.innerHTML = totalPrice;
		eleTicket.classList.remove('hidden');
	} else {
		console.log('Inserire dei valori');
	}
});