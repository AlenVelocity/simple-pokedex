const axios = require('axios')

module.exports = { pokeFetch }

async function pokeFetch(pokename) {
	try {
		const fetchdata = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
		const pokedata = fetchdata.data 
		return pokedata
	} catch(err) {
		return err
	}
}

