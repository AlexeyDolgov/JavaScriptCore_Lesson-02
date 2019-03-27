let employeeSalaries = {
		director: 18000,
		secretary: 7500,
		accountant: 12000,
		programmer: 15000,
		nightWatchman: 5000
};

let salaryFund = 0;
for (let salary in employeeSalaries) {
	salaryFund += employeeSalaries[salary];
}

console.log("Фонд оплаты труда составил " + salaryFund);