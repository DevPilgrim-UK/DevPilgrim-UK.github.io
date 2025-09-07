function drawHeart(x, y, size) { // start P5js.org
	push()
	fill(220, 20, 60); 
	noStroke();

	beginShape();
	vertex(x, y);
	bezierVertex(x - 0.5 * size, y - 0.5 * size, x - size, y + 0.25 * size, x, y + size);
	
	bezierVertex(x + size, y + 0.25 * size, x + 0.5 * size, y - 0.5 * size, x, y);
	endShape(CLOSE);
	pop(); //end P5js.org
}