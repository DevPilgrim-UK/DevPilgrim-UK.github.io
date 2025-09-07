function drawPlayer() {
	//the game character
	stroke(138, 3, 3);
	if (isLeft && (isFalling || isJumping)) //gameChar jumpLeft
	{
		//head
		fill(150, 100, 100);
		ellipse(gameChar_x, gameChar_y - 55, 15, 15);

		// Body
		fill(50, 50, 50);
		rect(gameChar_x - 5, gameChar_y - 45, 5, 25);

		// Sword front (left)
		stroke(255);
		strokeWeight(2);
		line(gameChar_x - 8, gameChar_y - 35, gameChar_x + 15, gameChar_y - 45);
		strokeWeight(1);
		noStroke();

		stroke(138, 3, 3);
		// Arms
		rect(gameChar_x, gameChar_y - 50, 4, 20);

		// Legs
		rect(gameChar_x - 2, gameChar_y - 30, 5, 10); //left 
		rect(gameChar_x + 1, gameChar_y - 25, 10, 5); //tucked

		// Armor details
		stroke(100, 100, 70);
		line(gameChar_x - 5, gameChar_y - 50, gameChar_x, gameChar_y - 50);
		line(gameChar_x - 5, gameChar_y - 45, gameChar_x, gameChar_y - 45);

	}
	else if (isRight && (isFalling || isJumping)) //gameChar jumpRight
	{
		//head
		fill(150, 100, 100);
		ellipse(gameChar_x, gameChar_y - 55, 15, 15);

		// Sword back(to be on left)
		stroke(255);
		strokeWeight(2);
		line(gameChar_x + 8, gameChar_y - 35, gameChar_x - 15, gameChar_y - 45);
		strokeWeight(1);
		noStroke();

		// Body
		stroke(138, 3, 3);
		fill(50, 50, 50);
		rect(gameChar_x - 5, gameChar_y - 45, 10, 25);

		// Arms
		rect(gameChar_x - 5, gameChar_y - 50, 4, 20); //left

		// Legs
		rect(gameChar_x - 2, gameChar_y - 30, 5, 10); //left 
		rect(gameChar_x - 10, gameChar_y - 25, 10, 5); //tucked

		// Armor details
		stroke(100, 100, 70);
		line(gameChar_x, gameChar_y - 50, gameChar_x + 5, gameChar_y - 50);
		line(gameChar_x, gameChar_y - 45, gameChar_x + 5, gameChar_y - 45);
	}
	else if (isLeft) //gameChar Left
	{
		//head
		fill(150, 100, 100);
		ellipse(gameChar_x, gameChar_y - 50, 15, 15);

		// Body
		fill(50, 50, 50);
		rect(gameChar_x - 5, gameChar_y - 40, 10, 25);

		// Arms
		rect(gameChar_x + 5, gameChar_y - 40, 4, 20);

		// Legs
		rect(gameChar_x - 3, gameChar_y - 15, 5, 15);

		// Armor details
		stroke(100, 100, 70);
		line(gameChar_x - 5, gameChar_y - 35, gameChar_x, gameChar_y - 35);
		line(gameChar_x - 5, gameChar_y - 30, gameChar_x, gameChar_y - 30);

		// Sword front (left)
		stroke(255);
		strokeWeight(2);
		line(gameChar_x - 5, gameChar_y - 25, gameChar_x + 15, gameChar_y - 10);
		strokeWeight(1);
	}
	else if (isRight) //gameChar right
	{
		//head
		fill(150, 100, 100);
		ellipse(gameChar_x, gameChar_y - 50, 15, 15);

		// Sword first to show behind character (left)
		stroke(255);
		strokeWeight(2);
		line(gameChar_x + 8, gameChar_y - 25, gameChar_x - 10, gameChar_y - 10);
		strokeWeight(1);
		noStroke();

		// Body
		stroke(138, 3, 3);
		fill(50, 50, 50);
		rect(gameChar_x - 5, gameChar_y - 40, 10, 25);

		// Arms
		rect(gameChar_x - 9, gameChar_y - 40, 4, 20);

		// Legs
		rect(gameChar_x - 2, gameChar_y - 15, 5, 15);

		// Armor details
		stroke(100, 100, 70);
		line(gameChar_x, gameChar_y - 35, gameChar_x + 5, gameChar_y - 35);
		line(gameChar_x, gameChar_y - 30, gameChar_x + 5, gameChar_y - 30);

	}
	else if (isFalling || isPlummeting || isJumping) //gamechar jumpFront
	{
		// Head
		fill(150, 100, 100);
		ellipse(gameChar_x, gameChar_y - 50, 15, 15);

		// Body
		fill(50, 50, 50);
		rect(gameChar_x - 5, gameChar_y - 40, 10, 25);

		// Arms 
		rect(gameChar_x - 12, gameChar_y - 45, 4, 15); // Left 
		rect(gameChar_x + 8, gameChar_y - 45, 4, 15); // Right 

		// Legs 
		rect(gameChar_x - 6, gameChar_y - 25, 5, 10); // Left 
		rect(gameChar_x + 1, gameChar_y - 25, 5, 10); // Right 

		// Armor details
		stroke(100, 100, 70);
		line(gameChar_x - 5, gameChar_y - 35, gameChar_x + 5, gameChar_y - 35);
		line(gameChar_x - 5, gameChar_y - 30, gameChar_x + 5, gameChar_y - 30);

		// Sword angled up slightly to simulate motion
		stroke(255);
		strokeWeight(2);
		line(gameChar_x, gameChar_y - 25, gameChar_x + 10, gameChar_y - 35);
		strokeWeight(1);
	}
	else //game char forward
	{
		//head
		fill(150, 100, 100);
		ellipse(gameChar_x, gameChar_y - 50, 15, 15);

		// Body
		fill(50, 50, 50);
		rect(gameChar_x - 5, gameChar_y - 40, 10, 25);

		// Arms
		rect(gameChar_x - 9, gameChar_y - 40, 4, 20);
		rect(gameChar_x + 5, gameChar_y - 40, 4, 20);

		// Legs
		rect(gameChar_x - 6, gameChar_y - 15, 5, 15);
		rect(gameChar_x + 1, gameChar_y - 15, 5, 15);

		// Armor details
		stroke(100, 100, 70);
		line(gameChar_x - 5, gameChar_y - 35, gameChar_x + 5, gameChar_y - 35);
		line(gameChar_x - 5, gameChar_y - 30, gameChar_x + 5, gameChar_y - 30);

		// Sword last to show on outer Side
		stroke(255);
		strokeWeight(2);
		line(gameChar_x, gameChar_y - 25, gameChar_x + 8, gameChar_y - 15);
		strokeWeight(1);
	}
}