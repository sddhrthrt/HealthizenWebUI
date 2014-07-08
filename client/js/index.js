initialize = function() {
    var bangalore = new google.maps.LatLng(12.9667, 77.5667);
    var mapOptions = {
      center: bangalore, 
      zoom: 11,
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    bbmp_ftable_layer = new google.maps.FusionTablesLayer({
        query: {
            select: '\'WARDNAME\'',
            from: "1b2YZnRzzm7lsvqHLJFTu3ui63xN3CXGiS9Oi91DL",
        }
    });
    bbmp_ftable_layer.setMap(map);
}
