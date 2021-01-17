import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { DEFAULT_LATLNG, DEFAULT_GLOBAL_ZOOM, DEFAULT_COUNTRY_ZOOM } from '../../constants';
import { getRangeColorByFilterCase, getColorByFilterCase, getDataToGeoJSONStyling } from '../../helpers';
import countriesGeoJSON from './countries-geoJSON';

import st from './map-info.module.scss';

const defaultStyle = (feature) => {
  return {
    fillColor: 'transparent',
    fillOpacity: 0,
    color: 'transparent',
    weight: 1,
    opacity: 0,
  };
}

const MapInfo = ({
  latlng = [], covidData, ranges, setCountryCode, filterCase,
}) => {
  const myMapRef = useRef();
  const myGeoLayerRef = useRef();
  const myInfoRef = useRef();

  useEffect(() => {
    myMapRef.current = L.map('mapId', {
      maxBounds: L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180)),
      maxBoundsViscosity: 1.0,
      minZoom: 1,
      maxZoom: 12,
      worldCopyJump: true,
      attributionControl: false,
    });

    return () => myMapRef.current && myMapRef.current.remove();
  }, []);

  useEffect(() => {
    if (myMapRef.current) {
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        accessToken: 'pk.eyJ1IjoicnZpdGFseSIsImEiOiJja2p4Ymx3ZDEwcW05MnVwZ2dicHlyd2kwIn0.TEXhkHWxKEzDhrScrjeumQ',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        maxZoom: 12,
      }).addTo(myMapRef.current);
    }
  }, []);

  useEffect(() => {
    if (!myMapRef.current) {
      return;
    }

    myGeoLayerRef.current = L.geoJSON(countriesGeoJSON, {
      style: defaultStyle,
      onEachFeature: onEachFeature,
    }).addTo(myMapRef.current);

    function highlightFeature(e) {
      const layer = e.target;

      layer.setStyle({
        fillOpacity: 0.7,
        opacity: 1,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }

      myInfoRef.current && myInfoRef.current.update(layer.feature.properties);
    }

    function resetHighlight(e) {
      const layer = e.target;

      layer.setStyle({
        fillOpacity: 0.5,
        opacity: 0.5,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }

      myInfoRef.current && myInfoRef.current.update();
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
  }, [setCountryCode]);

  useEffect(() => {
    if (!myMapRef.current) {
      return;
    }

    const options = latlng.length
      ? [latlng, DEFAULT_COUNTRY_ZOOM]
      : [DEFAULT_LATLNG, DEFAULT_GLOBAL_ZOOM];

    myMapRef.current.setView(...options);
  }, [latlng]);

  useEffect(() => {
    if (! myMapRef.current) {
      return;
    }

    const legend = L.control({position: 'bottomright'});

    legend.onAdd = function () {
      const div = L.DomUtil.create('div', `${st.info} ${st.legend}`);
      const grades = ranges;
      
      for (let i = 0; i < grades.length - 1; i += 1) {
        const color = getRangeColorByFilterCase(filterCase, grades[i] + 1, ranges);
        div.innerHTML +=
          '<i style="background:' + color + '"></i> ' + grades[i] + (grades[i + 1]
            ? '&ndash;' + grades[i + 1] + '<br>'
            : '+');
      }

      return div;
    };

    legend.addTo(myMapRef.current);

    return () => legend.remove();
  }, [filterCase, ranges]);

  useEffect(() => {
    if (!myMapRef.current) {
      return;
    }

    myInfoRef.current = L.control();

    myInfoRef.current.onAdd = function () {
      this._div = L.DomUtil.create('div', `${st.info}`);
      this.update();
      return this._div;
    };

    myInfoRef.current.update = function (props = {}) {
      const { name: country, iso_a2: countryCode } = props;
      const color = getDataToGeoJSONStyling(covidData, countryCode, 'color', '');
      const value = getDataToGeoJSONStyling(covidData, countryCode, 'value', 'no data');

      this._div.innerHTML = (Object.keys(props).length
        ? '<h4>' + country + '</h4>' +
          '<p style="color:' + color +'">' + value + '</p>'
        : 'Hover over a country');
    };

    myInfoRef.current.addTo(myMapRef.current);

    return () => myInfoRef.current && myInfoRef.current.remove();
  }, [covidData]);

  useEffect(() => {
    if (!myGeoLayerRef.current) {
      return;
    }

    const style = (feature) => {
      const countryCode = feature.properties.iso_a2;
      const color = getDataToGeoJSONStyling(covidData, countryCode, 'rangeColor', 'transparent');
      return {
        fillColor: color,
        fillOpacity: 0.5,
        color: getColorByFilterCase(filterCase),
        weight: 1,
        opacity: 0.5,
      };
    }

    myGeoLayerRef.current.setStyle(style);
  }, [covidData, filterCase]);

  return (
    <div className={st.view_container}>
      <div className={st.view_content}>

        <div
          className={st.view_map}
          id='mapId'
          aria-label='Covid-19 map'
          role='img'
        ></div>

      </div>
    </div>
  );
}

export default MapInfo;
