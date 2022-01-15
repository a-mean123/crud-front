import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {

  constructor(private _data: DataService) { }


  products : any;

  ngOnInit(): void {


    this._data.getAllProduct().subscribe(

      (res)=>{
        this.products = res;
        console.log(this.products);
        
      },
      (err)=>{
        console.log(err);
        
      }

    );


  }


  delete(id: any){

     this._data.deleteProduct(id).subscribe(

      (res)=>{
        console.log(res);
        this.ngOnInit();  
        
      },
      (err)=>{
        console.log(err);
        
      }


    );

  }


}
