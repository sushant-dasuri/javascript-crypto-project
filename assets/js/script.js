let baseUrl = "https://api.coinranking.com/v2/coins";
let proxyUrl = "https://cors-anywhere.herokuapp.com/";
let apiKey ="coinrankingc54dc96a47d97980147c73a0a467007cd0dd89f6900c8e7b";
let cryptoCoin = "";

let apiUrl = `${proxyUrl}${baseUrl}`;

fetch(`${proxyUrl}${baseUrl}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-My-Custom-Header': `${apiKey}`,
      'Access-Control-Allow-Origin': "*"
    }
})
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data);
        let coinsData = json.data.coins;

        if (coinsData.length > 0) {
         cryptoCoin = "";
        }
        //For Loop Starts
        coinsData.forEach((coin) => {
            cryptoCoin += "<tr>";
            cryptoCoin += `<td> ${coin.uuid} </td>`;
            cryptoCoin += `<td> ${coin.btcPrice} </td>`;
            cryptoCoin += `<td> ${coin.rank}</td>`;
            cryptoCoin += `<td> ${coin.tier} </td>`;
            cryptoCoin += `<td> ${coin.name}</td>`;
            cryptoCoin += `<td> $${Math.round(coin.price)} Billion</td>`;
            cryptoCoin += `<td> ${coin.symbol}</td>`;"<tr>";
        });
        //For Loop Ends
        document.getElementById("data").innerHTML = cryptoCoin;
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });