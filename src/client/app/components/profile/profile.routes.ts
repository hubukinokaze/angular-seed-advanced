import { ProfileComponent } from './profile.component';

export const ProfileRoutes: Array<any> = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profile/:email',
    component: ProfileComponent
  }
];
