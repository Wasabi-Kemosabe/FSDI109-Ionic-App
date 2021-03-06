import { Component } from '@angular/core';
import { Post } from '../models/Post';
import { DataService } from '../service/data.service';
import { Friend } from '../models/Friend';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  model: Post = new Post();
  friendsToDisplay: Friend[] = [];

  constructor(private data: DataService, private shared: SharedService) {
    data.getAllFriends().subscribe(list => {
      // Clear the array
      this.friendsToDisplay = [];

      // Filter to see only my friends
      for (let i = 0; i < list.length; i++) {
        const friend = list[i];
        if (friend.belongsTo == shared.userName) {
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
    })
  }

  post() {
    console.log('Save button pressed');
    console.log(this.model);

    // Assign default for From
    this.model.from = this.shared.userName;

    // Save the post
    this.data.savePost(this.model);

    // Clear the form
    this.model = new Post();
  }

}
