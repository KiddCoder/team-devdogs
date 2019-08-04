import { Component, OnInit } from "@angular/core";
import { MovieService } from "../movie.service";
import { Movie } from "../models/movie";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private movieService: MovieService) {}

  movies: Movie[] = [];

  getMovies() {
    this.movieService.getMovies().subscribe(movies => (this.movies = movies));
  }

  ngOnInit() {
    this.getMovies();
  }
}