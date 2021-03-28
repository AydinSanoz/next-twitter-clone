import axios from 'axios';

export default async function movieHandler(req, res) {
	const { baseUrl, api_key } = process.env;
	const { data } = await axios.get(baseUrl, {
		params: {
			api_key: api_key,
			language: 'en-US',
			query: 'bourne',
			page: 1,
			include_adult: true,
		},
	});
	res.status(200).json(JSON.stringify(data));
}
