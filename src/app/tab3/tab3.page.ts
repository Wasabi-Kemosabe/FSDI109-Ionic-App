import { Component } from '@angular/core';
import { Friend } from './../models/Friend';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  model: Friend = new Friend();

  constructor() { }

  register() {
    console.log('Register friend');

    // Send the object to data service

    // Clear the form
    this.model = new Friend();
  }

}
