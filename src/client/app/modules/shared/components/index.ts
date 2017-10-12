import { NavbarComponent, LoginComponent } from './navbar/navbar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';

export const SHARED_COMPONENTS: any[] = [
  NavbarComponent,
  ToolbarComponent,
  FooterComponent,
  LoginComponent,
];

export * from './navbar/navbar.component';
export * from './toolbar/toolbar.component';
export * from './footer/footer.component';
