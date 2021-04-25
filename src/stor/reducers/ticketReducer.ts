import {
  TicketsState,
  TicketActionTypes,
  TicketAction,
} from "../../types/ticket";
const LENGTH_STEP: number = 5;

const initialState: TicketsState = {
  category: TicketActionTypes.CHEAPEST,
  listLength: LENGTH_STEP,
  tickets: [],
  stop: false,
  loading: false,
  error: null,
};

export const ticketReducer = (
  state = initialState,
  action: TicketAction
): TicketsState => {
  switch (action.type) {
    case TicketActionTypes.CHEAPEST:
      return {
        ...state,
        category: TicketActionTypes.CHEAPEST,
      };
    case TicketActionTypes.FASTEST:
      return {
        ...state,
        category: TicketActionTypes.FASTEST,
      };
    case TicketActionTypes.SHOW_MORE:
      return {
        ...state,
        listLength: state.listLength + LENGTH_STEP,
      };
    case TicketActionTypes.RESET_LIST_LENGTH:
      return {
        ...state,
        listLength: LENGTH_STEP,
      };
    case TicketActionTypes.FETCH_TICKETS:
      return {
        ...state,
        listLength: LENGTH_STEP,
        loading: true,
        tickets: [],
      };
    case TicketActionTypes.FETCH_TICKETS_SUCCESS:
      return {
        ...state,
        tickets: action.payload.tickets,
        stop: action.payload.stop,
        loading: false,
        error: null,
      };
    case TicketActionTypes.FETCH_TICKETS_ERROR:
      return {
        ...state,
        tickets: [],
        stop: false,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
