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
  

  // onDelete(book:Book){
  //   console.log('delete book', book);
  //   //utilize the delete method in the service.
  //   this._bookService.deleteBook(book.id)
  //     .subscribe(returnedBook => {
  //       console.log(returnedBook);

  //       //filter out old book and create new book array
  //       this.books = this.books.filter(b => b.id !== returnedBook.id) //compare the deleted book id to the ids in the books array
  //      //and return everything that is NOT the deleted book 
  //     })

  // }

  // delete(id:number){
  //   this._productService.deleteProduct(id).subscribe(prods =>{
  //     console.log(prods);
  //     this.myPRODUCTS = prods;
  //   })
  // }



  // edit(id:number){
  //   this._productService.editProduct(id).subscribe(prods =>{
  //     console.log(prods);
  //     this.myPRODUCTS = prods;
  //   })
  // }

    //stop the delete click from bubbling up to the edit click.
    onClick(event:Event){
      event.stopPropagation();
    }

}
