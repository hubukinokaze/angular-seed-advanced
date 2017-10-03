// angular
import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

// app
import { t } from '../modules/test/index';
import { Config } from '../modules/core/index';
import { TEST_CORE_PROVIDERS, TEST_HTTP_PROVIDERS } from '../modules/core/testing/index';

// module
import { APP_COMPONENTS } from './index';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NovelComponent } from './novel/novel.component';
// import { ArtComponent } from './art/art.component';
// import { MangaComponent } from './manga/manga.component';

const config:Route[] = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'novel', component: NovelComponent}
  // {path: 'art', component: ArtComponent},
  // {path: 'manga', component: MangaComponent}
];

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [
      RouterTestingModule.withRoutes(config)
    ],
    declarations: [
      TestComponent,
      ...APP_COMPONENTS
    ],
    providers: [
      TEST_CORE_PROVIDERS(),
      TEST_HTTP_PROVIDERS(),
    ]
  });
};

export function main() {
  t.describe('@Component: AppComponent', () => {

    t.be(testModuleConfig);

    t.it('should build without a problem',
      t.async(() => {
        TestBed.compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            t.e(fixture.nativeElement).toBeTruthy();
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-app></sd-app>'
})
class TestComponent {}
