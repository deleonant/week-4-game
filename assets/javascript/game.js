$(document).ready(function() {

// VARIABLES


	//  win/losses variable
	var win = 0;
	var losses = 0;

	// Images Array
	var images = ["assets/images/1.png", "assets/images/2.png", "assets/images/3.png", "assets/images/4.png"]

	// Reset Counter
	var counter = 0;

	//  random values
	var numbers = [];
	// value options
	var numberList = [1,2,3,4,5,6,7,8,9,10]
	var numbersMax = 4;



	// randomly generated goalNumber between 25 and 100
	var goalNumber = Math.floor((Math.random() * 100) + 25);
	// display the goal number to the div .number
	$('#goal-number').text(goalNumber);
	//for loop to randomly generate four numbers for the variable numbers between 1-10
	for (var i=0; i<numbersMax; i++) {
		numbers.push(numberList[Math.floor(Math.random() * numberList.length)]);
	};
	console.log(numbers);



	for (var i=0; i<numbersMax; i++) {
		
		var crystalImage = $('<img>');
		
		crystalImage.attr('data-num', numbers[i]);
		
		crystalImage.attr('src', images[i]);
		
		crystalImage.attr('alt', 'crystals');
	
		crystalImage.addClass('crystalImage');
		$('#crystals').append(crystalImage);
	}

// function on click image
	$('.crystalImage').on('click', function() {
		
			counter = counter + parseInt($(this).data('num'));
		
			$('#counter').text(counter); //
			console.log(counter);
			if (counter == goalNumber) {
				win++;
				$('#win').html(win);
				reset();
			}else if (counter > goalNumber) {
				losses++;
				$('#loss').html(losses);
				reset();
		}
	});

function reset() {
	var goalNumber = Math.floor((Math.random() * 100) + 25);
	
	$('#goal-number').text(goalNumber);
	
	counter = 0;
	$('#counter').text(counter);
	
	var numbers = [];
	
	for (var i=0; i<numbersMax; i++) {
		numbers.push(numberList[Math.floor(Math.random() * numberList.length)]);
	};
	
	$(".crystalImage").remove();
	for (var i=0; i<numbersMax; i++) {
		
		for (var i=0; i<numbersMax; i++) {
			
			var crystalImage = $('<img>');
			
			crystalImage.attr('data-num', numbers[i]);
			
			crystalImage.attr('src', images[i]);
			
			crystalImage.attr('alt', 'crystals');
			
			crystalImage.addClass('crystalImage');
			$('#crystals').append(crystalImage);
		}
	}
}

});