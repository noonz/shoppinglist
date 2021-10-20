import { v4 as uuid } from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        { id: uuid(), name: 'Lettuce'},
        { id: uuid(), name: 'Chicken'},
        { id: uuid(), name: 'Ranch'},
        { id: uuid(), name: 'Tomatoes'},
        { id: uuid(), name: 'Bacon'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}