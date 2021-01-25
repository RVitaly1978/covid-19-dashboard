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

export const cases = [
  { itemCase: CONFIRMED, color: '#a63603', colorRanges: ['#feedde', '#fdbe85', '#fd8d3c', '#e6550d', '#a63603'] },
  { itemCase: RECOVERED, color: '#006d2c', colorRanges: ['#edf8e9', '#bae4b3', '#74c476', '#31a354', '#006d2c'] },
  { itemCase: DEATHS, color: '#a50f15', colorRanges: ['#fee5d9', '#fcae91', '#fb6a4a', '#de2d26', '#a50f15'] },
];

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
};

export const footer = {
  authorGitHubLink: 'https://github.com/RVitaly1978',
  authorGitHubText: 'RVitaly1978',
  rssLink: 'https://rs.school/',
  rssText: 'RS School 2020',
};
