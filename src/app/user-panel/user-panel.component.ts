import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
})
export class UserPanelComponent implements OnInit {


  submitted = false;

  username = '';

  constructor() {}

  ngOnInit() {
    this.submitted = false;

  }

  onSubmit() {
      this.submitted = true;
  }


}
