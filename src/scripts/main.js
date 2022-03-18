// start
function start() {
    //verify if all jsons were loaded
    if (NJSONs === NJSONsLoaded) {
        //create the player
        player = createPlayer(50, 50, campaign);

        //load the map
        mapLoader = loadMap(campaign);
        
        //sinalize the game can start because all was loaded and created
        started = true;
    } else {
        // if some jsons were not loaded, call the start function in the next frame
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