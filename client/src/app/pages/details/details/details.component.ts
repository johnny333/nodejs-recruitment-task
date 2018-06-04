import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IComment } from '../../../../../../interfaces/comment.interface';
import { IMovieWithComments } from '../../../../../../interfaces/movie-with-comments.interface';
import { IMovie } from '../../../../../../interfaces/movie.interface';
import { CommentsService } from '../../../services/comments/comments.service';
import { MoviesService } from '../../../services/movies/movies.service';
import { ToastService } from '../../../services/notification/toast.service';
import { IMovieBase } from '../../../../../../interfaces/movie.base.interface';
declare let $;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public comments: Array<IComment> = [];
  public movie: IMovie;
  public newCommentForm: FormGroup;

  constructor(private moviesService: MoviesService,
              private commentsService: CommentsService,
              private toastService:ToastService,
              private route: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.newCommentForm = this.fb.group({
      Comment: []
    });
    $('#textarea1').trigger('autoresize');
    $('.carousel').carousel();
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.moviesService.getByMovieWithCommentsId(id).subscribe((movieWithComments: IMovieWithComments) => {
        this.comments = movieWithComments.comments.reverse();
        this.movie = movieWithComments.movie;
      })
    });

  }


  isPosterAvliable = (movie: IMovieBase) => {
    return movie.Poster != 'N/A';

  }

  public addComment = () => {
    if (this.newCommentForm.value.Comment == null || this.newCommentForm.value.Comment.trim().length == 0) {
      return;
    }
    this.commentsService.save(Object.assign(this.newCommentForm.value, {MovieID: this.movie._id}))
      .subscribe((comment: IComment) => {
        this.comments = [comment].concat([...this.comments]);
        this.newCommentForm.reset();
        this.toastService.showMessage('addedNewComment')
      });
  }

}
