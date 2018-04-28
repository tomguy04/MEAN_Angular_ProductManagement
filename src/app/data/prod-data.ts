import {Product} from '../../../product';

export const PRODUCTS: Product[] = [
    {
        id: randomId(),
        title: 'pencil',
        price : 1,
        imgUrl:'',
        
    },
    {
        id: randomId(),
        title: 'pens',
        price : 2,
        imgUrl:'',
    
    },
    {
        id: randomId(),
        title: 'crayons',
        price : 3,
        imgUrl:'',
    
    },
    {
        id: randomId(),
        title: 'markers',
        price : 4,
        imgUrl:'',

    },
];

function randomId():number{
    return Math.floor(Math.random() * 1000);
}