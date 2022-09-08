export interface SearchInput {
  term: string;
  // media: 'all' | 'audiobook' | 'ebook' | 'movie' | 'music' | 'musicvideo' | 'podcast' | 'tvShow' | 'shortFilm' | 'software';
  limit: number;
  offset: number;
  entity: ('musicArtist' | 'song' | 'album')[];
}
