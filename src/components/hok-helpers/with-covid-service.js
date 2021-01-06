import React, { useContext } from 'react';

import { CovidServiceContext } from '../../context';

const withCovidService = (mapMethodToProps) => (Wrapped) => {
  return (props) => {
    const service = useContext(CovidServiceContext);
    const serviceProps = mapMethodToProps(service);

    return (
      <Wrapped {...props} {...serviceProps} />
    );
  };
}

export default withCovidService;
