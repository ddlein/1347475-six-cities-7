import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../use-map';


function MapCity({city, offers, selectedOffer}) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        leaflet
          .marker({
            lat: offer.city.location.latitude,
            lng: offer.city.location.longitude,
          }, {
            // icon: defaultCustomIcon,
            icon: (offer.id === selectedOffer.id)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers, selectedOffer]);

  return (<section className="cities__map map" style={{height: '800px'}} ref={mapRef}/>);
}

MapCity.propTypes = {
  city: PropTypes.object.isRequired,
  offers: PropTypes.array.isRequired,
  selectedOffer: PropTypes.object.isRequired,
};

export default MapCity;
