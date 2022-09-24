import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  //TWO-WAY BINDING
  name = "Johnny"
  //theme for Carousel contents
  mycolor = 'red';
  //Array - *ngFor
  //key:value
  Products: any[] = [
    {
      "productname": "Kids Dress"
    },
    {
      "productname": "Kids Toys"
    },
    {
      "productname": "Laptops"
    },
    {
      "productname": "Mobiles"
    },
    {
      "productname": "Watch"
    },
    {
      "productname": "Footwear"
    },
    {
      "productname": "Headphones"
    },
    {
      "productname": "Keyboard"
    },
    {
      "productname": "Mouse"
    },
    {
      "productname":"Refrigerator"
    }

  ]
  //Event to hide Products
  isVisible: boolean = true;
  hide_products() {
    this.isVisible = !this.isVisible;
  }
  //*ngSwitch
  product = 'Laptop'

  //property errorcolor for style binding using ternary operator
  errorcolor: string = 'red'

  //Array for style binding with ternary operator with ngSwitch

  ProductDetails = [
    {
      "pid": "100",
      "pname": "Kids Toys",
      "status": "Active",
      "color": "green"
    },
    {
      "pid": "101",
      "pname": "Headphones",
      "status": "InActive",
      "color": "red"
    },
    {
      "pid": "102",
      "pname": "Kids Dress",
      "status": "Out of Stock",
      "color": "yellow"
    },
    {
      "pid": "103",
      "pname": "Kids Books",
      "status": "Active",
      "color": "green"
    },
    {
      "pid": "104",
      "pname": "Kids Crayons",
      "status": "InActive",
      "color": "red"
    },
    {
      "pid": "105",
      "pname": "Footwear",
      "status": "Active",
      "color": "green"
    },
    {
      "pid": "106",
      "pname": "Laptop",
      "status": "Out of Stock",
      "color": "yellow"
    }
  ]

  //Style Binding using a function
  getColor() {
    return 'blue';
  }
  //ngClass - created an instance for the class products
  prod:products=new products();
  //using an array we can access the properties and bind them to ngClass
  prod_array:string[]=['blue','shadow'];
  //date property for PIPE demo
  date_today:string | undefined;
  price:number | undefined;

  ngOnInit(): void {
    //initialize the date in the oninit function
    this.date_today=new Date().toDateString();
    this.price=1000;

  }
}
//ngClass
class products{
  blue:boolean=true;
  shadow:boolean=true;
  size:boolean=true;
}
