const filterByPropertyName = (arr, propName, value) => {
  const filtered = arr
    .find(obj => obj[propName].toLowerCase() === value.toLowerCase());

  if (!filtered) {
    return {};
  }

  return filtered;
}

export default filterByPropertyName;
