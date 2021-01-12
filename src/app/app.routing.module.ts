import { Component, NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { AddProductComponent } from "./components/add/add.component";
import { Routes, RouterModule } from "@angular/router";

@NgModule({
  declarations: [HomeComponent, AddProductComponent],
  imports: [
    RouterModule.forRoot([
      { path: "home", component: HomeComponent },
      { path: "add-product", component: AddProductComponent },
      // { path: "**", redirectTo: "home" }.,
      { path: "", component: HomeComponent }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
