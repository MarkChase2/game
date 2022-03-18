// start
function start() {
    //create the player
    if (NJSONs === NJSONsLoaded) {
        player = createPlayer(50, 50, campaign);
        started = true;
    } else {
        window.requestAnimationFrame(start);
    }
}
start();

function update() {
    // console.log(NImages, NImagesLoaded);
    //console.log('');
    // if all the images that was tried to load were loaded sucessfully, do the update
    if (NImages === NImagesLoaded && started) {
        // clear the main canvas
        ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
        // console.log('asa');
        // ctx.fillRect(50, 50, 100, 100);
        // update the player
        player = updatePlayer(player, ctx);
    }
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);