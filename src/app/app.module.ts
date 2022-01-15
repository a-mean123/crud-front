import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './admin/header/header.component';
import { ListproductComponent } from './admin/product/listproduct/listproduct.component';
import { AjoutproductComponent } from './admin/product/ajoutproduct/ajoutproduct.component';
import { DetailproductComponent } from './admin/product/detailproduct/detailproduct.component';
import { AjoutarticleComponent } from './admin/article/ajoutarticle/ajoutarticle.component';
import { DetailarticleComponent } from './admin/article/detailarticle/detailarticle.component';
import { ListarticleComponent } from './admin/article/listarticle/listarticle.component';
import { AjoutuserComponent } from './admin/user/ajoutuser/ajoutuser.component';
import { ListuserComponent } from './admin/user/listuser/listuser.component';
import { DetailuserComponent } from './admin/user/detailuser/detailuser.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminComponent,
    HeaderComponent,
    ListproductComponent,
    AjoutproductComponent,
    DetailproductComponent,
    AjoutarticleComponent,
    DetailarticleComponent,
    ListarticleComponent,
    AjoutuserComponent,
    ListuserComponent,
    DetailuserComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
