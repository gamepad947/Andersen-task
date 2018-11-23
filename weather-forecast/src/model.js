var dataModul = (function () {
  function getLocation(success, error) {
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('No location detected');
    }

  };
  function getData(url) {
    return fetch(url)
      .then(response => response.json());
  }
  return {
    getLocation,
    getData
  }
})();
