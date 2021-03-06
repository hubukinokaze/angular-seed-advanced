// app
import { HomeRoutes } from './home/home.routes';
import { AboutRoutes } from './about/about.routes';
import { NovelRoutes } from './novel/novel.routes';
import { ArtRoutes } from './art/art.routes';
import { MangaRoutes } from './manga/manga.routes';
import { ProfileRoutes } from './profile/profile.routes';
import { NewArtRoutes } from './new_art/new_art.routes';

import { Routes } from '@angular/router';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...NovelRoutes,
  ...ArtRoutes,
  ...MangaRoutes,
  ...ProfileRoutes,
  ...NewArtRoutes
];
