import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MdListModule, MdIconModule } from '@angular/material';

// modules
import { SHARED_COMPONENTS } from './components/index';

const SHARED_MODULES: any[] = [
  CommonModule,
  HttpModule,
  FormsModule,
  RouterModule,
  MdListModule,
  MdIconModule
];

/**
 * SharedModule
 * Only for shared components, directives and pipes
 * Do not specify providers here
 * https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#what-kinds-of-modules-should-i-have-and-how-should-i-use-them-
 */

@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  declarations: [
    ...SHARED_COMPONENTS
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS,
  ]
})
export class SharedModule {}
