import { Ratings } from "./ratings";

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
  Ratings: Ratings[];
  imdbRating: string;
  imdbVotes: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
}
