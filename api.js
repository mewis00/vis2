var vis_1 = "gender.json";
vegaEmbed("#gender_vis", vis_1, {"actions": false}).then(function(result) {  
}).catch(console.error);

var vis_2 = "mental_health.json";
vegaEmbed("#mental_health_vis", vis_2, {"actions": false}).then(function(result) {  
}).catch(console.error);

var vis_3 = "race.json";
vegaEmbed("#race_vis", vis_3, {"actions": false}).then(function(result)   {  
}).catch(console.error);


var vg_1 = "Map.json";
vegaEmbed("#map1", vg_1).then(function(result) {  
}).catch(console.error);

var vg_2 = "map2.json";
vegaEmbed("#map2", vg_2).then(function(result) {  
}).catch(console.error);
