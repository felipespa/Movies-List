import { environment } from 'src/environments/environment';

const prefixApi = environment.baseUrlImdbApi;
const apiKey = 'k_d8c5rosw';

export const apiEndpoints = {
  top250Movies: {
    getMovies: `${prefixApi}/Top250Movies/${apiKey}`,
  },
};
