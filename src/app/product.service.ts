import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, map} from 'rxjs/operators';
import { Product } from '../../product';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProductService {
  PRODUCTS:Array<Product> = [];
  constructor(private _http: HttpClient) { }
  
  addProduct(product:Product){
    console.log (product);
    this.PRODUCTS.push(product);
    console.log(this.PRODUCTS);
  }
  

  getProducts(): Observable<Product[]> {
    return of (this.PRODUCTS);
  }

  deleteProduct(id:number){
    console.log('id delete from service ', id);
    return of (this.PRODUCTS = this.PRODUCTS.filter(p => p.id !== id));
  }

  editProduct(id:number){
    console.log('id edit from service ', id);
    return of (this.PRODUCTS);
  }
 
}
  
  