import { Component } from '@angular/core';
import { Friend } from './../models/Friend';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  model: Friend = new Friend();
  friendsToDisplay: Friend[] = [];

  constructor(private data: DataService) {
    data.getAllFriends().subscribe(list => {
      // Clear the array for eliminating multiple occurences
      this.friendsToDisplay = [];

      // Filter to see only my friends
      for (let i = 0; i < list.length; i++) {
        const friend = list[i];
        if (friend.belongTo == 'Angelo') {
          this.friendsToDisplay.push(friend);
        }
      }

      // Sort the array
      this.friendsToDisplay = this.friendsToDisplay.sort((left, right) => {
        if (left.name.toLowerCase() < right.name.toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      })
    });
  }

  register() {
    console.log('Registered a friend');

    // Send the object to data service
    this.data.saveFriend(this.model);

    // Clear the form
    this.model = new Friend();
  }

}
