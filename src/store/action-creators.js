export const newGameBirdsBasic = () => ({
  type: 'NEW_GAME_BIRDS_BASIC',
});

export const newGameAnimalsBasic = () => ({
  type: 'NEW_GAME_ANIMALS_BASIC',
});

export const nextLevel = (state) => ({
  type: 'NEXT_LEVEL',
  state,
});

export const selectAnswer = (state) => ({
  type: 'SELECT_ANSWER',
  state,
});

export const deleteNotification = (id) => ({
  type: 'DELETE_NOTIFICATION',
  id,
});

export const addNotification = (notification) => ({
  type: 'ADD_NOTIFICATION',
  notification,
});

export const updateSoundVolumeSettings = (settings) => ({
  type: 'UPDATE_SOUND_VOLUME_SETTINGS',
  settings,
});

export const updateStateFromStorage = (state) => ({
  type: 'UPDATE_STATE_FROM_STORAGE',
  state,
});

export const restartGame = () => ({
  type: 'RESTART_GAME',
});

export const newGame = () => ({
  type: 'NEW_GAME',
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

export {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
  setSearchValue,
  setCountryCode,
  setFilterCase,
};
