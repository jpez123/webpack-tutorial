/* ES6 Code */
let checkName = (firstName, lastName) => {
	if (firstName != "nader" || lastName !== "dabit") {
		console.log('Intrusion');
	} else {
		console.log('Verified');
	}
}

checkName('nader','jackson');