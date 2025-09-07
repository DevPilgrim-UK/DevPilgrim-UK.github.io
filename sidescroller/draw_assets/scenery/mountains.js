function mountainSetup() {
    var xpos = levelBarrier - width;
    var numberOfMountains = 20;
    var minAdjust = flagpole.x_pos/numberOfMountains;
    for (i = 0; i < numberOfMountains; i++) {
        xpos += random(minAdjust, minAdjust +500);
            mountains.push(
            createMountain(
                xpos, random(0.8,1.5), random(200,400), random(200,400)
            )
        )
        
    }
}

function createMountain(x, scale, h, w) {
    var mountain = {
        pos: undefined,
        size: undefined,
        scaledHeight: undefined,
        scaledWidth: undefined,

        setup: function (x, scale, h, w) {
            this.pos = createVector(x, floorPos_y);
            this.size = scale;
            this.scaledWidth = w * this.size;
            this.scaledHeight = h * this.size;
        },

        draw: function () {
            push();
            fill(100, 100, 100);
            stroke(80, 80, 80);

            triangle(
                this.pos.x, this.pos.y, // start
                this.pos.x + this.scaledWidth / 2, this.pos.y - this.scaledHeight, // top
                this.pos.x + this.scaledWidth, this.pos.y // right
            );
            noStroke();

            fill(255, 255, 255);
            let snowHeight = this.scaledHeight * 0.23;
            
            triangle(
                this.pos.x + this.scaledWidth * 0.38, this.pos.y - this.scaledHeight + snowHeight,
                this.pos.x + this.scaledWidth / 2, this.pos.y - this.scaledHeight,
                this.pos.x + this.scaledWidth * 0.62, this.pos.y - this.scaledHeight + snowHeight
            );
            pop();
        },
    };

    mountain.setup(x, scale, h, w);
    return mountain;
}

