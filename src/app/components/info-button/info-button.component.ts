import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.css']
})
export class InfoButtonComponent implements OnInit {
  faInfoCircle = faInfoCircle

  constructor() { }

  ngOnInit(): void {
  }

}
