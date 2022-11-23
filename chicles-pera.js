function showDeliveryCost(deliveryCost){
	document.getElementById('js-delivery-cost').innerText = deliveryCost;
}

function showTotal(totalPrice){
	document.getElementById('js-total-price').innerText = totalPrice;
}

function showBadZipFormat() {
	console.error('El código zip introducido no es válido')
}

window.addEventListener('load', () => {
	const priceWithoutDeliveryCost = 5;
	const calculateDeliveryButton = document.getElementById('js-calculate-delivery');

	calculateDeliveryButton.addEventListener('click', () => {
		const zipCode = document.getElementById('js-zip-code').value;
		console.log(zipCode);

		//CHECK FORMAT
		if (zipCode.length != 5 || isNaN(zipCode%zipCode)) {
			return showBadZipFormat();
		}
	
		// ADD DELIVERY COST
		let deliveryCost = 0;
		let coin = '€'

		if (zipCode[0] == 1 && zipCode[1] == 0) {
			deliveryCost = 0;
		} else if (zipCode[0] >= 1 && zipCode[0] <= 5) {
			deliveryCost = 2;
		} else if (zipCode[0] >= 6 && zipCode[0] <= 8) {
			deliveryCost = 3;
		} else if (zipCode[0] == 9) {
			deliveryCost = 5;
		}
		showDeliveryCost(deliveryCost + coin)
		
		//RETURN TOTAL COST
		return showTotal(priceWithoutDeliveryCost + deliveryCost + coin)
	})
});