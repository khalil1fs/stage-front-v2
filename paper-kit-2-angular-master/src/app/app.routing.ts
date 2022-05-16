import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {RegisterComponent} from './register/register.component';
import {PanierComponent} from './module/client/view/panier/panier.component';
// import {CheckoutComponent} from './checkout/checkout.component';
// import {ProductsComponent} from './module/client/view/products/products.component';
// import {ProductCreateComponent} from './module/client/view/products/product-create/product-create.component';
// import {ViewComponent} from './module/admin/view/view.component';
import {ProduitBioComponent} from './module/client/view/produit-bio/produit-bio.component';
import {CheckoutComponent} from "./module/client/view/checkout/checkout.component";
import {FormationComponent} from "./module/client/view/formation/formation.component";
import {CongresComponent} from "./module/client/view/congres/congres.component";
import {OverseaeducationComponent} from "./module/client/view/overseaeducation/overseaeducation.component";
// import {AdminComponent} from './module/admin/admin.component';
// import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'login',           component: LoginPageComponent },
    { path: 'panier',          component: PanierComponent },
    { path: 'products',          component: ProduitBioComponent },
    { path: 'checkout',          component: CheckoutComponent },
    { path: 'formation',          component: FormationComponent },
    // { path: 'product-create',          component: ProductCreateComponent },
    // { path: 'module',          component: ViewComponent },
    { path: 'register',          component: RegisterComponent },
    { path: 'congres',          component: CongresComponent },
    { path: 'overseaeducation',          component: OverseaeducationComponent },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
