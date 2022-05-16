import { Component, OnInit } from '@angular/core';
import { Feature } from 'src/app/Feature';
import { heroContent } from 'src/app/mock-feature';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  feature: Feature = heroContent
  
  constructor() { }

  ngOnInit(): void {
  }

}
