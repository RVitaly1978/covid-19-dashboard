import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { DEFAULT_LATLNG, DEFAULT_ZOOM } from '../../constants';
import countriesGeoJSON from './countries-geoJSON';

import st from './map-info.module.scss';

const getColor = (d) => {
  return d > 1000000000 ? '#800026' :
         d > 100000000  ? '#BD0026' :
         d > 50000000   ? '#E31A1C' :
         d > 40000000   ? '#FC4E2A' :
         d > 20000000   ? '#FD8D3C' :
         d > 10000000   ? '#FEB24C' :
         d > 5000000    ? '#FED976' :
                          '#FFEDA0';
}

const style = (feature) => {
  return {
    fillColor: getColor(feature.properties.pop_est),
    fillOpacity: 0.4,
    color: getColor(feature.properties.pop_est),
    weight: 1,
    opacity: 0,
  };
}

const MapInfo = ({ latlng = [], setCountryCode }) => {
  const myMapRef = useRef();

  useEffect(() => {
    myMapRef.current = L.map('mapId', {
      maxBounds: L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180)),
      maxBoundsViscosity: 1.0,
      minZoom: 1,
      maxZoom: 12,
      worldCopyJump: true,
    });

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      accessToken: 'pk.eyJ1IjoicnZpdGFseSIsImEiOiJja2p4Ymx3ZDEwcW05MnVwZ2dicHlyd2kwIn0.TEXhkHWxKEzDhrScrjeumQ',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      maxZoom: 17,
    }).addTo(myMapRef.current);


    // ---------------------------------------------------- geoJSON
    console.log(countriesGeoJSON); //----------------------
    const geojson = L.geoJSON(countriesGeoJSON, {
      style: style,
      onEachFeature: onEachFeature,
    }).addTo(myMapRef.current);

    function highlightFeature(e) {
      const layer = e.target;

      layer.setStyle({
        fillOpacity: 0.7,
        weight: 2,
        opacity: 1,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }

      info.update(layer.feature.properties);
    }

    function resetHighlight(e) {
      geojson.resetStyle(e.target);
      info.update();
    }

    function getTarget(e) {
      const { iso_a2 } = e.target.feature.properties;
      setCountryCode(iso_a2);
    }

    function onEachFeature(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: getTarget,
      });
    }

    // ------------------------------------------------------- control
    const info = L.control();

    info.onAdd = function () {
      this._div = L.DomUtil.create('div', `${st.info}`);
      this.update();
      return this._div;
    };

    info.update = function (props) {
      this._div.innerHTML = '<h4>Population in country</h4>' + (props ?
        '<b>' + props.iso_a2 + '</b><br />' + props.pop_est + ' people'
        : 'Hover over a country');
    };

    info.addTo(myMapRef.current);

    // ------------------------------------------------------- legend
    const legend = L.control({position: 'bottomright'});

    legend.onAdd = function (map) {
      const div = L.DomUtil.create('div', `${st.info} ${st.legend}`),
        grades = [0, 5000000, 10000000, 20000000, 40000000, 50000000, 100000000, 1000000000];

      for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
          '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
          grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }

      return div;
    };

    legend.addTo(myMapRef.current);

    return () => myMapRef.current && myMapRef.current.remove();
  }, [setCountryCode]);

  useEffect(() => {
    if (myMapRef.current) {
      const options = latlng.length
        ? [latlng, 4]
        : [DEFAULT_LATLNG, DEFAULT_ZOOM];

      myMapRef.current.setView(...options);
    }
  }, [latlng]);

  return (
    <div className={st.view_container}>
      <div className={st.view_content}>

        <div
          className={st.view_map}
          id='mapId'
          aria-label='Covid-19 map'
          role='img'
          ref={myMapRef}
        ></div>

      </div>
    </div>
  );
}

export default MapInfo;
