import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }


  private endpoint = 'http://127.0.0.1:3000/';




  addProduct(p:any){

    return  this.http.post(this.endpoint + 'product/ajout' , p);

  }


  getAllProduct(){

    return this.http.get(this.endpoint + 'product/getall'); 

  }


  deleteProduct(id: any){

    return this.http.delete( this.endpoint + 'product/delete/' + id );

  }


  getProductById(id: any){

    return this.http.get(this.endpoint +  'product/getbyid/' + id);
 
  }


  updateProduct( id: any , pro: any ){

    return this.http.put( this.endpoint + 'product/update/' + id   , pro  );
    

  }






}
