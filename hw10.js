let vg_1 = "hw10.json";
vegaEmbed("#map", vg_1, {"actions": false}).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

let vg_2 = "UFOtimes.json";
vegaEmbed("#heatmap", vg_2, {"actions": false}).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

let vg_3 = "Shapes.json";
vegaEmbed("#barchart", vg_3, {"actions": false}).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

let vg_4 = "bubbleplot.json";
vegaEmbed("#bubbleplot", vg_4, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);

let vg_5 = "scatterplot.json";
vegaEmbed("#scatterplot", vg_5, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);
   
let vg_6 = "cities.json";
vegaEmbed("#cities", vg_6, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);