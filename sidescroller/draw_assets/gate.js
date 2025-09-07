function drawGate(x, y, size) {
	//Collectable , anchored around x_pos, y_pox. 
	fill(150, 0, 0);
	rect(x - 6 * size, y - 3 * size, 2 * size, 20 * size);
	rect(x + 4 * size, y - 3 * size, 2 * size, 20 * size);
	rect(x - 20 * size / 2, y - 7 * size, 20 * size, 2.5 * size);
	rect(x - 13 * size, y - 12 * size, 26 * size, 3 * size);
}

const checkFlagPole = () => {
	var d = abs(gameChar_x - flagpole.x_pos)
	if (d < 20) {
		flagpole.isReached = true;
		gamePassed = true;
		playVictory();
	}
}