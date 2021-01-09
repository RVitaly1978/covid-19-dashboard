import initialState from './initialState';

function reducer(state = initialState, action = {}) {
  // const newState = {};

  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        isLoading: true,
      };

    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        lastUpdateCovidData: action.lastUpdateCovidData,
        summaryCovidData: action.summaryCovidData,
        isLoading: false,
      };

    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        isLoading: false,
        hasError: true,
        notifications: [...state.notifications, action.notification],
      };

    case 'SET_IS_DATA_PER100':
      return {
        ...state,
        isDataPer100: action.isDataPer100,
      };

    case 'SET_IS_DATA_NEW':
      return {
        ...state,
        isDataNew: action.isDataNew,
      };

    case 'SET_DEFAULT_COUNTRY_CODE':
      return {
        ...state,
        countryCode: initialState.countryCode,
      };

    case 'SET_FILTER_CASE':
      return {
        ...state,
        filterCase: action.filterCase,
      };

    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.value.toLowerCase(),
      };

    case 'SET_COUNTRY_CODE':
      if (action.value) {
        return {
          ...state,
          searchValue: initialState.searchValue,
          countryCode: action.value,
        };
      } else {
        if (state.listData.length !== 1) {
          return { ...state };
        }

        return {
          ...state,
          searchValue: initialState.searchValue,
          countryCode: state.listData[0],
        };
      }

    // case 'SELECT_ANSWER':
    //   return {...state, ...action.state};

    // case 'NEXT_LEVEL':
    //   newState.hasCorrect = false;
    //   newState.answers = [];
    //   newState.activeAnswer = null;
    //   newState.notifications = [];
    //   return {...state, ...newState, ...action.state};

    // case 'DELETE_NOTIFICATION':
    //   newState.notifications = state.notifications
    //     .filter((notification) => notification.id !== action.id);
    //   return {...state, ...newState};

    // case 'ADD_NOTIFICATION':
    //   newState.notifications = [...state.notifications, action.notification];
    //   return {...state, ...newState};

    // case 'UPDATE_SOUND_VOLUME_SETTINGS':
    //   newState.soundVolumeSettings = {...action.settings};
    //   return {...state, ...newState};

    // case 'RESTART_GAME':
    //   newState.data = [...state.data];
    //   newState.activeLevel = newState.data[0].id;
    //   newState.correctAnswer = getRandomInRange(
    //     getActiveLevelList(newState.data, newState.activeLevel).data.length);
    //   return {...initialState, ...newState};

    // case 'NEW_GAME_BIRDS_BASIC':
    //   newState.data = [...birdsBasic];
    //   newState.activeLevel = newState.data[0].id;
    //   newState.correctAnswer = getRandomInRange(
    //     getActiveLevelList(newState.data, newState.activeLevel).data.length);
    //   return {...initialState, ...newState};

    // case 'NEW_GAME_ANIMALS_BASIC':
    //   newState.data = [...animalsBasic];
    //   newState.activeLevel = newState.data[0].id;
    //   newState.correctAnswer = getRandomInRange(
    //     getActiveLevelList(newState.data, newState.activeLevel).data.length);
    //   return {...initialState, ...newState};

    // case 'NEW_GAME':
    //   return {...initialState};

    // case 'UPDATE_STATE_FROM_STORAGE':
    //   newState.notifications = [];
    //   return {...action.state, ...newState};

    default:
      return state;
  }
}

export default reducer;
