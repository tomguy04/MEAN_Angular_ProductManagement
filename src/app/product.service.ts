import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'Rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, map} from 'rxjs/operators';
import { Product } from '../../product';
import { of } from 'rxjs/observable/of';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { PRODUCTS } from './data/prod-data';

@Injectable()
export class ProductService {
  myPRODUCTS:Array<Product> = [];
  //product:Array<Product> = [];
  product:Array<Product> = [];
  //prodEdit:Product;

  
  constructor(private _http: HttpClient) { }
  
  
  addProduct(product:Product){
    console.log (product);
    PRODUCTS.push(product);
    console.log(PRODUCTS);
    return of (PRODUCTS);
  }
  

  getProducts(): Observable<Product[]> {
    console.log ('got all the products ', PRODUCTS);
    return of (PRODUCTS);
  }

  deleteProduct(id:number):Observable<Product>{
    console.log('id delete from service ', id);
    this.myPRODUCTS = PRODUCTS.filter(p => p.id == id);
    return of (this.myPRODUCTS[0]);
  }

  // showUpdatedItem(newItem){
  //   console.log('show');
  //   let updateItem = PRODUCTS.find(this.findIndexToUpdate, newItem.id);
  //   let index = PRODUCTS.indexOf(updateItem);
  //   PRODUCTS[index] = newItem;
  // }

  // findIndexToUpdate(newItem) { 
  //   console.log('find');
  //       return newItem.id === this;
  // }
  // deleteProduct(id:number):Observable<Product[]>{
  //   console.log('id delete from service ', id);
  //   this.myPRODUCTS = PRODUCTS.filter(p => p.id !== id);
  //   return of (this.myPRODUCTS);
  //   // return of (this.myPRODUCTS[0]);
  // }

  // deleteBook(id:number):Observable<Book>{
  //   return this._http.delete<Book>(`${this.base}/${id}`)
  // }

  // deleteProduct(id:number){
  //   console.log('id delete from service ', id);
  //   this.myPRODUCTS = PRODUCTS.filter(p => p.id !== id);
  //   console.log(this.myPRODUCTS.length);
  //   return of (this.myPRODUCTS);
  // }

  getProdToEdit(id:number){
    console.log('id edit from service ', id);
    this.myPRODUCTS = PRODUCTS.filter(p => p.id == id)
    return of (this.myPRODUCTS[0]);
  }

  // updateProducts(products: Array<Product>) {
  //   of(this.PRODUCTS);
  // }

  editProduct(id:number, prod:Product){
    console.log('id edit from service ', id);
    //find the product the array
    this.product = PRODUCTS.filter(p => p.id == id);
    console.log('in editProduct found id', this.product[0].id, ' to edit')
    this.product[0].title = prod.title;
    this.product[0].price = prod.price;
    return of (PRODUCTS);
  }


  // editProduct(id:number){
  //   console.log('id edit from service ', id);
  //   //return of (this.product = this.PRODUCTS.filter(p => p.id !== id));
  //   this.product = this.PRODUCTS.filter(p => p.id !== id);
  //   return of (this.product[0]);
  // }


  // editProduct (prod: Product): Observable<any> {
  //   return this._http.put(this.PRODUCTS, prod, httpOptions).pipe(
  //     tap(_ => this.log(`updated hero id=${hero.id}`)),
  //     // catchError(this.handleError<any>('updateHero'))
  //   );
  // }

//  getProduct(id: number): Observable<Product> {
//     //const url = `${this.heroesUrl}/${id}`;
//     return this.http.get<Hero>(url).pipe(
//       tap(_ => this.log(`fetched hero id=${id}`)),
//       catchError(this.handleError<Hero>(`getHero id=${id}`))
//     );
//   }
 
}
  
  