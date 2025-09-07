function createPlatforms(x, y, length) {
	var p = {
		x: x,
		y: y,
		length: length,
		draw: function () {
			noStroke();
			fill(60, 40, 30);
			rect(x, y, length, 20);

			stroke(40, 25, 20);
			strokeWeight(2);
			for (let i = x; i <= x + length; i += length / 6) {
				line(i, y, i, y + 20);
			}

			noStroke();
			fill(80, 60, 50);
			rect(x, y, length, 5);
		},
		checkContact: function (gc_x, gc_y) {
			if (gc_x +10 > this.x && gc_x -10 < this.x + this.length) {
				var d = this.y - gc_y;
				if (d >= 0 && d < 12) {
					return true;
				} else {
					return false;
				}
			}
		}
	}
	return p;
}