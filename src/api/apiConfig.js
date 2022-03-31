const apiConfig = {
	baseUrl: 'https://api.themoviedb.org/3/movie/550?api_key=250f1b16e72111b02a281e86ec9e23c2',
	apiKey: '250f1b16e72111b02a281e86ec9e23c2',
    originImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,

};


export default apiConfig;