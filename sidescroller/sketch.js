/*

- for the p5.Sound library look here https://p5js.org/reference/#/libraries/p5.sound
- for finding cool sounds perhaps look here
https://freesound.org/
*/
//world controls
var gravity;
var gameSpeed; // Slowdown time effect
var score;
var kunai;
var flagpole;
var endEffectSize;
var lives;
var gamePassed;
var levelBarrier;
var gameOver;

//game char
var gameChar_x;
var gameChar_y;
var gameChar_width;
var gameChar_height;
var floorPos_y;
var playerSpeed;
var jumpHeight;
var jumpSpeed;
var kunaiList;
var kunaiX;
var kunaiY;
var kunaiAngle;

//sounds
var masterVolume;
var stepSoundCounter;
var jumpSound;
var bgMusic;
var canyonSound;
var rainSound;
var coinSound;
var zombieHitSound;
var kunaiColSound;
var gameOverSound;
var gameVictorySound;
var throwKunaiSound;
var playerHitSounds = [];


//char controls
var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var isJumping;
var startJump_y;

//scenery
var collectables;
var canyons;
var trees_x;
var treeHeight;
var clouds;
var mountains;
var mountHeight;
var mountWidth;
var raindrops;
var isRaining;
var platforms;

var enemies;

var cameraPosX;
var indicatorOffset;

function setup() {
	createCanvas(1024, 576);
	floorPos_y = height * 3 / 4;
	lives = 3;					//GP6 SHOW 4
	gameOver = false;
	gamePassed = false;
	playRainSound();
	startGame();
	playBgMusic();
	indicatorOffset = 30;
}

function draw() {
	// Update camera position based on movement
	if (isLeft && gameChar_x > levelBarrier) {
		cameraPosX -= playerSpeed;
	} else if (isRight) {
		cameraPosX += playerSpeed;
	}



	background(220, 220, 230);
	noStroke();
	fill(85, 100, 85);
	rect(0, floorPos_y, width, height - floorPos_y);

	// Center camera on player
	push();
	translate(-cameraPosX, 0);



	//drawMountains();
	for (let i = 0; i < mountains.length; i++) {
		mountains[i].draw();
	}

	//draw canyons
	for (let i = 0; i < canyons.length; i++) {
		drawCanyons(canyons[i]);
		checkCanyon(canyons[i], gravity);
	}

	drawTrees();
	drawClouds();
	for (let i = 0; i < platforms.length; i++) {
		platforms[i].draw();
	}

	drawFlagPole();
	if (!flagpole.isReached) {
		checkFlagPole();
	}
	for (let i = 0; i < collectables.length; i++) {

		if (!collectables[i].isFound) {
			drawCollectable(collectables[i]);
			checkCollectable(collectables[i]);
		}
	}

	// Draw Enemies
	for (let i = 0; i < enemies.length; i++) {
		enemies[i].draw();

		var isContact = enemies[i].checkContact(gameChar_x, gameChar_y)
		if (isContact) {
			loseLife();
		}
	}

	drawPlayer();
	charMovementLogic();

	//moving out of update causes bugs. Spent to many hours on as is. Submit w/ chunky Kunai logic below.
	let adjustedMouseX = mouseX + cameraPosX;
	kunaiAngle = atan2(mouseY - (gameChar_y - 30), adjustedMouseX - gameChar_x);
	kunaiX = gameChar_x + cos(kunaiAngle) * indicatorOffset;
	kunaiY = (gameChar_y - 30) + sin(kunaiAngle) * indicatorOffset;

	for (let i = kunaiList.length - 1; i >= 0; i--) {
		let kunai = kunaiList[i];

		if (kunai.y > floorPos_y) {
			let inCanyon = false;
		
			for (let j = 0; j < canyons.length; j++) {
				if (kunai.x >= canyons[j].x_pos && kunai.x <= canyons[j].x_pos + canyons[j].width) {
					inCanyon = true;
					break;  
				}
			}
		
			if (!inCanyon) {
				kunai.moveable = false;
			} else {
				kunai.moveable = true; 
			}
		}

		kunai.move();

		// Check for collision with each enemy
		for (let j = enemies.length - 1; j >= 0; j--) {
			if (kunai.checkCollision(enemies[j])) {
				kunaiList.splice(i, 1);
				break;
			}
		}

		kunai.draw();

		if (kunai.x < cameraPosX - width || kunai.x > cameraPosX + width || kunai.y < 0 || kunai.y > height) {
			kunaiList.splice(i, 1);
		}
	}

	updateRain(floorPos_y, gameSpeed);
	drawRain(width * 4);
	drawGUI();
	pop();

	if (gameOver) {
		drawGameOver();
	} else if (gamePassed) {
		drawGamePassed();
	}

	checkStepCounter();
	checkPlayerDie();

}

function keyPressed() {


	if (!gameOver && !gamePassed) {
		//left and right
		if (isPlummeting) {
			isLeft = false;
			isRight = false;
		} else if (keyCode == 65) {
			isLeft = true;
		} else if (keyCode == 68) {
			isRight = true;
		}

		if (keyCode == 32 && kunai > 0) {
			kunaiList.push(createKunai(kunaiX, kunaiY, kunaiAngle, 12));
			playThrowKunaiSound(); 
			kunai --;
		}

		if ((keyCode == 87) && !isFalling && !isPlummeting && !isJumping) {
			startJump_y = gameChar_y;
			isJumping = true;
			playJumpSound();
		}
	}
}
