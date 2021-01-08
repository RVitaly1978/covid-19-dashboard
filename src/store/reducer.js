import initialState from './initialState';

import {
  getTableData,
  getListData,
} from '../helpers';

function reducer(state = initialState, action = {}) {
  // const newState = {};

  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        isLoading: true,
      };

    case 'FETCH_DATA_SUCCESS':
      const { lastUpdateCovidData, summaryCovidData } = action;

      return {
        ...state,
        lastUpdateCovidData,
        summaryCovidData,
        tableData: getTableData({ ...state, summaryCovidData }),
        listData: getListData({ ...state, summaryCovidData }),
        isLoading: false,
      };

    case 'FETCH_DATA_FAILURE':
      const { notification } = action;

      return {
        ...state,
        isLoading: false,
        hasError: true,
        notifications: [...state.notifications, notification],
      };

    case 'SET_SEARCH_VALUE':
      const searchValue = action.value.toLowerCase();

      return {
        ...state,
        searchValue,
        listData: getListData({ ...state, searchValue }),
      };

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
