export class Post {

    // Class attributes
    public message: string;
    public image: string;
    public to: string;
    public from: string;
    public createdOn: Date;

    // Constructor (what you want to initialize)
    constructor() {
        this.from = 'Angelo';
        this.to = 'Everyone';
        this.createdOn = new Date();
    }

    // Methods
}