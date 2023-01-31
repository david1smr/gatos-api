import { Component } from '@angular/core';
import { GalleryService, GalleryItem, Breed } from "../shared/gallery.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})


export class Tab1Component {
  constructor(public galleryService: GalleryService, private http: HttpClient) {}

  ngOnInit(): void {
    
    this.reload()
  }

  search(): Observable<GalleryItem[]> {
    this.galleryService.loading = true
    // const APIKEY = 'e644a991-0319-4b39-840f-08c4781bc4ad';
    return this.http.get<GalleryItem[]>('https://api.thecatapi.com/v1/images/search?limit=1&page=100&order=Desc')
    .pipe(tap(gallery => this.galleryService.gallery = gallery));
  }

  reload() {
    this.search().subscribe(() => {
      this.galleryService.loading = false
          });
  }

}
