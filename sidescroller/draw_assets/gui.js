function drawGUI() {
	fill(138, 3, 3, 200); 
	noStroke();
	rect(gameChar_x + 380, 5, 120, 80, 10); 
	
	fill(255, 245, 235, 180); 
	rect(gameChar_x +385, 10, 110, 70, 8); 

	// Draw the score text inside
	fill(138, 3, 3); 
	noStroke();
	textSize(20); 
	textStyle(BOLD); 
	textAlign(CENTER, CENTER); 
	text("Lives: ", gameChar_x + 420, 25);						
	let offset = 10;
	for (i = lives; i > 0; i--) {
		offset += 15;
		drawHeart(gameChar_x + 430 + offset, 20, 10); // Separate component for draw heart for reusability
	}

	text("Score: " + score, gameChar_x + 427, 45);           
	text("Kunai: " + kunai, gameChar_x + 427, 65); 
}