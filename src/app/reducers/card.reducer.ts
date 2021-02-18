

import { cardDetails } from '../models/card-details';
import { Action } from '@ngrx/store'

import * as CardActions from '../actions/card.action'


const initialState: cardDetails = {
   cardNo: '56773383892938',
    cardHolder: 'tim',
    expiry: '19/04',
    cvv:'455',
    amount:'$4000'
}



export function reducer(state: cardDetails[]=[initialState], action: CardActions.Actions) {


    switch(action.type) {
        case CardActions.ADD_CARD:
            return [...state, action.payload];

            case CardActions.REMOVE_CARD:
            state.splice(action.payload, 1)
            return state;

        default:
            return state;
    }
}
