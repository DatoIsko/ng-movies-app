import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { GenresComponent } from './genres/genres.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { SerieComponent } from './serie/serie.component';
import { ActorComponent } from './actor/actor.component';
import { SharedMaterialModule } from './shared-material.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieCardComponent,
    GenresComponent,
    UpcomingComponent,
    PopularSeriesComponent,
    SerieComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedMaterialModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
