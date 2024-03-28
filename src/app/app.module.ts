import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { TestymonialsComponent } from './components/testymonials/testymonials.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { WorkComponent } from './components/work/work.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    RecipesComponent,
    TestymonialsComponent,
    ContactComponent,
    FooterComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
