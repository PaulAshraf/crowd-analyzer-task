export const api =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3001/charts'
		: 'https://run.mocky.io/v3/1dfbd43c-3945-4b9e-800e-c0e3ff0eb802'
