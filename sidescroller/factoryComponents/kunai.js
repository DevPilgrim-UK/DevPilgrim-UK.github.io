function createKunai(x, y, angle, speed) {
    return {
        x: x,
        y: y,
        angle: angle,
        speed: speed,
        moveable: true,

        move: function () {
            if (this.moveable) {
                this.x += cos(this.angle) * this.speed * gameSpeed;
                this.y += sin(this.angle) * this.speed * gameSpeed;
            }
        },

        draw: function () {
            push();
            noStroke();
            translate(this.x, this.y);
            rotate(this.angle + HALF_PI);
            drawKunai(0, 0, 0.5);
            pop();
        },

        checkCollision: function (enemy) {
            let d = dist(this.x, this.y, enemy.currentX, enemy.y - 20);

            if (d < 30) {
                enemy.takeHit();
                return true;
            }
            return false;
        }
    };
}
