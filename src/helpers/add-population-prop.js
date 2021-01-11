const addPopulationProp = (resource, result) => {
  const propName = 'population';
  const filterPropName = 'country';

  return result.map((item) => {
    const filtered = resource
      .filter((data) => data[filterPropName] === item[filterPropName]);

    const population = filtered[0][propName];

    return {
      ...item,
      [propName]: population,
    };
  });
};

export default addPopulationProp;
