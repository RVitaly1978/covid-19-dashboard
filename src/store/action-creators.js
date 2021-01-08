export const deleteNotification = (id) => ({
  type: 'DELETE_NOTIFICATION',
  id,
});

export const addNotification = (notification) => ({
  type: 'ADD_NOTIFICATION',
  notification,
});

//----------------------------------------------------

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

const setSearchValue = (value) => {
  return {
    type: 'SET_SEARCH_VALUE',
    value,
  };
}

const setCountryCode = (value) => {
  return {
    type: 'SET_COUNTRY_CODE',
    value,
  };
}

const setFilterCase = (value) => {
  return {
    type: 'SET_FILTER_CASE',
    filterCase: value,
  };
}

const setDefaultCountryCode = () => {
  return {
    type: 'SET_DEFAULT_COUNTRY_CODE',
  };
}

const setIsDataNew = (value) => {
  return {
    type: 'SET_IS_DATA_NEW',
    isDataNew: value,
  };
}

const setIsDataPer100 = (value) => {
  return {
    type: 'SET_IS_DATA_PER100',
    isDataPer100: value,
  };
}

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
};
