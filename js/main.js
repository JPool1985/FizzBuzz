// This function will execute when the site is fully loaded.
$(function(){
	// Ask user for a fizzbuzz limit
	var userlimit = prompt("Please enter a number");
	if (isInt(userlimit)) {
		// Call the fizzbuzz function with the userlimit
		fizzbuzz(userlimit);
	}
	else {
		// Let user number know that value entered wasn't a number
		alert ("You didn't enter a number")
	}
})
// Function acts for 'fizzbuzz'
function fizzbuzz(limit){
	$(".list").empty()
	for (var i = 0; i <= limit; i++){

		if (i % 5==0 && i % 3==0) {
			console.log('FizzBuzz');
			$(".list").append('<h4>FizzBuzz</h4>');
		} else if (i % 5==0) {
			console.log('Buzz');
			$(".list").append('<h4>Buzz</h4>');
		} else if (i % 3==0) {
			console.log('Fizz');
			$(".list").append('<h4>Fizz</h4>');
		} else {
			console.log(i);
			$(".list").append('<h4>'+i+'</h4>');
		}
	}
}
// Returns true if value is a number
function isInt(value) {
	return !isNaN(value) && 
	parseInt(Number(value)) == value && 
	!isNaN(parseInt(value, 10));
};

$("#add-number-button").on("click",function(){
	if(isInt($("#new-number-input").val())){
		fizzbuzz($('#new-number-input').val())
	} else {
		alert("You didn't enter a number")
	}
});
$("#new-number-input").on("keyup",function(e){
	if (e.keyCode == 13) {
		if(isInt($("#new-number-input").val())){
			fizzbuzz($('#new-number-input').val())
		} else {
			alert("You didn't enter a number")
		}
	}
});