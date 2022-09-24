import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//accessing ngModel for 2-way binding
import { FormsModule } from '@angular/forms';
//Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';
//API
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { CounterchildComponent } from './counter/counterchild/counterchild.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { AddproductsComponent } from './addproducts/addproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CounterComponent,
    CounterchildComponent,
    RegisterComponent,
    LoginComponent,
    CartItemsComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    AddproductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
