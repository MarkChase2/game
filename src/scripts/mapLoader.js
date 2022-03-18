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
                        let cells = line.split('#');
                        cells.forEach(cell,pos => {
                            if(!tiles.tilesPrefabs[cell]){
                            tiles.tilesPrefabs[cell] = campaign.settings.tiles.tilesPrefabs.find(prefab => {
                                return prefab.name === cell;
                            })
                        }
                        tiles.tilesObjects.push({
                            type: cell,
                            x: pos*16,
                            y: line*16
                        });

                        });
                    })
            })
        })
    });
    console.log(tiles);
    return tiles;
}