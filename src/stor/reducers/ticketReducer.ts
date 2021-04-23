import {TicketsState, TicketActionTypes, TicketAction} from '../../types/ticket';

const initialState: TicketsState = {
    id: '',
    tickets: [],
    stop: false,
    loading: false,
    error: null
}

export const ticketReducer = (
    state = initialState, 
    action: TicketAction
): TicketsState => {
    switch (action.type) {
        case TicketActionTypes.FETCH_TICKETS_ID: 
            return { 
                ...state, 
                id: action.payload.searchId
            };
        case TicketActionTypes.FETCH_TICKETS: 
            return { 
                ...state, 
                loading: true, 
                tickets: [] 
            };
        case TicketActionTypes.FETCH_TICKETS_SUCCESS: 
            return {
                ...state,
                tickets: action.payload.tickets,
                stop: action.payload.stop,
                loading: false, 
                error: null
            };
        case TicketActionTypes.FETCH_TICKETS_ERROR: 
            return {
                ...state,
                tickets: [],
                stop: false,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}