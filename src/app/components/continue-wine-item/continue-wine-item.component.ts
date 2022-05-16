import { Component, OnInit, Input } from '@angular/core';
import { Wine } from 'src/app/Wines';

@Component({
  selector: 'app-continue-wine-item',
  templateUrl: './continue-wine-item.component.html',
  styleUrls: ['./continue-wine-item.component.css']
})
export class ContinueWineItemComponent implements OnInit {
  @Input()
  wine!: Wine;
  
  constructor() { }

  ngOnInit(): void {
  }

}
