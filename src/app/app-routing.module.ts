import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AjoutarticleComponent } from './admin/article/ajoutarticle/ajoutarticle.component';
import { DetailarticleComponent } from './admin/article/detailarticle/detailarticle.component';
import { ListarticleComponent } from './admin/article/listarticle/listarticle.component';
import { AjoutproductComponent } from './admin/product/ajoutproduct/ajoutproduct.component';
import { DetailproductComponent } from './admin/product/detailproduct/detailproduct.component';
import { ListproductComponent } from './admin/product/listproduct/listproduct.component';
import { AjoutuserComponent } from './admin/user/ajoutuser/ajoutuser.component';
import { DetailuserComponent } from './admin/user/detailuser/detailuser.component';
import { ListuserComponent } from './admin/user/listuser/listuser.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [


  { path: '' , component: ClientComponent , children: [] },


  { path: 'admin' , component: AdminComponent, children: [
    // path product
    {path: 'ajoutproduit' , component: AjoutproductComponent},
    {path: '', component: ListproductComponent},
    {path: 'detailproduct/:id' , component: DetailproductComponent},

    // path article

    { path: 'ajoutarticle' , component : AjoutarticleComponent },
    { path: 'listarticle' , component: ListarticleComponent },
    { path: 'detailarticle/:id' , component: DetailarticleComponent},


    // path user
    { path: 'ajoutuser' , component: AjoutuserComponent },
    { path: 'listuser' , component: ListuserComponent },
    { path: 'detailuser/:id' , component: DetailuserComponent }



  ]   }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
