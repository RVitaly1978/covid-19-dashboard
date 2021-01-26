const THOUSAND = 1000;
const MILLION = 1000000;

const formattingNumberLabel = (num) => {
  if (num === undefined) {
    return 'no data';
  }

  if (num < THOUSAND) {
    return String(num);
  }

  if (num < MILLION) {
    return `${(num / THOUSAND).toFixed(1)}k`;
  }

  return `${(num / MILLION).toFixed(1)}M`;
};

export default formattingNumberLabel;
