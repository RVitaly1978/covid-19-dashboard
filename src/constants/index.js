export const GLOBAL_COUNTRY_CODE = 'UN';
export const GLOBAL_COUNTRY = 'Global';
export const GLOBAL_SLUG = 'global';
export const GLOBAL_CAPITAL = '';

export const CONFIRMED = 'confirmed';
export const RECOVERED = 'recovered';
export const DEATHS = 'deaths';

export const DEFAULT_SEARCH_VALUE = '';
export const DEFAULT_FILTER_CASE = CONFIRMED;

export const DEFAULT_LATLNG = [20, 0];
export const DEFAULT_GLOBAL_ZOOM = 0;
export const DEFAULT_COUNTRY_ZOOM = 4;

export const DEFAULT_UPDATE_DELAY = 3600000; // 1 hour
export const DEFAULT_CLOSE_NOTIFICATION_DELAY = 10000;

export const cases = [
  { itemCase: CONFIRMED, color: '#040185', colorRanges: ['#b7b6fc', '#6d6bed', '#3230cf', '#1512b8', '#040185'] },
  { itemCase: RECOVERED, color: '#114d02', colorRanges: ['#ccfcc0', '#85de6f', '#4bb830', '#25870c', '#114d02'] },
  { itemCase: DEATHS, color: '#b50e02', colorRanges: ['#fc8981', '#f2645a', '#e53a2e', '#de2114', '#b50e02'] },
];

export const BY_VALUE = 'value';
export const BY_COUNTRY = 'country';
export const sortBy = [
  { sortBy: BY_VALUE, label: 'by value' },
  { sortBy: BY_COUNTRY, label: 'by country' },
];
export const DEFAULT_SORT_BY = BY_VALUE;

export const SORT_ORDER_UP = 'up';
export const SORT_ORDER_DOWN = 'down';
export const DEFAULT_SORT_ORDER = SORT_ORDER_UP;

export const labels = {
  isDataNewLabelOn: 'Last day',
  isDataNewLabelOff: 'Summary',
  isDataPer100LabelOn: 'Per100',
  isDataPer100LabelOff: 'Total',
};

export const identifiers = {
  isDataNewSwitcherId: 'isDataNew',
  isDataPer100SwitcherId: 'isDataPer100',
  caseSwitcherRadioName: 'caseSwitcher',
  fullscreenNode: 'fullscreen',
  notificationCloseBtn: 'closeNotification',
  sortSwitcherRadioName: 'sortSwitcher',
};

export const footer = {
  authorGitHubLink: 'https://github.com/RVitaly1978',
  authorGitHubText: 'RVitaly1978',
  rssLink: 'https://rs.school/js/',
};

export const tooltips = {
  caseSwitcher: 'Select case',
  sortSwitcher: 'Sort by country name or by value',
  sortDescAsc: 'Sort in descending or ascending order',
  toggleSummary: 'Show data for the entire period or for the last day',
  toggleTotal: 'Show data absolute or based on 100k population',
};
