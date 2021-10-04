import { HomeService } from './service/home.service';
import { Component, OnInit } from '@angular/core';
import { Movies } from './movies';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listaMovies: Movies[];
  movies: Movies;

  constructor(
    private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this.movies = new Movies();
    this.consultar();
  }

  consultar() {
    this.homeService.consultar().subscribe(
      (retorno: Movies[]) => {
        this.listaMovies= retorno;
      }
    );
  }  


}
