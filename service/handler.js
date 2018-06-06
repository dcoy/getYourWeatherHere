const fetch = require('node-fetch');

module.exports.getTheWeather = (event, context, callback) => {
  
  // Defaults
  const lat='30.267153';
  const long='-97.74306079999997';
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${process.env.APPID}`;

  // some fake temp data
  fetch(endpoint)
    .then(res => res.json())
    .then(body => {
      const response = {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ temperature: (((body.main.temp - 273.15) * 1.8) + 32).toFixed(1) }),
      };
      callback(null, response);
    })
};