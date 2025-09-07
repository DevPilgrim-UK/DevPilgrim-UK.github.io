function preload() {
    soundFormats('mp3', 'wav');

    masterVolume = 1;
    //load your sounds here
    jumpSound = loadSound('audio_assets/jump.wav');
    jumpSound.setVolume(0.2 * masterVolume);
    bgMusic = loadSound('audio_assets/ronin.mp3') //credit Music: www.purple-planet.com
    bgMusic.setVolume(0.02  * masterVolume);
    stepRock = loadSound('audio_assets/stepRock.wav');
    stepRock.setVolume(0.1 * masterVolume);
    canyonSound = loadSound('audio_assets/canyon.wav');
    canyonSound.setVolume(0.3 * masterVolume);
    rainSound = loadSound('audio_assets/rain.wav');
    rainSound.setVolume(0.2 * masterVolume);
    coinSound = loadSound('audio_assets/coin.wav');
    coinSound.setVolume(0.2 * masterVolume);
    zombieHitSound = loadSound('audio_assets/zombieHit.mp3');
    zombieHitSound.setVolume(0.05 * masterVolume);
    kunaiColSound = loadSound('audio_assets/kunaiCollect.mp3');
    kunaiColSound.setVolume(0.15 * masterVolume);
    throwKunaiSound = loadSound('audio_assets/throwKunai.mp3');
    throwKunaiSound.setVolume(0.2 * masterVolume);
    gameOverSound = loadSound('audio_assets/gameOver.mp3');
    gameOverSound.setVolume(0.3 * masterVolume);
    gameVictorySound = loadSound('audio_assets/gameVictory.wav'); // credit: Victor Natas
    gameVictorySound.setVolume(0.05 * masterVolume); // https://www.youtube.com/channel/UCA8O46_WrQZEhSdZuwFQ3rQ
    playerHitSounds.push(loadSound('audio_assets/hit/die1.mp3'));
    playerHitSounds.push(loadSound('audio_assets/hit/hit1.mp3'));
    playerHitSounds.push(loadSound('audio_assets/hit/hit2.mp3'));
    playerHitSounds.push(loadSound('audio_assets/hit/hit3.mp3'));
    playerHitSounds.push(loadSound('audio_assets/hit/hit4.mp3'));
    playerHitSounds.push(loadSound('audio_assets/hit/hit5.mp3'));
    playerHitSounds[0].setVolume(0.2 * masterVolume);
    playerHitSounds[1].setVolume(0.2 * masterVolume);
    playerHitSounds[2].setVolume(0.2 * masterVolume);
    playerHitSounds[3].setVolume(0.2 * masterVolume);
    playerHitSounds[4].setVolume(0.2 * masterVolume);
    playerHitSounds[5].setVolume(0.2 * masterVolume);

}

function playerHitSound(){
    random(playerHitSounds).play();
}

function playJumpSound() {
    jumpSound.play();
}

function playGameOver() {
    bgMusic.stop();
    gameOverSound.play();
}

function playVictory() {
    gameVictorySound.play();
}

function playBgMusic() {
    bgMusic.loop();
}

function playStepSound() {
    stepRock.play();
}

function playCanyonSound() {
    canyonSound.play()
}

function playRainSound() {
    rainSound.loop();
}

function playCoinSound() {
    coinSound.play();
}

function playKunaiColSound() {
    kunaiColSound.play();
}

function playZombieHitSount() {
    zombieHitSound.play();
}

function playThrowKunaiSound() {
    throwKunaiSound.play();
}

/* Background Music:
Song: Ronin
Composer: Yoitrax
Website: https://www.youtube.com/channel/UCz8VLO0XtHqntpAlx0-XtfA
License: Creative Commons (BY 3.0) https://creativecommons.org/licenses/by/3.0/
Music powered by BreakingCopyright: https://breakingcopyright.com */