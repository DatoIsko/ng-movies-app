import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css'],
})
export class UpcomingComponent implements OnInit {
  movies: any[];
  searchRes: any[];
  searchStr: string;

  options = [];

  constructor(private _moviesService: MoviesService) {
    this._moviesService.getUpComingMovies().subscribe(res => {
      this.movies = res.results;
    });
  }

  ngOnInit() {
  }

  searchAuto() {
    let movies = this.getLocalStorage('movies');
    if (movies) {
      let filtered = movies.filter((movie) => {
        return movie.includes(this.searchStr);
      })
      this.options = [...filtered];
    }
  }

  searchMovies() {
    this.saveLocalStorage('movies', this.searchStr);
    this._moviesService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }

  saveLocalStorage(key, value) {
    let savedItem = localStorage.getItem(key);
    let item = savedItem && [...JSON.parse(savedItem)];
    if (item) {
      item = [...item, value];
    } else {
      item = [value];
    }
    savedItem = JSON.stringify(item);
    localStorage.setItem(key, savedItem);
  }

  getLocalStorage(key) {
    let savedItem = localStorage.getItem(key);
    return savedItem && [...JSON.parse(savedItem)];
  }

}
