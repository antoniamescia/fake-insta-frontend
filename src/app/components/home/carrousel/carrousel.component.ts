import { ImageService } from './../../../services/image.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { map } from 'rxjs';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  

  posts: Post[] = [];

  ngOnInit(): void {
    this.getPosts();
  }

  constructor(config: NgbCarouselConfig, private imageService: ImageService) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
    
  }

  getPosts() {
    this.imageService.getPosts().subscribe(posts => {    
      const postsArray = Object.values(posts)[0];
      
      console.log('postsAray', postsArray);

      //Convert object to array
      this.posts = Object.values(postsArray);
      console.log('posts', this.posts);
      console.log(typeof this.posts);
      
      

    })
  };



  

}
