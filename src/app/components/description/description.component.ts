import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  header: string = 'His Royal Majesty is back.'

  description: string = "America's most unhinged rooster is out of retirement, and this time? He's mad as hell. Experience the unapologetic flavor burst of Rex Goliath."

}
