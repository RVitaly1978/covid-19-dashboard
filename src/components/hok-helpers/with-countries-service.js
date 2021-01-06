import React, { useContext } from 'react';

import { CountriesServiceContext } from '../../context';

const withCountriesService = (mapMethodToProps) => (Wrapped) => {
  return (props) => {
    const service = useContext(CountriesServiceContext);
    const serviceProps = mapMethodToProps(service);

    return (
      <Wrapped {...props} {...serviceProps} />
    );
  };
}

export default withCountriesService;
