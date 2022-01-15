import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-detailproduct',
  templateUrl: './detailproduct.component.html',
  styleUrls: ['./detailproduct.component.css']
})
export class DetailproductComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private _data: DataService,
    private router: Router  
    ) { }

  id : string = '';
  product : any;
  ngOnInit(): void {
    //1
    this.id = this.route.snapshot.paramMap.get('id');

    //2
    this._data.getProductById(this.id).subscribe(

      res=>{
        this.product = res;
      },
      err=>{
        console.log(err);
        
      }


    );


  }


  save(){
      this._data.updateProduct( this.id , this.product ).subscribe(
        res=>{
          console.log(res);
          this.router.navigate(['/admin']);
        },
        err=>{
          console.log(err);
          
        }
      );
  }

}
