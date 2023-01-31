import { Component, Inject } from '@angular/core';
import { GalleryService, GalleryItem, Breed } from "../shared/gallery.service";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddPetModalComponent } from '../add-pet-modal/add-pet-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.component.html',
  styleUrls: ['./tab2.component.css']
})


export class Tab2Component {

  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<AddPetModalComponent, any> | undefined;
  
  constructor(public galleryService: GalleryService, private http: HttpClient, public matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngAfterViewInit(): void {
    document.onclick = (args: any) : void => {
          if(args.target.tagName === 'BODY') {
              this.modalDialog?.close()
          }
      }
    }


  searchText = '';

  ngOnInit(): void {
    
    this.search().subscribe(() => {
      this.galleryService.loading = false
          });
  }

  search(): Observable<GalleryItem[]> {
    this.galleryService.loading = true
    // const APIKEY = 'e644a991-0319-4b39-840f-08c4781bc4ad';
    return this.http.get<GalleryItem[]>('https://api.thecatapi.com/v1/breeds')
    .pipe(tap(gallery => this.galleryService.gallery = gallery));
  }

  openModal(item) {
    this.modalDialog = this.matDialog.open(AddPetModalComponent, {
      id: "add-pet-modal-component",
      height: "450px",
      width: "450px",
      panelClass: "my-dialog",
      data: item,
      disableClose: true
    });
  }
}
