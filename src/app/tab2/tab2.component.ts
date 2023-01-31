import { Component } from '@angular/core';
import { GalleryService, GalleryItem, Breed } from "../shared/gallery.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})


export class Tab2Component {
  
  constructor(public galleryService: GalleryService, private http: HttpClient) {}

  searchText = '';
  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman'
  ]

  ngOnInit(): void {
    
    this.search().subscribe(() => {
      this.galleryService.loading = false
          });
          this.galleryService.searchBreed = ''
  }

  search(): Observable<GalleryItem[]> {
    this.galleryService.loading = true
    // const APIKEY = 'e644a991-0319-4b39-840f-08c4781bc4ad';
    return this.http.get<GalleryItem[]>('https://api.thecatapi.com/v1/breeds')
    .pipe(tap(gallery => this.galleryService.gallery = gallery));
  }
}
