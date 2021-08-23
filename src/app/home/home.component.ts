import { Component, OnInit } from '@angular/core';
import { Movies } from './movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Movies;

  constructor() { }

  ngOnInit(): void {
    this.movies = new Movies();
  }



}
