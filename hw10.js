var vg_1 = "hw10.json";
vegaEmbed("#map", vg_1).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
var vg_2 = "UFOtimes.json";
vegaEmbed ("heatmap", vg_2).then(function(result){
   // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view 
}).catch(console.error);
