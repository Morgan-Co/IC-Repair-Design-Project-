function initialize() {
    console.log('1');
    var centered     = {lat: 60.937008, lng: 60.640778};
    var markers = [];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      center: centered,
      disableDefaultUI: true,
      disableDoubleClickZoom: true,
      scrollwheel: true,
      mapTypeIds: [google.maps.MapTypeId.ROADMAP ]
    });

    $('.js-radio').each(function(){
      var lat = parseFloat($(this).attr('data-lat'));
      var lng = parseFloat($(this).attr('data-lng'));
      var id = $(this).attr('data-id');
      var marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map,
        id: id
      });
      markers.push(marker);
    });

    for(var key in markers){
      var item = markers[key];
      item.addListener('click', function() {
        var num = this.id;
        $('input[data-id='+num+']').closest('label').click();
        $('#js-list').click();
      });
    }

  }
  google.maps.event.addDomListener(window, 'load', initialize);