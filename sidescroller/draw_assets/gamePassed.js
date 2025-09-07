function drawGamePassed() {			//GP6 SHOW 5
	background(20, 60, 20);

	// "Victory" Text
	textAlign(CENTER, CENTER);
	textSize(80);
	fill(0, 255, 0);
	text("VICTORY!", width / 2, height / 2 - 50);

	//A crown
	drawCrown(width / 2, height / 2 + 80, 100);
}

function drawCrown(x, y, size) {
	fill(255, 215, 0);
	noStroke();

	// Base rectangle
	rect(x - size / 2, y, size, size / 4);

	// Triangles for crown spikes
	triangle(x - size / 2, y, x - size / 3, y - size / 2, x - size / 6, y);
	triangle(x - size / 6, y, x, y - size / 2, x + size / 6, y);
	triangle(x + size / 6, y, x + size / 3, y - size / 2, x + size / 2, y);

	// Crown gems (small circles)
	fill(139, 0, 139);
	ellipse(x - size / 3, y + size / 8, size / 10, size / 10);
	ellipse(x, y + size / 8, size / 10, size / 10);
	ellipse(x + size / 3, y + size / 8, size / 10, size / 10);
}