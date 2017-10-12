import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdListModule, MdIconModule, MdMenuModule, MdButtonModule, MdTabsModule, MdDialogModule, MdFormFieldModule, MdInputModule } from '@angular/material';

// modules
import { SHARED_COMPONENTS } from './components/index';

const SHARED_MODULES: any[] = [
  CommonModule,
  HttpModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  BrowserAnimationsModule,
  MdListModule,
  MdIconModule,
  MdMenuModule,
  MdButtonModule,
  MdTabsModule,
  MdDialogModule,
  MdFormFieldModule,
  MdInputModule
];

/**
 * SharedModule
 * Only for shared components, directives and pipes
 * Do not specify providers here
 * https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#what-kinds-of-modules-should-i-have-and-how-should-i-use-them-
 */

@NgModule({
  imports: [
    ...SHARED_MODULES,
  ],
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS,
  ],
  entryComponents: [
    ...SHARED_COMPONENTS,
  ]
})
export class SharedModule {}
