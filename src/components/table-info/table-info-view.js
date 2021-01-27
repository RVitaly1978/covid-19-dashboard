import React from 'react';

import { getColorByFilterCase } from '../../helpers';

import st from './table-info.module.scss';

const TableInfo = ({
  countryCode, country, flag, population, confirmed, recovered, deaths,
}) => {
  return (
    <div className={st.view_container} style={{ backgroundImage: `url(${flag})` }}>

      <div className={st.content_data}>

        <h3 className={st.content_title}>{`${country} (${countryCode})`}</h3>

        <p className={st.content_population}>population: {population}</p>

        <table className={st.content_cases}>
          <tbody>
            <tr>
              <td><span className={st.row_title}>confirmed:&nbsp;</span></td>
              <td><span className={st.marked} style={{ color: getColorByFilterCase('confirmed') }}>
                {confirmed}</span>
              </td>
            </tr>
            <tr>
              <td><span className={st.row_title}>recovered:&nbsp;</span></td>
              <td><span className={st.marked} style={{ color: getColorByFilterCase('recovered') }}>
                {recovered}</span>
              </td>
            </tr>
            <tr>
              <td><span className={st.row_title}>deaths:&nbsp;</span></td>
              <td><span className={st.marked} style={{ color: getColorByFilterCase('deaths') }}>
                {deaths}</span>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );
}

export default TableInfo;
