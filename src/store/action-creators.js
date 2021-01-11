const fetchDataRequest = () => {
  return {
    type: 'FETCH_DATA_REQUEST',
  };
};

const fetchDataSuccess = (data) => {
  return {
    type: 'FETCH_DATA_SUCCESS',
    ...data,
  };
}

const fetchDataFailure = (notification) => {
  return {
    type: 'FETCH_DATA_FAILURE',
    notification,
  };
}

const setSearchValue = (searchValue) => {
  return {
    type: 'SET_SEARCH_VALUE',
    searchValue,
  };
}

const setCountryCode = (countryCode) => {
  return {
    type: 'SET_COUNTRY_CODE',
    countryCode,
  };
}

const setFilterCase = (filterCase) => {
  return {
    type: 'SET_FILTER_CASE',
    filterCase,
  };
}

const setDefaultCountryCode = () => {
  return {
    type: 'SET_DEFAULT_COUNTRY_CODE',
  };
}

const setIsDataNew = (isDataNew) => {
  return {
    type: 'SET_IS_DATA_NEW',
    isDataNew,
  };
}

const setIsDataPer100 = (isDataPer100) => {
  return {
    type: 'SET_IS_DATA_PER100',
    isDataPer100,
  };
}

const deleteNotification = (id) => ({
  type: 'DELETE_NOTIFICATION',
  id,
});

const addNotification = (notification) => ({
  type: 'ADD_NOTIFICATION',
  notification,
});

export {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  setSearchValue,
  setCountryCode,
  setFilterCase,
  setDefaultCountryCode,
  setIsDataNew,
  setIsDataPer100,
  deleteNotification,
  addNotification,
};
