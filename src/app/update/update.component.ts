import {OnInit, Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { Product } from '../../../product'
import { ProductService } from '../product.service';


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
      console.log(prods);
      this.myPRODUCTS = prods;
    })

    // subscribe to router event
    this._activatedRoute.params.subscribe((params: Params) => {
    this.productId = params['id'];
    console.log('udpate component recd pId ', this.productId);
    });

    // this._productService.getProducts().subscribe(prods => {
    //   console.log(prods);
    //   this.myPRODUCTS = prods;
    //   this.prodToEdit = prods[0];
//      console.log('prodtoEdit ', this.prodToEdit);  
      //got the product, now what?
    // });
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
      //console.log('ready to edit ', this.prodToEdit);
    });
    this.product = new Product();
    formData.reset();
  }
    

    delete(id:number){
      this._productService.deleteProduct(id)
      .subscribe(returnedProd => {
        console.log('got ', returnedProd, ' ', returnedProd.id, ' back from delete');
        this.myPRODUCTS = this.myPRODUCTS.filter(p => p.id !== returnedProd.id)
        this._router.navigateByUrl('products');
      })
    }


  }
  



