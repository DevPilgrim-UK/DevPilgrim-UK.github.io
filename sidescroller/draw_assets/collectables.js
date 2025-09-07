function drawCollectable(t_collectable) {
    //Draw Collectable from array
    if (!t_collectable.isFound) {
        if (t_collectable.item == "coin") {
            //Ellipse
            fill(255, 255, 0, 110);
            ellipse(t_collectable.x_pos, t_collectable.y_pos, 45 * t_collectable.size, 45 * t_collectable.size);
            drawGate(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size)


        } else if (t_collectable.item == "kunai") {
            // Draw Kunai
            fill(138, 33, 33, 110);
            ellipse(t_collectable.x_pos, t_collectable.y_pos, 60 * t_collectable.size, 60 * t_collectable.size);
            drawKunai(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size);
        }
    }
}

function drawKunai(x, y, size) {
    // Blade 
    fill(50, 50, 50);
    triangle(
        x - 5 * size, y,
        x + 5 * size, y,
        x, y - 30 * size
    );

    // Handle
    fill(90, 20, 20);
    rect(x - 2.5 * size, y, 5 * size, 20 * size);

    // Weight 
    fill(50, 50, 50);
    ellipse(x, y + 25 * size, 10 * size, 10 * size);
    fill(220, 220, 220);
    ellipse(x, y + 25 * size, 5 * size, 5 * size);
}

function checkCollectable(t_collectable) {
    if (dist(gameChar_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 52) {
        t_collectable.isFound = true;
        if (t_collectable.item == "coin") {
            score++;
			playCoinSound();
        } else if (t_collectable.item == "kunai") {
            kunai +=3;
			playKunaiColSound();
        }
    }
}