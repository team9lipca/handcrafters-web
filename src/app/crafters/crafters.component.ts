import { Component, OnInit } from '@angular/core';
import { CraftersService } from '../services/crafters.service';

@Component({
  selector: 'app-crafters',
  templateUrl: './crafters.component.html',
  styleUrls: ['./crafters.component.scss']
})
export class CraftersComponent implements OnInit {
  crafters: any[];

  constructor(private service: CraftersService) { }

  ngOnInit() {
    this.service.getPopularCrafters().subscribe(response => {
      this.crafters = response.json().crafters;
    });
  }

}
