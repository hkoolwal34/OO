import { Component, OnInit } from '@angular/core';
import { ApiService, Post,Comment } from '../api.service';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css']
})

export class PostComponentComponent implements OnInit {

  selectedPost : Post;
  dataIsAvailable: boolean;
  postIsSelected : boolean;
  posts: Post[];
  comments: Comment[];

  constructor(private apiService: ApiService) {
    this.dataIsAvailable = false;
    this.postIsSelected = false;
  }

  ngOnInit() {
    this.apiService.getPosts().subscribe(posts => {
      this.posts = posts;
      this.dataIsAvailable = true;
    });
  }

  onSelect(post:Post):void{
  	this.selectedPost = post;

  	this.apiService.getComments(post.id)
  		.subscribe(comments => 
  			this.comments=comments);
  }

}
