if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var geocoder = new google.maps.Geocoder;
      var point = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
      geocoder.geocode({'latLng': point}, function (locations, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          for (var location of locations) {
            if ($.inArray('locality', location.types) != -1) {
              console.log('Your location is: ' + location.formatted_address);
              break;
            }
          };
        }
      });
    });
  }