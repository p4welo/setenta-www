define([
    'async!http://maps.google.com/maps/api/js?sensor=false'
], function () {
    return {
        init: function (elementId) {
            var wspolrzedne = new google.maps.LatLng(51.1172973, 17.0430937);
            var opcjeMapy = {
                zoom: 17,
                center: wspolrzedne,
                scrollwheel: false,
                keyboardShortcuts: false,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                panControl: false,
                zoomControl: true,
                zoomControlOptions: {
                    style: google.maps.ZoomControlStyle.SMALL,
                    position: google.maps.ControlPosition.LEFT
                },
                scaleControl: true
            };
            var mapa = new google.maps.Map(document.getElementById(elementId), opcjeMapy);
            var rozmiar = new google.maps.Size(60, 25);
            var punkt_startowy = new google.maps.Point(0, 0);
            var punkt_zaczepienia = new google.maps.Point(50, 10);
            var opcjeMarkera =
            {
                position: wspolrzedne,
                map: mapa,
                icon: new google.maps.MarkerImage("assets/img/sys/marker-logo.png", rozmiar, punkt_startowy, punkt_zaczepienia)
            }
            var marker = new google.maps.Marker(opcjeMarkera);
        }}
});