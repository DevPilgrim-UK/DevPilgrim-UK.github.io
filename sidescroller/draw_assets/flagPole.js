function drawFlagPole() {                             //GP6 SHOW 2
	if (flagpole.isReached) {
		if (endEffectSize < 300) { endEffectSize += 3 };
		raining(false);
		fill(30, 120, 255, 110);
		ellipse(flagpole.x_pos, floorPos_y - 80, endEffectSize, endEffectSize);
	}
	drawGate(flagpole.x_pos, floorPos_y - 80, 5,)
}