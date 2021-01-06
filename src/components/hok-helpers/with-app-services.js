import React, { useContext } from 'react';

import { CovidServiceContext } from '../../context';
import { CountriesServiceContext } from '../../context';

const withAppServices = (mapMethodToProps) => (Wrapped) => {
  return (props) => {
    const covidService = useContext(CovidServiceContext);
    const countriesService = useContext(CountriesServiceContext);

    const serviceProps = mapMethodToProps(covidService, countriesService);

    return (
      <Wrapped {...props} {...serviceProps} />
    );
  };
}

export default withAppServices;
