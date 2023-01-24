import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dog-image',
  template: `
  <div class = "dogContainer">
    <button (click)="navigateToRateDogs()">Rate Dogs!</button>
  </div>
  `,
  styles: [
  ]
})
export class DogImageComponent {
  constructor(private router: Router) {
    
  }
  navigateToRateDogs() {
    this.router.navigate(['/rate-dogs']);
  }
}
