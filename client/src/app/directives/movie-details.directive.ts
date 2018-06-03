import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMovie } from '../../../../interfaces/movie.interface';

@Directive({
  selector: '[appMovieDetails]'
})
export class MovieDetailsDirective {
  private _movieEntry: IMovie;

  @Input() set movieEntry(value: IMovie) {
    this._movieEntry = value;
  }

  constructor(private router: Router) {
  }

  @HostListener('click', ['$event']) onClick($event) {
    console.log("test directive", this._movieEntry)
    this.router.navigate([`/details/movie/{${this._movieEntry._id}`])

  }
}
