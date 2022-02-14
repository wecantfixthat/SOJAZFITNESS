import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FitnesssearchComponent } from './components/fitnesssearch/fitnesssearch.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LinechartComponent } from './components/linechart/linechart.component';
import {ChartsModule} from "ng2-charts";
import { HttpClientModule } from "@angular/common/http";
import { BarchartComponent } from './components/barchart/barchart.component';
import {signupComponent} from "./components/signup/signup.component";
import {WelcomePageComponent} from "./components/welcome-page/welcome-page.component";
import { AboutUsComponent } from './components/about-us/about-us.component';
import {FoodwidgetComponent} from "./components/foodwidget/foodwidget.component";
import{LoginpageComponent} from "./components/loginpage/loginpage.component";
import { FoodsearchComponent } from './components/foodsearch/foodsearch.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { DisplayFoodNutritionComponent } from './components/display-food-nutrition/display-food-nutrition.component';

@NgModule({
  declarations: [
    AppComponent,
    FitnesssearchComponent,
    FitnesssearchComponent,
    AppComponent,
    LinechartComponent,
    BarchartComponent,
    WelcomePageComponent,
    signupComponent,
    AboutUsComponent,
    FoodwidgetComponent,
    LoginpageComponent
    FoodsearchComponent,
    DisplayFoodNutritionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
