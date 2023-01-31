import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-pet-modal',
  templateUrl: './add-pet-modal.component.html',
  styleUrls: ['./add-pet-modal.component.css']
})
export class AddPetModalComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<AddPetModalComponent>) { }
  ngOnInit(): void {
  }
  
  closeModal() {
    this.dialogRef.close();
  }
}
