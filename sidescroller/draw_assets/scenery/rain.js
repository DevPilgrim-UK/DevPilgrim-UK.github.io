function setupRain() {
  for (let i = 0; i < 700; i++) {
    raindrops.push({
      x: random(-width * 4, 8 * width),
      y: random(-height, 2 * height),
      speed: random(2.5, 5.5),
      angle: random(1, 1.2)
    });
  }
}

function raining(bool) {
  isRaining = bool
}

function updateRain(floor, gameSpeed) {
  for (let drop of raindrops) {
    if (gameSpeed > 1) { gameSpeed = 1; } // If character is faster, rain is normal
    drop.y += drop.speed * gameSpeed; // If time is slowed, rain is slowed
    drop.x -= drop.angle * gameSpeed // Gives angled raindrops

    if (drop.y > floor && isRaining) { //When rain hits floor, move to above clouds across the level
      drop.y = -200; // Reset above the screen
      drop.x = random(-width * 2, 3 * width); // Random horizontal position
    }
  }
}

function drawRain(level) {
  fill(0, 0, 100);
  noStroke();
  for (let drop of raindrops) {
    // Calculate screen position of the raindrop
    let screenX = drop.x + width / 200;
    let screenY = drop.y;

    // Only draw drops that are visible on the screen
    if (-level < screenX && screenX < level) {
      ellipse(screenX * 2, screenY, 2, 10);
    }
  }
}