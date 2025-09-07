function drawGUI() {
  fill(138, 3, 3, 200);
  noStroke();
  rect(width - 160, 5, 150, 80, 10);

  fill(255, 245, 235, 180);
  rect(width - 155, 10, 140, 70, 8);

  fill(138, 3, 3);
  noStroke();
  textSize(20);
  textStyle(BOLD);
  textAlign(LEFT, CENTER);

  text("Lives:", width - 150, 25);

  let offset = 0;
  for (let i = 0; i < lives; i++) {
    drawHeart(width - 85 + offset, 25, 10);
    offset += 20;
  }

  text("Score: " + score, width - 150, 50);
  text("Kunai: " + kunai, width - 150, 70);
}
