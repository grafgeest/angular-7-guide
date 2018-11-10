import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.css']
})
export class UserServiceComponent implements OnInit {

  private userName: String = '';

  constructor() { }

  ngOnInit() {
  }

  private onResetUserName() {
    this.userName = '';
  }

}
