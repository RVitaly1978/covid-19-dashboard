import React from 'react';

import { BounceLoading } from '../spinners';

import st from './update-info.module.scss';

const UpdateInfo = ({ lastUpdate = 'no data', isLoading }) => {
  const data = isLoading
    ? <BounceLoading />
    : <span className={st.marked}>{lastUpdate}</span>;

  return (
    <div className={st.view_container}>
      {'update:'}&nbsp;{data}
    </div>
  );
}

export default UpdateInfo;
