import { Input,Component, OnInit } from '@angular/core';
import { ApiService, Post,Comment } from '../api.service';

@Component({
  selector: 'app-comment-component',
  templateUrl: './comment-component.component.html',
  styleUrls: ['./comment-component.component.css']
})
export class CommentComponentComponent implements OnInit {

	@Input() post:Post;

  constructor() { }

  ngOnInit() {
  }

}
