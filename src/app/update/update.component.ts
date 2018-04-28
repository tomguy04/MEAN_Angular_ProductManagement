import {OnInit, Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Product } from '../../../product'
import { ProductService } from '../product.service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productId:number;
  product = new Product();
  myPRODUCTS : Array<Product> = [];
  prodToEdit : Product = new Product();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _productService: ProductService,
    private _router : Router
  ) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(prods => {
      console.log('ready to edit', prods);
      this.myPRODUCTS = prods;
    })

    // subscribe to router event
    //if(this._activatedRoute.params.subscribe((params: Params))=>{
    //had this
    this._activatedRoute.params.subscribe((params: Params) => {
    this.productId = params['id'];
    console.log('udpate component recd pId ', this.productId);
    });
    //

    


    this._productService.getProdToEdit(this.productId).subscribe(prod => {
      console.log('prod to edit back from service', prod.id , prod);
      this.prodToEdit = prod;
      });
    
  }
  


  onSubmit(formData:NgForm){
    event.preventDefault();
    const {value, valid} = formData;
    //find the product in the array
    //subscribe to the product we want to edit
    console.log(this.product);
    this._productService.editProduct(this.productId,this.product).subscribe(prods => {
      console.log(prods);
      this.myPRODUCTS = prods;
      this._router.navigateByUrl('products');
      //console.log('ready to edit ', this.prodToEdit);
    });

    this.product = new Product();
    formData.reset();
  }
  
  onDelete(){
    this._productService.deleteProduct(this.productId)
    .subscribe(returnedProd => {
      console.log('got ', returnedProd, ' ', returnedProd.id, ' back from delete');
      this.myPRODUCTS = this.myPRODUCTS.filter(p => p.id !== returnedProd.id)
      this._router.navigate(['/products']);
    })
  }

  // onDelete2(){
  //   this._productService.showUpdatedItem(this.prodToEdit);
  //   // .subscribe(returnedProd => {
  //   //   console.log('got ', returnedProd, ' ', returnedProd.id, ' back from delete');
  //   //   this.myPRODUCTS = this.myPRODUCTS.filter(p => p.id !== returnedProd.id)
  //   //   this._router.navigate(['/products']);
  //   // })
  // }

  // onDelete(){
  //   console.log('update would like to delete from', this.myPRODUCTS);
  //   this._productService.deleteProduct(this.productId)
  //   .subscribe(returnedProd => {
  //     console.log('got ', returnedProd, ' back from delete');
  //     // this.myPRODUCTS = this.myPRODUCTS.filter(p => p.id !== returnedProd.id)
  //     // console.log('update completed its delete', this.myPRODUCTS);

  //     this._router.navigate(['/products']);
  //   })
  // }

 
    // onDelete(){
    //   console.log('update would like to delete from', this.myPRODUCTS);
    //   this._productService.deleteProduct(this.productId)
    //   .subscribe(returnedProd => {
    //     console.log('got ', returnedProd, ' ', returnedProd.id, ' back from delete');
    //     this.myPRODUCTS = this.myPRODUCTS.filter(p => p.id !== returnedProd.id)
    //     console.log('update completed its delete', this.myPRODUCTS);

    //     this._router.navigate(['/products']);
    //   })
    // }

    // delete(id:number){
    //   this._productService.deleteProduct(id)
    //   .subscribe(returnedProd => {
    //     console.log('got ', returnedProd, ' ', returnedProd.id, ' back from delete');
    //     this.myPRODUCTS = this.myPRODUCTS.filter(p => p.id !== returnedProd.id)
    //   })
    // }


  }
  



