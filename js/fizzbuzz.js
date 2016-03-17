// This function will execute when the site is fully loaded.
$(function(){
	// Call the fizzbuzz function
	fizzbuzz(100)
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