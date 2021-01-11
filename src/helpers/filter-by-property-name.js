const filterByPropertyName = (arr, propName, value) => {
  const filtered = arr.filter((obj) => {
    return obj[propName].toLowerCase() === value.toLowerCase();
  });

  if (filtered.length === 0) {
    return {};
  }

  return filtered[0];
}

export default filterByPropertyName;
