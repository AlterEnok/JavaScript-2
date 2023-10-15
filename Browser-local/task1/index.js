function getLocalStorageData() {
  const localStorageData = {};

  for (let i = 0; i < localStorageData.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    try {
      localStorageData[key] = JSON.parse(value);
    } catch (error) {
      localStorageData[key] = value;
    }
  }

  return localStorageData;
}
