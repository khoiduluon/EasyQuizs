
function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 10.852888138216795, lng: 106.62902085903762},
        zoom: 18,
        mapId: '7f9bfe1202841f54'
      });

      new google.maps.Marker({
        position: {lat: 10.852889319696638, lng: 106.62946511415967},
        map,
        title: "Hello World!",
      });    
}

