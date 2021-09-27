const {fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss_promised')

fetchMyIP()
.then(fetchCoordsByIP)
.then(fetchISSFlyOverTimes)
.then(body => console.log(body))
.catch((error) => {
  console.log("It didn't work: ", error.message);
});