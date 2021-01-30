import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { DEFAULT_LATLNG, DEFAULT_GLOBAL_ZOOM, DEFAULT_COUNTRY_ZOOM } from '../../constants';
import {
  getRangeColorByFilterCase,
  getColorByFilterCase,
  getDataToGeoJSONStyling,
  formattingNumberLabel,
  numberWithSpaces,
} from '../../helpers';
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
  latlng = [], covidData, ranges, setCountryCode, filterCase, countryCode,
  tableData: { country, flag, confirmed, recovered, deaths },
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
      zoomControl: false,
    });

    return () => myMapRef.current && myMapRef.current.remove();
  }, []);

  useEffect(() => {
    if (myMapRef.current) {
      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        accessToken: 'pk.eyJ1IjoicnZpdGFseSIsImEiOiJja2p4Ymx3ZDEwcW05MnVwZ2dicHlyd2kwIn0.TEXhkHWxKEzDhrScrjeumQ',
        // id: 'mapbox/light-v10',
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

    const highlightFeature = (e) => {
      const layer = e.target;
      const { iso_a2 } = e.target.feature.properties;

      if (iso_a2 !== countryCode) {
        layer.setStyle({
          fillOpacity: 0.7,
          opacity: 1,
        });
      }

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }

      myInfoRef.current && myInfoRef.current.update(layer.feature.properties);
    }

    const  resetHighlight = (e) => {
      const layer = e.target;
      const { iso_a2 } = e.target.feature.properties;

      if (iso_a2 !== countryCode) {
        layer.setStyle({
          fillOpacity: 0.5,
          opacity: 0.5,
        });
      }

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }

      myInfoRef.current && myInfoRef.current.update();
    }

    const getTarget = (e) => {
      const { iso_a2 } = e.target.feature.properties;
      setCountryCode(iso_a2);
    }

    const onEachFeature = (feature, layer) => {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: getTarget,
      });
    }

    myGeoLayerRef.current = L.geoJSON(countriesGeoJSON, {
      style: defaultStyle,
      onEachFeature: onEachFeature,
    }).addTo(myMapRef.current);
  }, [setCountryCode, countryCode]);

  useEffect(() => {
    if (!myMapRef.current) {
      return;
    }

    const content = `
      <div class='${st.content_data}'>
        <div class='${st.data_row}'>
          <img class='${st.flag}'
            src='${flag}'
            alt='${country} flag'}></img>
          <h3 class='${st.content_title}'>${countryCode}</h3>
        </div>
        <table class='${st.content_cases}'>
          <tbody>
            <tr>
              <td><span class='${st.row_title}'>confirmed:&nbsp;</span></td>
              <td><span class='${st.marked}' style='color: ${getColorByFilterCase('confirmed')}'}>
                ${numberWithSpaces(confirmed)}</span>
              </td>
            </tr>
            <tr>
              <td><span class='${st.row_title}'>recovered:&nbsp;</span></td>
              <td><span class='${st.marked}' style='color: ${getColorByFilterCase('recovered')}'}>
                ${numberWithSpaces(recovered)}</span>
              </td>
            </tr>
            <tr>
              <td><span class='${st.row_title}'>deaths:&nbsp;</span></td>
              <td><span class='${st.marked}' style='color: ${getColorByFilterCase('deaths')}'}>
                ${numberWithSpaces(deaths)}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>`;

    let popup;
    if (latlng.length) {
      popup = L.popup({ className: st.popup_container })
        .setLatLng(latlng)
        .setContent(content)
        .openOn(myMapRef.current);
    }

    return () => popup && popup.remove();
  }, [latlng, country, flag, confirmed, recovered, deaths, countryCode]);

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
          '<i style="background:' + color + '"></i> ' + formattingNumberLabel(grades[i]) + (grades[i + 1]
            ? '&nbsp;&ndash;&nbsp;' + formattingNumberLabel(grades[i + 1]) + '<br>'
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

    myInfoRef.current = L.control({position: 'bottomleft'});

    myInfoRef.current.onAdd = function () {
      this._div = L.DomUtil.create('div', `${st.info} ${st.info__hover}`);
      this.update();
      return this._div;
    };

    myInfoRef.current.update = function (props = {}) {
      const { name: country, iso_a2: countryCode } = props;
      const color = getDataToGeoJSONStyling(covidData, countryCode, 'color', '');
      const value = getDataToGeoJSONStyling(covidData, countryCode, 'value', 'no data');

      this._div.innerHTML = (Object.keys(props).length
        ? '<h4>' + country + '</h4>' +
          '<p style="color:' + color +'; font-weight: 700">' + numberWithSpaces(value) + '</p>'
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
      const { iso_a2 } = feature.properties;
      const color = getDataToGeoJSONStyling(covidData, iso_a2, 'rangeColor', 'transparent');
      return {
        fillColor: color,
        fillOpacity: (countryCode === iso_a2) ? 1 : 0.5,
        color: getColorByFilterCase(filterCase),
        weight: (countryCode === iso_a2) ? 4 : 1,
        opacity: (countryCode === iso_a2) ? 1.0 : 0.5,
      };
    }

    myGeoLayerRef.current.setStyle(style);

    return () => myGeoLayerRef.current.setStyle(defaultStyle);
  }, [covidData, filterCase, countryCode]);

  return (
    <div className={st.view_container}>

      <div className={st.view_map}
        id='mapId'
        aria-label='Covid-19 map'
        role='img'
      />

    </div>
  );
}

export default MapInfo;
