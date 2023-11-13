import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatureModule } from './feature/feature.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgbModule, FeatureModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
