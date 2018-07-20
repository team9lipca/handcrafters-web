import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crafts',
  templateUrl: './crafts.component.html',
  styleUrls: ['./crafts.component.scss']
})
export class CraftsComponent implements OnInit {
  crafts = [
    { name: "Domek", author: "Janek"},
    { name: "Lalka", author: "Ania"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
