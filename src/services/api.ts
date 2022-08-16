import axios from 'axios'

const api = axios.create({
	baseURL:
		'https://us-central1-rapid-api-321400.cloudfunctions.net/instaviagem-challenge',
})

export default api
