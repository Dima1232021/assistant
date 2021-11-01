let useСalculator = confirm('Хочеш скористатися калькулятором ?');

useСalculator ? fn() : null;
function fn() {
	let x = prompt(
		'Введи цифру яка відповідає твоїй дії("+" це 1, "-" це 2, "*" це 3, "/" це 4 )'
	);
	let a = 20;
	let b = 2;


	switch (x) {
		case '1':
			console.log(`${a} + ${b} = ${a + b}`);
			break;
		case 2:
			console.log(`${a} - ${b} = ${a - b}`);
			break;
		case 3:
			console.log(`${a} * ${b} = ${a * b}`);
			break;
		case 4:
			console.log(`${a} / ${b} = ${a / b}`);
			break;
		default:
			console.log('Нічого не підійшло');
	}
}
