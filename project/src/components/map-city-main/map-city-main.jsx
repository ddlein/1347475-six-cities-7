import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {CITIES} from '../../const';

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

function MapCityMain({selectCity, offers, selectedOfferId, classMap}) {
  const mapRef = useRef(null);
  const map = useRef(null);

  useEffect(() => {
    map.current = leaflet.map(mapRef.current, {
      center: {
        lat: CITIES[selectCity].location.latitude,
        lng: CITIES[selectCity].location.longitude,
      },
      zoom: CITIES[selectCity].location.zoom,
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
  }, [CITIES[selectCity]]);

  useEffect(() => {
    const markers = [];

    offers.forEach((offer) => {
      const marker =
        leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
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
    <section className={`${classMap} map`}>
      <div id="map" style={{height: '100%'}} ref={mapRef}/>
    </section>
  );
}

MapCityMain.propTypes = {
  offers: PropTypes.array.isRequired,
  selectedOfferId: PropTypes.number,
  classMap: PropTypes.string.isRequired,
  selectCity: PropTypes.string.isRequired,
};

export default MapCityMain;
