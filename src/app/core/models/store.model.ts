export interface GetStoresRs {
  count: number;
  next: unknown;
  previous: unknown;
  results: Store[];
}

export interface Store {
  id: number;
  name: string;
  domain: string;
  slug: string;
  games_count: number;
  image_background: string;
  games?: Game[];
  description?: string;
}

export interface Game {
  id: number;
  slug: string;
  name: string;
  added: number;
}
