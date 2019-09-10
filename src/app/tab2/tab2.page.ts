import { Component } from '@angular/core';
import { Post } from '../models/Post';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  model: Post = new Post();

  constructor(private data: DataService) { }

  post() {
    console.log('Save button pressed');
    console.log(this.model);

    // Save the post
    this.data.savePost(this.model);

    // Clear the form
    this.model = new Post();
  }

}
