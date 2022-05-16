import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/Wines';
import { WINES } from 'src/app/mock-wines';

@Component({
  selector: 'app-drink-again-wines',
  templateUrl: './drink-again-wines.component.html',
  styleUrls: ['./drink-again-wines.component.css']
})
export class DrinkAgainWinesComponent implements OnInit {
  wines: Wine[] = WINES

  constructor() { }

  ngOnInit(): void {
  }

}
