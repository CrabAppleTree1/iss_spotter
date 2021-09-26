/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const request = require("request");
const ipString = 'https://api.ipify.org?format=json';

const fetchMyIP = function(callback) {
  request(
    `${ipString}`,
    (error, response, body) => {
      if (error) {
        return callback(error, null);
      }
      if (response.statusCode !== 200) {
        const msg = `Status Code ${response.statusCode} fetching IP. Response: ${body}`;
        callback(Error(msg), null);
        return;
      }
      const ip = JSON.parse(body).ip;
      callback(null, ip);
    });
};
module.exports = { fetchMyIP };