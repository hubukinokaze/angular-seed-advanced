// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { NovelRoutes } from './novel/novel.routes';
// import { ArtRoutes } from './art/art.routes';
// import { MangaRoutes } from './manga/manga.routes';

export const routes: Array<any> = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...NovelRoutes
  // ...ArtRoutes,
  // ...MangaRoutes
];
