function createPlayer(x, y, campaign) {
    // create an empty object
    var thisPlayer = {};

    thisPlayer.x = x;
    thisPlayer.y = y;
    console.log(campaign);
    thisPlayer.spd = campaign['settings']['player']['speed'];
    /// set the current image for the first frame
    thisPlayer.currFrame = 0;
    // set all the frames
    thisPlayer.spriteSheet = loadImage(campaign['settings']['player']['sprites']['spriteSheet'], processImage);
    thisPlayer.frames = [campaign['settings']['player']['sprites']['idle']];
    // thisPlayer.dx = 0;
    // thisPlayer.dy = 0;
    // document.addEventListener('keydown', (e) => {
    //     if (e.key === 'w') {
    //         player.dy = -1;
    //     }
    //     if (e.key === 's') {
    //         if (player.dy === -1) {
    //             player.dy = 0;
    //         } else {
    //             player.dy = 1;
    //         }
    //     }
    //     if (e.key === 'a') {
    //         player.dx = -1;
    //     }
    //     if (e.key === 'd') {
    //         player.dx = 1;
    //     }
    //     console.log(e.key);
    // });
    // document.addEventListener('keyup', (e) => {
    //     if (e.key === 'w' || e.key === 's') {
    //         player.dy = 0;
    //     }
    //     if (e.key === 'a' || e.key === 'd') {
    //         player.dx = 0;
    //     }
    // });
    console.log(thisPlayer);
    return thisPlayer;
}

function updatePlayer(player, ctx) {
    // console.log(player.x);
    // save the context, scale it, draw the current player frame and restore
    ctx.save();
    ctx.scale(2, 2);
    ctx.drawImage(player.spriteSheet,
        player.frames[player.currFrame][0],
        player.frames[player.currFrame][1],
        player.frames[player.currFrame][2],
        player.frames[player.currFrame][3],
        player.x,player.y,
        player.frames[player.currFrame][2],
        player.frames[player.currFrame][3]);
    ctx.restore();
    // player.x += player.dx;
    // player.y += player.dy;
    // player movement
    if (keys['w'] === true) {
        player.y -= player.spd;
    }
    if (keys['s'] === true) {
        player.y += player.spd;
    }
    if (keys['a'] === true) {
        player.x -= player.spd;
    }
    if (keys['d'] === true) {
        player.x += player.spd;
    }
    // console.log('dlkjasrnggtreh');
    return player;
}