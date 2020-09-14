
function fibo_recursive(element) {
	if (element < 2)
		return element;

	return fibo_recursive(element - 1) + fibo_recursive(element - 2);
}

function fibo_iterative(element) {
	let current, f1 = 0, f2 = 1;

	if (element < 2)
		return element;

	for (let i = 2; i <= element; i++) {
		current = f1 + f2;
		f1 = f2;
		f2 = current;
	}
	return current;
}

function fibo_golder_rate(element) {
	let phi = (1 + Math.sqrt(5)) / 2;
	return Math.round(Math.pow(phi, element) / Math.sqrt(5));
}

function fibo_logaritm(element) {
	let i = 1, j = 0, k = 0, h = 1, t;

	while (element > 0) {
		if (element % 2 != 0) {
			t = j*h;
			j = i*h + j*k + t;
			i = i*k + t;
		}
		t = h*h;
		h = 2*k*h + t;
		k = k*k + t;
		element = Math.trunc(element / 2);
	}
	return j;
}

function calc_recursive() {
	do_fibo("recursive");
}

function calc_iterative() {
	do_fibo("iterativ");
}

function calc_golden() {
	do_fibo("golden");
}

function calc_logaritm() {
	do_fibo("logaritm")
}

function do_fibo(method) {

	var element = document.getElementById('element').value;

	var start = performance.now();

	let result;

	if (method == "recursive")
		result = fibo_recursive(element);
	else if (method == "iterativ")
		result = fibo_iterative(element);
	else if (method == "golden")
		result = fibo_golder_rate(element);
	else if (method == "logaritm")
		result = fibo_logaritm(element);

	var end = performance.now();

	var resultTime = (end - start).toFixed(5);

	let textResult = "fib(" + element + ") = " + result + "<br>" + "Time = " + resultTime + " ms";
	document.getElementById('result').innerHTML = textResult;


}

