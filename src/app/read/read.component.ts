import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../../../product';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  myPRODUCTS:Array<Product>=[];

  constructor(private _productService: ProductService) {  }
  

  ngOnInit() {
    this._productService.getProducts().subscribe(prods => {
      console.log(prods);
      this.myPRODUCTS = prods;

    });
  }

  delete(id:number){
    this._productService.deleteProduct(id).subscribe(prods =>{
      console.log(prods);
      this.myPRODUCTS = prods;
    })
  }



  edit(id:number){
    this._productService.editProduct(id).subscribe(prods =>{
      console.log(prods);
      this.myPRODUCTS = prods;
    })
  }

    //stop the delete click from bubbling up to the edit click.
    onClick(event:Event){
      event.stopPropagation();
    }

}
