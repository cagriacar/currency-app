/* fetch("https://currency-exchange.p.rapidapi.com/exchange?from=USD&to=TRY&q=100", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency-exchange.p.rapidapi.com",
		"x-rapidapi-key": "ddb5878c9emshdcb5450987ab7f7p1d39bcjsn1c1c650172a5"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
}); */

/* fetch("https://currency-exchange.p.rapidapi.com/listquotes", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency-exchange.p.rapidapi.com",
		"x-rapidapi-key": "ddb5878c9emshdcb5450987ab7f7p1d39bcjsn1c1c650172a5"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
}); */

/* const getCurrencyAPI = async () => {
    const response = await fetch("https://currency-exchange.p.rapidapi.com/exchange?from=USD&to=TRY&q=100", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency-exchange.p.rapidapi.com",
		"x-rapidapi-key": "ddb5878c9emshdcb5450987ab7f7p1d39bcjsn1c1c650172a5"
	}
})
    if (response.status !== 200) {
	    throw new Error('Veriler alınamıyor!!!');
  }
    const data =  await response.json();
    return data;
}

getCurrencyAPI()
.then((data) => {
    console.log("Resolved : ", data);
  })
  .catch((err)=>{
  console.log('Rejected : ', err.message)
  }); */

