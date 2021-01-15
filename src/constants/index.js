export const GLOBAL_COUNTRY_CODE = 'UN';
export const GLOBAL_COUNTRY = 'Global';
export const GLOBAL_SLUG = 'global';
export const GLOBAL_CAPITAL = '';

export const CONFIRMED = 'confirmed';
export const RECOVERED = 'recovered';
export const DEATHS = 'deaths';

export const DEFAULT_SEARCH_VALUE = '';
export const DEFAULT_FILTER_CASE = CONFIRMED;

export const DEFAULT_LATLNG = [0, 0];
export const DEFAULT_ZOOM = 0;

export const cases = [
  { case: CONFIRMED, color: 'yellow' },
  { case: RECOVERED, color: 'green' },
  { case: DEATHS, color: 'red' },
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
};
