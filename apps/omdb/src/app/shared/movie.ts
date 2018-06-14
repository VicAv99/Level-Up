import { Rating } from "./rating";

export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Release: string;
  Runtime: string;
  Genre: string;
  Plot: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}
