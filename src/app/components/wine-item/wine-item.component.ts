import { Component, OnInit, Input } from '@angular/core';
import { Wine } from 'src/app/Wines';

@Component({
  selector: 'app-wine-item',
  templateUrl: './wine-item.component.html',
  styleUrls: ['./wine-item.component.css']
})
export class WineItemComponent implements OnInit {
  @Input()
  wine!: Wine;

  constructor() { }

  ngOnInit(): void {
  }

}
