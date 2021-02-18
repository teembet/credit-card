import { Router } from '@angular/router';
import { cardDetails } from './../../models/card-details';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { CreditCardValidator } from "ngx-credit-cards";
import { Store } from "@ngrx/store";
import { AppState } from "../../app.state";
import * as CardActions from "../../actions/card.action";
import * as Payment from "payment";
import {CardServiceService} from '../../service/card-service.service'

Payment.fns.restrictNumeric = Payment.restrictNumeric;
Payment.fns.formatCardExpiry = Payment.formatCardExpiry;
Payment.fns.formatCardCVC = Payment.formatCardCVC;
import {
  FormBuilder,FormGroup,
  NgForm,
  Validators,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @ViewChild("creditcard") creditcard:ElementRef;
   @ViewChild('myForm') private myForm: NgForm;
  cardNo:string;
  cardHolder:string;
  expiry:string;
  cvv:string;
  amount:string;
  expiryMonth: any;
  expiryYear: any;
  submitted:boolean=false
cardInput: FormGroup;



  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private store: Store<AppState>,
   private cardService:CardServiceService,
   private router:Router
  ) {}

  ngOnInit() {
     this.cardInput = this.fb.group({
    cardNo: ["", [CreditCardValidator.validateCardNumber]],
    cardHolder: [
      "",
      Validators.compose([Validators.required, Validators.minLength(2)]),
    ],
    expiry: ["", [CreditCardValidator.validateCardExpiry]],
    cvv: ["", [CreditCardValidator.validateCardCvc]],
    amount: [
      "",
      [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.min(20)],
    ],
  });
  }

  get cardFormControl() {
    return this.cardInput.controls;
  }




async  addCard() {
    this.submitted=true;
  if (this.cardInput.valid) {

    this.router.navigate([''])
    this.store.dispatch(new CardActions.AddCard(this.cardInput.value));
    this.toastr.success("Card Added Successfully");
    this.cardInput.reset;

    // mock service
   const data=await this.cardService.addCard(this.cardInput)
   if(data){
// ...
  }else{
// ...
  }
  }
   }




flipcard(){
  const card=this.creditcard
  card.nativeElement.classList.contains('flipped')?card.nativeElement.classList.remove('flipped'):card.nativeElement.classList.add('flipped')
}

flipCardInput(value){
  if(value){
    this.creditcard.nativeElement.classList.add('flipped')
  }else{
    this.creditcard.nativeElement.classList.remove('flipped')
  }


}
}
