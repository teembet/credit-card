import { cardDetails } from '../../models/card-details';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as CardActions from '../../actions/card.action';
import { AppState } from '../../app.state';
import { ToastrService } from 'ngx-toastr';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   @ViewChild("creditcard") creditcard:ElementRef;
model:string
number:string
issued:string
expiration:string
holder:string



 carddetails: Observable<cardDetails[]>;

  // Section 2
  constructor(private toastr: ToastrService,private store: Store<AppState>) {
 this.carddetails = store.select('carddetails')
  }


  ngOnInit() {
    console.log(this.carddetails)
  }

  flipcard(){
  const card=this.creditcard
  card.nativeElement.classList.contains('flipped')?card.nativeElement.classList.remove('flipped'):card.nativeElement.classList.add('flipped')
}
delCard(index) {

    this.store.dispatch(new CardActions.RemoveCard(index) )
    this.toastr.success("Card Removed Successfully")
  }
}
