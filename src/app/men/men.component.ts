import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CartService } from '../cart.service';
import { Cartitem } from '../cartitem';
import { ProductapiService } from '../productapi.service';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit {
  products:any;
  constructor(private productData:ProductapiService, private cartsvc : CartService) { 
    this.productData.getProductDetails().subscribe(res=>{
    this.products=res
    })
  }

  Search  =["item"];
  onClickSearch(searchItem:string){
    this.Search.push(searchItem);
    console.log(this.Search);
   }
  ngOnInit(): void {
  }
 
  productDetail=false;
  showproductDetailsToggle()
  {
    this.productDetail=!this.productDetail;
  }
  toggleContent(){
    var content='';
    if(this.productDetail){
      content='fa-solid fa-arrow-up';
    }
    else{
      content='fa-solid fa-arrow-down';
    }
    return content;
  }
 

  //Add to cart
  cart:Cartitem={
    pid:0,
    pname:'',
    pdescription:'',
    price:0,
    img:'',
    quantity:1,
    totalPrice:1    
  }
  quantity:number=1;

  addToCart(product:any){
    this.cart.pname=product.pname;
    this.cart.pdescription=product.pdescription;
    this.cart.price=product.price;
    this.cart.img=product.img;
    this.cart.price=product.price;
    this.cart.totalPrice=product.totalPrice;
    this.cart.quantity=this.quantity;
    this.cart.pid=product.id;
    this.cartsvc.addToCart(this.cart);
    console.log(product.id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })

    Toast.fire({
      icon: 'success',
      title: 'Item added successfully'
    })
    this.cartsvc.getCount();
  }
  //Input Class Decorator
  @Input()product:any

}
