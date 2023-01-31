import { Injectable } from "@angular/core";

export interface GalleryItem {
    id?: string,
    url?: string,
    // width?: number,
    // height?: number
  }

  export interface Breed {
    id?: string,
    name?: string,
  }

@Injectable({providedIn: 'root'})

export class GalleryService  {
  
  constructor() { }

    public gallery: GalleryItem[] = []
    public image: GalleryItem = {
      id: ''
    }
    
public searchBreed: string = ''
    public breeds: Breed[] = []
    public loading: boolean = true;
    public total: number = 0;
    public page: number = 1;
    public showModal: boolean = false
}