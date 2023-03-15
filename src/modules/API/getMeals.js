const getAllData = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
  const getJsonObj = await response.json();
  const result = getJsonObj.slice(0, 12);
  return result.length;
};

export default getAllData;