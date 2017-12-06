import { HomeComponent } from './home.component';

export const HomeRoutes: Array<any> = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  }
];
