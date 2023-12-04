import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderExploradorComponent } from './explorador/header-explorador/header-explorador.component';
import { FooterComponent } from './footer/footer.component';
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderExploradorComponent,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    HeaderExploradorComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
