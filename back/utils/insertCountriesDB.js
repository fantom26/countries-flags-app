// Insert API Data In MongoDB Database
const insertCountriesDB = async () => {
  const response = await axios.get(
    "https://restcountries.com/v2/all?fields=name,capital,flags,population,region"
  );
  for (let i = 0; i < response.data.length; i++) {
    const country = new Country({
      name: response.data[i].name,
      capital: response.data[i].capital,
      region: response.data[i].region,
      population: response.data[i].population,
      flags: response.data[i].flags,
      independent: response.data[i].independent,
    });
    country.save();
  }
};
