import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogImageComponent } from './dog-image/dog-image.component';
import { HttpClientModule } from '@angular/common/http';
import { HighestRatedDisplayComponent } from './highest-rated/highest-rated.component';
import { RateDogsComponent } from './rate-dogs/rate-dogs.component';

@NgModule({
  declarations: [
    AppComponent,
    DogImageComponent,
    HighestRatedDisplayComponent,
    RateDogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
