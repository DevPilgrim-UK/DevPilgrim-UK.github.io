

function checkStepCounter() {
	if (isLeft && !isFalling || isRight && !isFalling) {
		let rateCap = 1.7; //if increasing game speed, only plays a set amount of times
		if (gameSpeed > rateCap) {
			stepSoundCounter += rateCap;
		} else {
			stepSoundCounter += 1 * gameSpeed;
		}
	}

	if (stepSoundCounter >= 10) {
		playStepSound();
		stepSoundCounter = 0;
	}
}

//time slow
function mousePressed() {
	gameSpeed = 0.2;
	playerSpeed = playerSpeed * gameSpeed;
	gravity = gravity * gameSpeed;
	jumpSpeed = jumpSpeed * gameSpeed;
}

//time reset to normala
function mouseReleased() {
	playerSpeed = playerSpeed / gameSpeed;
	gravity = gravity / gameSpeed;
	jumpSpeed = jumpSpeed / gameSpeed;
	gameSpeed = 1;
}

//give an inciment jump instead of instant movement. feels much more refined and nicer to play
function gameCharJump() {
	if (isJumping && !isPlummeting) { // !isPlummiting to fix bug if slomo jump last moment
		if (startJump_y - gameChar_y < jumpHeight) {
			gameChar_y -= jumpSpeed;
		} else {
			isJumping = false;
		}
	}
}

function charMovementLogic() {
	gameCharJump();
	// Handle player movement
	if (isLeft && !gameOver && !gamePassed && gameChar_x > levelBarrier) {
		gameChar_x -= playerSpeed;
	} else if (isRight && !gameOver && !gamePassed) {
		gameChar_x += playerSpeed;
	}

	// Jumping and falling
	if (!isJumping && gameChar_y < floorPos_y) {
		var isContact = false;
		for (var i = 0; i < platforms.length; i++) {
			if (platforms[i].checkContact(gameChar_x, gameChar_y) == true) {
				isContact = true;
				gameChar_y = platforms[i].y;
				isFalling = false;
				break;
			}
		}
		if (!isContact) {
			isFalling = true;
			gameChar_y += floor(gravity);
		}
	} else if (isFalling) { 	//NOTE: EXPLAIN THIS IN FINAL
		gameChar_y = floorPos_y;	// After falling ends, ensure character is at floor level (fixes canyon bug when not on absolute value)
		isFalling = false;
	}
}

// if statements to control the animation of the character on key released
function keyReleased() {
	//left & right
	if (keyCode == 65) {
		isLeft = false;
	} else if (keyCode == 68) {
		isRight = false;
	}
}

function loseLife() {
	playerHitSound();
	if (lives > 1) {
		lives -= 1;
		startGame();
	} else {
		lives = 0;
		startGame();
		playGameOver();
		gameOver = true;
	}
}

function checkPlayerDie() {
	if (gameChar_y > height) {
		playCanyonSound();
		loseLife();
	}
}