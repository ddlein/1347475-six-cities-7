import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';

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
  const map = useMap(mapRef, city);


  useEffect(() => {
    if (map) {
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
          .addTo(map);
        return () => {
          marker.remove();
        };
      });
    }
  }, [map, offers, selectedOfferId]);

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
