import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighestRatedDisplayComponent } from './highest-rated/highest-rated.component';
import { RateDogsComponent } from './rate-dogs/rate-dogs.component';
import { DogImageComponent } from './dog-image/dog-image.component';

const routes: Routes = [
  { path: '', component: DogImageComponent },
  { path: 'rate-dogs', component: RateDogsComponent },
  { path: 'highest-rated', component: HighestRatedDisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
