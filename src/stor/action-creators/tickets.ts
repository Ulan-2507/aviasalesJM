import { TicketAction, TicketActionTypes } from "../../types/ticket";
// import { Dispatch } from "redux";
// import axios from "axios";


// export const fetchTickets = () => {

//     return async (dispatch: Dispatch<TicketAction>) => {
//       try {
//         const responseID = await axios.get(
//           `https://front-test.beta.aviasales.ru/search`
//         );
//         const id = responseID.data.searchId;
//         dispatch({ type: TicketActionTypes.FETCH_TICKETS });
//         const response = await axios.get(
//           `https://front-test.beta.aviasales.ru/tickets?searchId=${id}`
//         );
//         dispatch({
//           type: TicketActionTypes.FETCH_TICKETS_SUCCESS,
//           payload: response.data,
//         });
//       } catch (e) {
//         dispatch({
//           type: TicketActionTypes.FETCH_TICKETS_ERROR,
//           payload:
//             "Произошла ошибка при загрузке билетов попробуйте перезагрузить страницу",
//         });
//       }
//     };

// };

export const showMore = (): TicketAction => ({
  type: TicketActionTypes.SHOW_MORE,
});
export const resetListLength = (): TicketAction => ({
  type: TicketActionTypes.RESET_LIST_LENGTH,
});
export const cheapest = (): TicketAction => ({
  type: TicketActionTypes.CHEAPEST,
});
export const fastest = (): TicketAction => ({
  type: TicketActionTypes.FASTEST,
});
