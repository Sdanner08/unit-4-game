//Variables

var crys1 = Math.floor(Math.random() * (12 - 1) + 1);
var crys2 = Math.floor(Math.random() * (12 - 1) + 1);
var crys3 = Math.floor(Math.random() * (12 - 1) + 1);
var crys4 = Math.floor(Math.random() * (12 - 1) + 1);


//Counter
var win = 0;
var loss = 0;
var finalScore;
				

//Functions
	function reset()
	{
		//reset
		 randNum = Math.floor(Math.random() * (120 - 19) + 19);
		 console.log('randomNumber =  ' + randNum);
		 crys1 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys2 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys3 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys4 = Math.floor(Math.random() * (12 - 1) + 1)
		 finalScore = 0;

		 //HTML
		 $('.ranNumBox').html(randNum);
		 $('.scoreDisplayChild').html(finalScore);
		 start();
	}

	function start()
	{
		 //reset
		 randNum = Math.floor(Math.random() * (120 - 19) + 19);
		 console.log('randomNumber =  ' + randNum);
		 crys1 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys2 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys3 = Math.floor(Math.random() * (12 - 1) + 1);
		 crys4 = Math.floor(Math.random() * (12 - 1) + 1)
		 finalScore = 0;

		 //HTML
		 $('.ranNumBox').html(randNum);
		 $('.scoreDisplayChild').html(finalScore);



		//Give crystal a random value
		$('.crystal1').attr("value", crys1);
			var test = $('.crystal1').attr("value");
			//Test / Debug
			console.log('crystal 1   '+test);

		$('.crystal2').attr("value", crys2);
		var test = $('.crystal2').attr("value");


		$('.crystal3').attr("value", crys3);
		var test = $('.crystal3').attr("value");


		$('.crystal4').attr("value", crys4);
		var test = $('.crystal4').attr("value");
		

		//Final score
		$('.box').off().on('click', function()
		{
			var test1 = $(this).attr('value');
			//Adds to final score when clicked
			finalScore = parseInt(finalScore) + parseInt(test1);
			console.log('Crystal*  ' +  test1);
			console.log('finalScore***  ' + finalScore);
			$('.scoreDisplayChild').html(finalScore);

			if(randNum === finalScore)
			{
				alert('win');
				win++;
				$('.win').html(win);
				$('.scoreDisplayChild').html(0);
				reset();
				
			}
			else if (finalScore > randNum)
			{
				alert('loser');
				loss++;
				$('.loss').html(loss);
				$('.scoreDisplayChild').html(0);
				reset();
			}

		}); 


}
start();