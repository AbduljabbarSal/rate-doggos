import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rate-dogs',
  template: `
  <div class = "dogContainer">
    <img [src]="photoUrl" alt="photo"> 
    <div>
      <input type="number" id="rating" min="1" max="10">
      <button (click)="rateImage()">Rate</button>
      <button (click)="navigateToHighestRated()">See highest rated image</button>
    </div>
  </div>
  `,
  styles: [
    `
    .dogContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30%;
        width: 30%;
      }
      img{
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }
    `
  ]
})
export class RateDogsComponent {
  photoUrl: string = '';

  constructor(private http: HttpClient, private router: Router) {
    
  }
  navigateToHighestRated() {
    this.router.navigate(['/highest-rated'], { queryParams: { url: localStorage.getItem("highest-rated-image-url") } });
  }
  ngOnInit() {
    this.http.get('https://dog.ceo/api/breeds/image/random').subscribe({
      next: (response: any) => {
        this.photoUrl = response.message;
    },
      error: (err: any) => console.log('Error occurred while fetching the photo from API', err)
    });
  }

  rateImage(): void {
    const rating = (document.getElementById('rating') as HTMLInputElement).value;
    localStorage.setItem(this.photoUrl, rating);
    console.log(`Image rated ${rating}`);
    this.http.get('https://dog.ceo/api/breeds/image/random').subscribe({
      next: (response: any) => {
        this.photoUrl = response.message;
    },
      error: (err: any) => console.log('Error occurred while fetching the photo from API', err)
    });
  }
}
