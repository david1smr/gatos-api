import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.css']
})
export class Tab3Component implements OnInit{

  petList: any[] = []

  constructor() {}

  ngOnInit(): void {
    var storage = localStorage.getItem('petsList');
    this.petList = JSON.parse(localStorage.getItem('petsList')) || [];
  }
  
  deleteStorage() {
    localStorage.removeItem('petsList');
    this.petList = []
  }


}
