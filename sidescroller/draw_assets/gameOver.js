function drawGameOver() {		//GP6 SHOW 5
	background(20, 20, 20);

	// "Game Over" Text
	textAlign(CENTER, CENTER);
	textSize(80);
	fill(255, 0, 0);
	text("GAME OVER", width / 2, height / 2 - 50);

	// broken heart
	drawBrokenHeart(width / 2, height / 2 + 80, 60);
}