// This function will execute when the site is fully loaded.
$(function(){
	// Ask user for a fizzbuzz limit
	var userlimit = prompt("Please enter a number");
	// Call the fizzbuzz function with the userlimit
	fizzbuzz(userlimit)
})
// Function acts for 'fizzbuzz'
function fizzbuzz(limit){
	for (var i = 0; i <= limit; i++){

		if (i % 5==0 && i % 3==0) {
			console.log('FizzBuzz');
		} else if (i % 5==0) {
			console.log('Buzz');
		} else if (i % 3==0) {
			console.log('Fizz');
		} else {
			console.log(i);
		}
	}
}
