import { Component } from "@angular/core";

@Component({
  selector: "add-product",
  templateUrl: "add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddProductComponent {
  log() {
    console.log("hello from add-product");
  }
}
