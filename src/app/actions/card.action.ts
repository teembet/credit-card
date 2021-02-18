import { cardDetails } from '../models/card-details'
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'


// Section 2
export const ADD_CARD       = 'ADD_CARD'
export const REMOVE_CARD    = 'REMOVE_CARD'

// Section 3
export class AddCard implements Action {
    readonly type = ADD_CARD

    constructor(public payload: cardDetails) {}
}

export class RemoveCard implements Action {
    readonly type = REMOVE_CARD

    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddCard | RemoveCard
