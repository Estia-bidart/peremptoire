import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { PlayoutComponent } from './playout/playout.component';
import { PuheaderComponent } from './puheader/puheader.component';


@NgModule({
  declarations: [
    HomeComponent,
    ServiceComponent,
    ContactComponent,
    PlayoutComponent,
    PuheaderComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
