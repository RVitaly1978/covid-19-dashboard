import React, { useContext } from 'react';

import ServicesContext from '../../context';

const withServices = (mapMethodToProps) => (Wrapped) => {
  return (props) => {
    const service = useContext(ServicesContext);
    const serviceProps = mapMethodToProps(service);

    return (
      <Wrapped {...props} {...serviceProps} />
    );
  };
}

export default withServices;
