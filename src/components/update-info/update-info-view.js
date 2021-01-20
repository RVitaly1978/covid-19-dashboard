import React from 'react';

import st from './update-info.module.scss';

const UpdateInfo = ({ lastUpdate = 'no data' }) => {
  return (
    <div className={st.view_container}>
      <div className={st.view_content}>
        <p>
          {'update: '}
          <span className={st.marked}>{lastUpdate}</span>
        </p>
      </div>
    </div>
  );
}

export default UpdateInfo;
