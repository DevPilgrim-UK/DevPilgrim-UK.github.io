function drawBrokenHeart(x, y, size) {
	fill(220, 20, 60);
	noStroke();

	// Left part of the heart
	beginShape();
	vertex(x, y);
	bezierVertex(x - 0.5 * size, y - 0.5 * size, x - size, y + 0.25 * size, x, y + size);
	endShape(CLOSE);

	// Right part of the heart
	beginShape();
	vertex(x, y);
	bezierVertex(x + 0.5 * size, y - 0.5 * size, x + size, y + 0.25 * size, x, y + size);
	endShape(CLOSE);

	// Crack in the heart
	stroke(50, 0, 0);
	strokeWeight(2);
	line(x, y, x, y + size);
}