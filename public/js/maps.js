let platform = new H.service.Platform({
    'app_id': 'DwEwsr9jGPqClPW367W1',
    'app_code': 'Z2kf-tJrXbcL-wYJAA7AAg'
});

// Obtain the default map types from the platform object:


function landmarkGeocode() {
    let title = document.querySelector('h1').textContent;
    let geocoder = platform.getGeocodingService(),
      landmarkGeocodingParameters = {
        searchtext: title,
        jsonattributes : 1
      };
  
    geocoder.search(
      landmarkGeocodingParameters,
      showMap,
      (e) => console.log(e)
    );
  }

  function showMap(result){
    let location = result.response.view[0].result[0].place.locations[0].displayPosition;
    console.log(location);
    
    let defaultLayers = platform.createDefaultLayers();
    let map = new H.Map(
    document.querySelector('.map'),
    defaultLayers.normal.map,
    {
        zoom: 15,
        center: { lat: location.latitude, lng: location.longitude }
    });

    let toMarker = new H.map.Marker({lat:location.latitude, lng:location.longitude});
    map.addObject(toMarker);
    
    let ui = H.ui.UI.createDefault(map, defaultLayers);
  }

  landmarkGeocode();