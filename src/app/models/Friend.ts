import { SharedService } from '../service/shared.service';

export class Friend {
    public name: string = ''; // <- the actual name of the friend
    public belongsTo: string = ''; // <- to specify that friend belongs to me
    public fbId: string = ''; // <- Assign the Firebase ID to the friend to remove them from the db

    constructor() { }
}