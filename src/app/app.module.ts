import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuegraComponent } from './suegra/suegra.component';
import { YernoComponent } from './yerno/yerno.component';
import { BindingComponent } from './binding/binding.component';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { MembersService } from './services/members.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SuegraComponent,
    YernoComponent,
    BindingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
