function cloudsSetup(){
	    clouds = [
        { x_pos: 25, y_pos: 10, fill: (255, 255, 255), speed: -0.6 },
        { x_pos: 0, y_pos: 0, fill: (155, 155, 155), speed: 0.2 },
        { x_pos: 15, y_pos: -10, fill: (90, 90, 90), speed: -0.2 }
    ];
    
}

function drawClouds() {
	// for each cloud in clouds, across game width, draw clouds. Clouds have a rolling effect and reset xpos for both directions to prevent endless creation.
	for (i = 0; i < clouds.length; i++) {
		push();
		clouds[i].x_pos += clouds[i].speed;
		fill(clouds[i].fill);

		if (clouds[i].x_pos > width + flagpole.x_pos) {
			clouds[i].x_pos = levelBarrier;
		}
		if (clouds[i].x_pos < levelBarrier) {
			clouds[i].x_pos = flagpole.x_pos;
		}

		for (j = clouds[i].x_pos - 1500; j < width + 5000; j += 200) {
			ellipse(j + 60, clouds[i].y_pos + 10, 120, 80);
			ellipse(j + 120, clouds[i].y_pos - 10, 120, 80);
			ellipse(j, clouds[i].y_pos - 10, 120, 80);
		}
		pop();
	}
}

