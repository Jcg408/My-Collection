import {FETCH_BOXES, NEW_BOX} from '../actions/types';

const initialState = {
    items: [],
    item: {}
}
export default function (state = initialState, action) {
    switch (action.type) {
       case FETCH_BOXES:
           
           return {
               ...state,
               items: action.payload
           }

        case NEW_BOX:
           return {
               ...state,
               iItem: action.payload
           }
        default:
            return state;
    }
}
