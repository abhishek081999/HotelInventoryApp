import { Component, OnInit } from '@angular/core';
import {CommentService}from './comment.service'
import { Comments } from './comments';
import { ActivatedRoute } from '@angular/router';
import { map, pluck } from 'rxjs/operators';
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
comments$ = this.commentService.getComments()
comments:Comments[] =[]
comment$ = this.activatedRoute.data.pipe(pluck('comments'))
  constructor(private commentService:CommentService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data=>{
      this.comments = data['comments']
      console.log(data)
    })
  }

}
