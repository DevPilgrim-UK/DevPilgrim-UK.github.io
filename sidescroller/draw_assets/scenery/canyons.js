function drawCanyons(t_canyon) {
	let canyon = t_canyon;
	fill(89, 49, 5);
	beginShape();
	vertex(canyon.x_pos, floorPos_y); // Top-left corner
	vertex(canyon.x_pos + canyon.width, floorPos_y); // Top-right corner
	vertex(canyon.x_pos + canyon.width * 0.8, floorPos_y + 200); // Bottom-right corner
	vertex(canyon.x_pos + canyon.width * 0.2, floorPos_y + 200); // Bottom-left corner
	endShape(CLOSE);

}

// Handle interaction with canyon
function checkCanyon(t_canyon, gravity) {
	let canyon = t_canyon
	if (
		gameChar_x > canyon.x_pos + 12 &&
		gameChar_x < canyon.x_pos + canyon.width - 12 &&
		gameChar_y === floorPos_y
	) {
		isPlummeting = true;
	}

	// Plummeting logic
	if (isPlummeting) {
		gameChar_y += gravity / 4.5;
		isLeft = false; // Disable side movement
		isRight = false;
	}
}