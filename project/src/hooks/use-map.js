import {useEffect, useState} from 'react';
import leaflet from 'leaflet';


function useMap(mapRef, city) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const mapView = leaflet.map(mapRef.current, {
        center: {
          lat: city.latitude,
          lng: city.longitude,
        },
        zoom: city.zoom,
        zoomControl: false,
        marker: true,
      });


      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(mapView);

      setMap(mapView);
      return () => {
        // console.log(1);
        // mapView.remove();
        mapView.off();
      };
    }
  }, [mapRef, map, city]);

  return map;
}

export default useMap;
