import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = leaflet.icon({
  iconUrl: '/img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: '/img/pin-active.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function MapCity({city, offers, selectedOfferId}) {
  const mapRef = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    map.current = leaflet.map(mapRef.current, {
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
      .addTo(map.current);

    return () => {
      map.current.remove();
    };
  }, [city]);

  useEffect(() => {
    const markers = [];

    offers.forEach((offer) => {
      const marker =
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            icon: (offer.id === selectedOfferId)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map.current);

      markers.push(marker);
    });

    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [offers, selectedOfferId]);

  return (
    <section className="cities__map map">
      <div id="map" style={{height: '100%'}} ref={mapRef}/>
    </section>
  );
}

MapCity.propTypes = {
  city: PropTypes.object.isRequired,
  offers: PropTypes.array.isRequired,
  selectedOfferId: PropTypes.number,
};

export default MapCity;
