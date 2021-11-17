import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PlayoutComponent } from './playout/playout.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [

  {
    path: '', component: PlayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      
      { path: 'home', component: HomeComponent },
      { path: 'service', component: ServiceComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
