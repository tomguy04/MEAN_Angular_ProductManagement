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
      console.log('OnInit ', prods);
      this.myPRODUCTS = prods;
    });
  }

  delete(id:number){
    this._productService.deleteProduct(id)
    .subscribe(returnedProd => {
      console.log('got ', returnedProd, ' ', returnedProd.id, ' back from delete');
      this.myPRODUCTS = this.myPRODUCTS.filter(p => p.id !== returnedProd.id)
    })
  }
  


    //stop the delete click from bubbling up to the edit click.
    onClick(event:Event){
      event.stopPropagation();
    }

}
