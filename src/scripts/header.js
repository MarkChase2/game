// initialize some util variables
var NImages = 0,
    NImagesLoaded = 0;
var NJSONs = 0,
    NJSONsLoaded = 0;
var started = false;
const gameWidth = 640,
    gameHeight = 360;
const gameScale = Math.min(Math.trunc(window.innerWidth / gameWidth), Math.trunc(window.innerHeight / gameHeight));

//initialize the canvas and ctx
var gameCanvas = document.getElementById('gameCanvas');
gameCanvas.width = gameWidth;
gameCanvas.height = gameHeight;
gameCanvas.style.width = gameScale * gameWidth + 'px';
gameCanvas.style.height = gameScale * gameHeight + 'px';

// get the blank space 
gameCanvas.style.left = ((window.innerWidth - gameScale * gameWidth) / 2) + 'px';
console.log(window.getComputedStyle(gameCanvas).left);
var ctx = gameCanvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

//config the keys obj for always has the current keys pressed (fail for multiple DOMs)
var keys = {};
window.addEventListener("keydown",
    function(e) {
        keys[e.key] = true;
    },
    false);

window.addEventListener('keyup',
    function(e) {
        keys[e.key] = false;
    },
    false);

//load an image and call a callback
function loadImage(imgPath, callBack) {

    //increase the number of images tried to be load
    NImages++;

    //create a image for be a buffer
    var bufferImg = new Image();
    bufferImg.src = imgPath;

    // when load the image... 
    bufferImg.onload = () => {

        //increase the number of sucesfully loaded images
        NImagesLoaded++;

        // call the callback when loaded
        callBack(bufferImg)
    };
    return bufferImg;
}

function processImage(image) {

    //create a canvas for be a buffer and config it
    var canvasBuf = document.createElement('canvas')
    canvasBuf.width = image.width;
    canvasBuf.height = image.height;

    //create a context for the buffer canvas
    var contextBuf = canvasBuf.getContext('2d');

    //draw the image on the canvas
    contextBuf.drawImage(image, 0, 0);

    //get all the pixel colors on the buffer canvas
    var imageData = contextBuf.getImageData(0, 0, canvasBuf.width, canvasBuf.height);
    var data = imageData.data;

    //for each pixel on the canvas ( that maps directly to the image ), verify if it's color is rgb(255,0,255), if is, turn it transparent
    for (let pixel = 0; pixel < data.length / 4; pixel++) {
        var r = data[pixel * 4],
            g = data[pixel * 4 + 1],
            b = data[pixel * 4 + 2];
        if (r === 255 && g === 0 && b === 255) {
            data[pixel * 4] = 0;
            data[pixel * 4 + 1] = 0;
            data[pixel * 4 + 2] = 0;
            data[pixel * 4 + 3] = 0;
        }
    }
    imageData.data = data;

    //put the new pixels colors
    contextBuf.putImageData(imageData, 0, 0);

    //dont know why but its needed to reset the onload event for stop calling it
    image.onload = () => {}

    //set the source of the image the same as the canvas ( with the other background )
    image.src = contextBuf.canvas.toDataURL();
}

//function to load JSONs
async function loadJSON(name) {
    NJSONs++;
    const response = await fetch(name);
    const jsonObject = await response.json();
    return jsonObject;
}

// load the campaign

var campaignPromise = loadJSON('../src/mods/default/default.json'),
    campaign;
campaignPromise.then((value) => {
    NJSONsLoaded++;
    campaign = value
    console.log('ulfkcn euh');
});
console.log('aaaaaaaaaaaaaaaa');
console.log(campaign);
var player;
