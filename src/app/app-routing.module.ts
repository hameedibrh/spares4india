import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { HomeComponent } from './components/home/home.component';
import { ProductPageComponent } from './components/product-page/product-page.component';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:productID', component: ProductPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
