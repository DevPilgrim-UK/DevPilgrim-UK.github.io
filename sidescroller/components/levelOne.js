function startGame() {
    gameChar_x = width / 2;
    gameChar_y = floorPos_y;
    cameraPosX = 0;


    //world controls
    gameSpeed = 1;
    gravity = 6 * gameSpeed;
    score = 0;
    kunai = 4;
    flagpole = { x_pos: 5000, isReached: false }
    endEffectSize = 1;
    levelBarrier = -500;

    //charater controls
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    playerSpeed = 8 * gameSpeed;
    jumpHeight = 110;
    stepSoundCounter = 0;
    isJumping = false;
    startJump_y = gameChar_y;
    jumpSpeed = 10 * gameSpeed;     
    kunaiList = [];
    

    enemies = [];
    enemies.push(new Enemy(760, floorPos_y -10, 130, 1));
    enemies.push(new Enemy(1280, floorPos_y -10, 340, 1));
    enemies.push(new Enemy(3900, floorPos_y -10, 300, 1));
    enemies.push(new Enemy(4580, floorPos_y -10, 310, 1));
    enemies.push(new Enemy(2550, floorPos_y -10, 580, 1));
    enemies.push(new Enemy(2650, floorPos_y -10, 530, 1));
    enemies.push(new Enemy(2850, floorPos_y -10, 420, 1));
    enemies.push(new Enemy(3050, floorPos_y -10, 210, 1));
    enemies.push(new Enemy(-390, 355, 180, 3));

    platforms = [];
    platforms.push(createPlatforms(1950, 300, 200));
    platforms.push(createPlatforms(1750, 350, 200));
    platforms.push(createPlatforms(2600, 350, 200));
    platforms.push(createPlatforms(0, 325, 200));
    platforms.push(createPlatforms(-200, 220, 200));
    platforms.push(createPlatforms(-400, 355, 200));
    platforms.push(createPlatforms(530, 325, 200));
    platforms.push(createPlatforms(3850, 325, 200));
    platforms.push(createPlatforms(530, 325, 200));


    //scenery
    trees_x = [
        -400, 4050, 450, 2800, 1300, 
        805, 100, 3200, 3700, 1000, 
        flagpole.x_pos + 270, flagpole.x_pos + 390, flagpole.x_pos + 90, flagpole.x_pos + 330,
        flagpole.x_pos + 150, flagpole.x_pos + 210, flagpole.x_pos + 420,];

    treeHeight = 100;
    collectables = [
        { x_pos: 300, y_pos: 340, size: 0.7, isFound: false, item: "coin" },
        { x_pos: -310, y_pos: 90, size: 0.7, isFound: false, item: "coin" },
        { x_pos: 630, y_pos: 295, size: 0.7, isFound: false, item: "coin" },
        { x_pos: 830, y_pos: 195, size: 0.7, isFound: false, item: "coin" },

        { x_pos: 1880, y_pos: 412, size: 0.7, isFound: false, item: "kunai" }
    ];
    canyons = [
        { x_pos: 900, width: 100 },
        { x_pos: 550, width: 200 },
        { x_pos: -250, width: 300 },
        { x_pos: 2050, width: 480 },
        { x_pos: 1650, width: 100 },
        { x_pos: 3320, width: 150 },
        { x_pos: 4280, width: 120 },
    ];

    cloudsSetup();
    mountains = [];
    mountainSetup();

    raindrops = [];
    isRaining = true;
    setupRain();

}

