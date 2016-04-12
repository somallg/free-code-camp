const CacheManager = () => {

  const getCurrentTimeInSeconds = () => {
    return new Date().getTime() / 1000;
  };

  const init = () => {
    return {
      metric: null,
      imperial: null,
      timeStamp: getCurrentTimeInSeconds()
    };
  };

  let cachedWeatherData = init();

  const isCacheExpired = () => {
    return cachedWeatherData.timeStamp + 60 < getCurrentTimeInSeconds();
  };

  const flushCache = () => {
    cachedWeatherData = init();
  };

  const putToCache = (units, data) => {
    cachedWeatherData[units] = data;
    cachedWeatherData.timeStamp = getCurrentTimeInSeconds();
  };

  const isInCache = (units) => {
    return cachedWeatherData[units] !== null;
  };

  const getData = (units) => {
    return cachedWeatherData[units];
  };

  return { isCacheExpired, flushCache, putToCache, isInCache, getData };
};

export default CacheManager;
