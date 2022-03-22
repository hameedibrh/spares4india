import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '../../node_modules/@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Spares4indiaService {
  

  constructor(private http: HttpClient) { }


  getCategories(){
    return this.http.get('https://b09u509k19.execute-api.ap-south-1.amazonaws.com/prod/categories');
  }

  getSubCategories(categoryId: string){
    return this.http.get('https://b09u509k19.execute-api.ap-south-1.amazonaws.com/prod/subcategories?categoryId='+categoryId);
  }

  getSubCategories2(categoryId2: string){
    return this.http.get('https://b09u509k19.execute-api.ap-south-1.amazonaws.com/prod/products?type=getProductBySCId&id='+categoryId2);
  }

  getProductDetails(productID: string){
    return this.http.get('https://b09u509k19.execute-api.ap-south-1.amazonaws.com/prod/products?type=getProductById&id='+productID);
  }
}
