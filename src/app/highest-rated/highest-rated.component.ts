import { Component } from '@angular/core';

@Component({
  selector: 'app-highest-rated-display',
  template: `
  <div *ngFor="let ratedImage of ratedImages" class="dogContainer">
    <img [src]="ratedImage.url"> 
    <p>Dog Rating: {{ratedImage.rating}}</p>
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

export class HighestRatedDisplayComponent {
  ratedImages: any[] = [];
  ngOnInit() {
    // create an empty array to store all the rated images
    let ratedImages = [];
    // loop through the keys in the local storage
    for (const key of Object.keys(localStorage)) {
      try {
        // get the rating of the current image
        const rating = JSON.parse(localStorage.getItem(key) || "");
        // push the current image and its rating to the ratedImages array
        ratedImages.push({url: key, rating: rating});
      } catch (error) {
        console.log("catch block");
      }
    }
    // sort the ratedImages array by the rating in descending order
    ratedImages.sort((a, b) => b.rating - a.rating);
    this.ratedImages = ratedImages;
  }
  
}