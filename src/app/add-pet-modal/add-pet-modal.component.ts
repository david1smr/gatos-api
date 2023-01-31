import {Component, OnInit , ViewEncapsulation, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-pet-modal',
  templateUrl: './add-pet-modal.component.html',
  styleUrls: ['./add-pet-modal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddPetModalComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<AddPetModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  ngOnInit(): void {
  }
  
  closeModal() {
    this.dialogRef.close();
  }

  savePet(petName, petImage) {

    let newPet = {name: petName, image: petImage}

    var a = [];
    a = JSON.parse(localStorage.getItem('petsList')) || [];
    a.push(newPet);
    localStorage.setItem('petsList', JSON.stringify(a));

    this.dialogRef.close();
  }
}
