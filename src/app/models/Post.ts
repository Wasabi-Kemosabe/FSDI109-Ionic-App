import { SharedService } from '../service/shared.service';

export class Post {

    // Class attributes
    public message: string;
    public imageUrl: string;
    public to: string;
    public from: string;
    public createdOn: Date;

    // Constructor (what you want to initialize)
    constructor() {
        this.to = 'Everyone';
        this.createdOn = new Date();
    }

    // Methods
}