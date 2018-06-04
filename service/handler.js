'use strict';

module.exports.getTheWeather = (event, context, callback) => {

  // some fake temp data
  const data = { temp: 100.3 };
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify(data),
  };

  callback(null, response);
};