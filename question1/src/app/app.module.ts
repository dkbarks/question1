import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { HeaderComponent } from './header/header.component';
import { PersonalFooterComponent } from './personal-footer/personal-footer.component';
import {SpringService} from '../app/service/spring.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDataComponent,
    HeaderComponent,
    PersonalFooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: PersonalDataComponent },
    ])
  ],
  providers: [SpringService],
  bootstrap: [AppComponent]
})
export class AppModule { }
