export interface ImdbMovies {
  id: number;
  rank: number;
  title: string;
  fullTitle: string;
  year: Date;
  image: string;
  crew: string;
  imDbRating: number;
  imDbRatingCount: number;
}

export interface Moveis {
  nome: string;
  ano: number;
  diretor: string;
  genero: string;
  descricao: string;
  poster: string;
}
