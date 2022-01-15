import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ajoutproduct',
  templateUrl: './ajoutproduct.component.html',
  styleUrls: ['./ajoutproduct.component.css']
})
export class AjoutproductComponent implements OnInit {

  constructor(private _data : DataService) { }



  product = {

    title: '',
    description:'',
    price:'',
    image:''

  }


  ajouter(){
    this._data.addProduct(this.product).subscribe(

      (response)=>{
        console.log(response);
        this.product = {

          title: '',
          description:'',
          price:'',
          image:''
      
        }
      },
      (err)=>{
        console.log(err);
        
      }

    );
  }


  ngOnInit(): void {
  }

}
