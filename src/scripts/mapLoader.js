// @ts-check
/**
 * 
 * @param {JSONCampaign} campaign 
 */
function loadMap(campaign) {
    let stages = campaign['stages'];
    let tiles = {
        tilesObjects: [],
        tilesPrefabs: {}
    }

    stages.forEach(stage => {
        console.log(stage + '\n');
        stage.forEach(level => {
            
                level.forEach(layer => {
                    layer.forEach(line => {
                        cells = line.split('#');
                        cells.forEach(cell => {
                            tiles.tilesPrefabs[cell] = campaign['settings'][cell];
                            tiles.tilesObjects
                        });
                    })
            })
        })
    });
}