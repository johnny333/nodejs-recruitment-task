import { Component, OnInit } from '@angular/core';
declare let $: any;
declare let Materialize: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor() {
  }

  ngOnInit(): void {
  }
}
