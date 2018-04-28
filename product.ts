export class Product{
    public id:number;
    public title: string = '';
    public price : number ;
    public imgUrl : string = '';
    // public created_at: Date = new Date();
    // public updated_at: Date = new Date();

    constructor(createId = true){
        if (createId){
            this.id = Math.floor(Math.random() * 1000); //dev purposes til we have a db.
        }
    }
}
    
