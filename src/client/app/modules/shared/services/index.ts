import { DataService } from './data/data.services';
import { DropboxService } from '../../../services/DropboxService';
import { AuthService } from '../../../services/AuthService';
import { CookieService } from 'ngx-cookie';

export const SHARED_SERVICES: any[] = [
  AuthService,
  DataService,
  DropboxService,
  CookieService,
];

export * from './data/data.services';
