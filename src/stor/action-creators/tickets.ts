import {TicketAction, TicketActionTypes} from "../../types/ticket";
import {Dispatch} from "redux";
import axios from "axios";

export const fetchTicketsID = () => {
    return async (dispatch: Dispatch<TicketAction>) => {
        try {
            const response = await axios.get(`https://front-test.beta.aviasales.ru/search`)
            dispatch({type: TicketActionTypes.FETCH_TICKETS_ID, payload: response.data})
        } catch (e) {
            dispatch({
                type: TicketActionTypes.FETCH_TICKETS_ERROR,
                payload: 'Произошла ошибка при получении ID попробуйте еще раз'
            })
        }
    }
}
export const fetchTickets = (id: string) => {
    return async (dispatch: Dispatch<TicketAction>) => {
        try {
            dispatch({type: TicketActionTypes.FETCH_TICKETS})
            const response = await axios.get(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`)
            dispatch({type: TicketActionTypes.FETCH_TICKETS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({
                type: TicketActionTypes.FETCH_TICKETS_ERROR,
                payload: 'Произошла ошибка при загрузке билетов'
            })
        }
    }
}