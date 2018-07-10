export interface Album {
  id: number;
  name: string;
  images: string;
  release_date: string;
  artists: string;
  external_urls: { spotify: string };
  tracks: { items: string };
}
