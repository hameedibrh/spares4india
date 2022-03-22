import { Component, OnInit } from '@angular/core';
import { Spares4indiaService } from '../../spares4india.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: any;
  subcategories:any;
  subcategories2:any;

  constructor(private api:Spares4indiaService, private router: Router) { }

  ngOnInit(): void {
    this.api.getCategories().subscribe(response => {
      console.log(response)
      this.categories = response;
    
  }, err => {
  }
    );


}

fetchSubCategories(itemId:string){
this.api.getSubCategories(itemId).subscribe(response => {
  console.log(response)
  this.subcategories = response;

}, err => {
}
);
}

fetchSubCategories2(subcategoryId:string){
  this.api.getSubCategories2(subcategoryId).subscribe(response => {
    console.log(response)
    this.subcategories2 = response;
  
  }, err => {
  }
  );
  }

showProductPage(subItemId: string){
  console.log('clicked')
  this.router.navigateByUrl('product/'+subItemId)
}
}
