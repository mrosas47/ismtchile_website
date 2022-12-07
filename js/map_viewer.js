require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend"
  ], function(esriConfig, WebMap, MapView, ScaleBar, Legend) {

    esriConfig.apiKey = "AAPK01b6d3f8de6b40c580d8a6c377c1dde7ThDgUA07aNgRX7zlw0fM6iP0aZp9m4iBXjOxmjsazoKApX-j6kS5kch_Lw33EQ9C";

    const webmap = new WebMap({
      portalItem: {
        id: "c2afdd0bbc70436685c399e900e0206d"
      }
    });

    const view = new MapView({
      container: "viewer",
      map: webmap

    });

    const scalebar = new ScaleBar({
      view: view
    });

    view.ui.add(scalebar, "bottom-left");

    const legend = new Legend ({
      view: view
    });
    view.ui.add(legend, "top-right");

});