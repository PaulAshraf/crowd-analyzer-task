export const api =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3001/charts'
		: 'https://run.mocky.io/v3/87c01ec4-d5c9-4e0e-bb09-451e433aacb8'
