import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { HeroFormComponent } from "./hero-form/hero-form.component";
// import { HomeComponent } from "./components/home/home.component";
// import { AddProductComponent } from "./components/add/add.component";

import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HeroFormComponent
    // HomeComponent,
    // AddProductComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
