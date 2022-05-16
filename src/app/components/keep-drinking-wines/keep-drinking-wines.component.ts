import { Component, OnInit } from '@angular/core';
import { Wine } from 'src/app/Wines';
import { WINES } from 'src/app/mock-continuing-wines';


@Component({
  selector: 'app-keep-drinking-wines',
  templateUrl: './keep-drinking-wines.component.html',
  styleUrls: ['./keep-drinking-wines.component.css']
})
export class KeepDrinkingWinesComponent implements OnInit {
  wines: Wine[] = WINES

  constructor() { }

  ngOnInit(): void {
  }

}
