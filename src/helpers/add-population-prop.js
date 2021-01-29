const addPopulationProp = (resource, result) => {
  const propName = 'population';
  const filterPropName = 'country';

  return result.map((item) => {
    const filtered = resource
      .find(data => data[filterPropName] === item[filterPropName]);

    if (!filtered) {
      return {
        ...item,
        [propName]: undefined,
      };
    }

    return {
      ...item,
      [propName]: filtered[propName],
    };
  });
};

export default addPopulationProp;
