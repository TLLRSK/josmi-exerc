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

		//CHECK FORMAT
		const regExp = /\d{5}/;
		if (zipCode.length != 5 || !regExp.test(zipCode)) {
			return showBadZipFormat();
		}

		// ADD DELIVERY COST
		let deliveryCost = 0;
		let coin = '€'

		switch (parseInt(zipCode[0])) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
				deliveryCost = 2;
				break;
			case 6:
			case 7:
			case 8:
				deliveryCost = 3;
				break;
			case 9:
				deliveryCost = 5;
				break;
			default:
				break;
		}
		showDeliveryCost(deliveryCost + coin)

		//RETURN TOTAL COST
		return showTotal(priceWithoutDeliveryCost + deliveryCost + coin)
	})
});