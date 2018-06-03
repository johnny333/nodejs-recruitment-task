import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IComment } from '../../../../../interfaces/comment.interface';
import { environment } from '../../../environments/environment';
import { ToastService } from '../notification/toast.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient,private toastService:ToastService) {
  }

  public getByMovieId = (movieId: string) => {
    return this.http.get(`${environment.backend}/comments/${movieId}`)
  }

  public save = (comment: IComment) => {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post(`${environment.backend}/comments`, comment, {headers});
  }
}
