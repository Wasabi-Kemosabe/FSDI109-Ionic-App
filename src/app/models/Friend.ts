export class Friend {
    public name: string = ''; // <- the actual name of the friend
    public belongTo: string = ''; // <- to specify that friend belongs to me

    constructor() {
        this.belongTo = 'Angelo';
    }
}