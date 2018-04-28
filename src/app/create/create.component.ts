import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { ProductService } from '../product.service';
import { Product } from '../../../product'
import { Router } from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // @Output() addProduct = new EventEmitter<Product>(); //output the event
  product = new Product();

  constructor(
    private _productService: ProductService,
    private _router : Router  
  ) { }

  onSubmit(formData:NgForm){
    event.preventDefault();
    const {value, valid} = formData;
    console.log(this.product);
    //this.addProduct.emit(this.product); //we can pass in any data type
    this._productService.addProduct(this.product).subscribe(
      ()=>{
        this._router.navigateByUrl('products');
      }
    )
  
    
    this.product = new Product();
    formData.reset();
    
    
    // this.addQuote.emit(this.quote); //we can pass in any data type
    // this.quote = new Quotes();
    // formData.reset();
  }
  

  ngOnInit() {
  }

}
