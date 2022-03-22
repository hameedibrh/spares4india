import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Spares4indiaService } from '../../spares4india.service'

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  productID: any;
  productDetails: any;
  productImage:any;

  constructor(private api:Spares4indiaService, private route: ActivatedRoute, private httpclient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.productID = this.route.snapshot.paramMap.get('productID'); 
    console.log(this.productID);

    this.api.getProductDetails(this.productID).subscribe(response => {
      console.log(response)
      this.productDetails = response;
      this.productImage = this.productDetails.productImages['0']['path'];
      console.log(this.productImage);
    
  }, err => {
    console.log(err)
  }
    );

  }

}
