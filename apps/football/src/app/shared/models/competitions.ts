import { Links } from "./links";

export interface Competitions {
  _links: Links;
  id: number;
  caption: string;
  league: string;
  year: string;
  currentMatchday: number;
  numberOfMatchdays: number;
  numberOfTeams: number;
  numberOfGames: number;
  lastUpdated: string;
}
