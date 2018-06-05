function generateTemp(data) {
  let el = document.getElementById('temp');
  el.innerHTML = `${data.temp} °C.`;
}

let endpoint = 'https://1x3zpzk9c2.execute-api.us-east-1.amazonaws.com/dev/weather';

fetch(endpoint, {mode: 'cors'})
  .then((resp) => {
    return resp.json();
  }).then(generateTemp);