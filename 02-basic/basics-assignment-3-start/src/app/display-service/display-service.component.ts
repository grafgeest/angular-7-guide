import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display-service',
  templateUrl: './display-service.component.html',
  styleUrls: ['./display-service.component.css']
})
export class DisplayServiceComponent implements OnInit {

  password: String = 'tuna';
  isDisplay: boolean = true;
  output = [];

  constructor() { }

  ngOnInit() {
  }

  onDisplay(){
    let date: Date = new Date();
    console.log(date);
    this.output.push(date);
    this.isDisplay = !this.isDisplay;
  }

}
