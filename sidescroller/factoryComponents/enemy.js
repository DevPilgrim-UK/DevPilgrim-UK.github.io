
function Enemy(x, y, range, lives){
	this.x = x;
	this.y = y;
	this.range = range;
    this.currentLives = lives;

	this.currentX = x;
	this.inc = 1 ;

	this.update = function()
	{
		this.currentX += this.inc *gameSpeed;

		if(this.currentX >= this.x + this.range){
			this.inc = -1;
		} else if (this.currentX < this.x){
			this.inc =1;
		}
	}
	this.draw = function(){
		this.update();
        var bodyColor = this.currentLives < Math.ceil(this.lives / 2) ? color(120, 0, 0) : color(0, 0, 0);
		var facing = this.inc > 0 ? "right" : "left"; 
		push();
		translate(this.currentX, this.y);

		if (facing === "left") {
			scale(-1, 1);
		}

		fill(bodyColor);
		rect(-12.5, -30, 25, 5);
		rect(-10, -30, 20, 30);  
		ellipse(0, -42, 20);  
		fill(200, 0, 0);
		ellipse(5, -44, 4, 4);  

		pop();
	};
	
    this.takeHit = function() {
		if (this.currentLives > 0) {
			this.currentLives--;
			playZombieHitSount();
			if (this.currentLives == 0){
				enemies.splice(enemies.indexOf(this), 1);
			}
		}
	};

	this.checkContact = function(object_x, object_y)
	{
		var d = dist(object_x, object_y, this.currentX, this.y)

		if(d < 20){
			return true;
		}
		return false;
	}
}