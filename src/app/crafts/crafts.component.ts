import { Component, OnInit } from '@angular/core';
import { CraftService } from '../services/craft.service';

@Component({
  selector: 'app-crafts',
  templateUrl: './crafts.component.html',
  styleUrls: ['./crafts.component.scss']
})
export class CraftsComponent implements OnInit {
  crafts: any[];

  constructor(private service: CraftService) { }

  ngOnInit() {
    this.service.getMainPageCrafts().subscribe(response => {
      this.crafts = response.json().crafts;
    });
  }

}
