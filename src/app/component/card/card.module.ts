import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgXCreditCardsModule } from "ngx-credit-cards";
import { appRoutingModule } from "../../app.routing";
import { CardComponent } from "./card.component";

@NgModule({
  declarations: [CardComponent],
  imports: [
    BrowserModule,
    appRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgXCreditCardsModule,
  ],
  providers: [],
  bootstrap: [CardComponent],
})
export class CardModule {}
