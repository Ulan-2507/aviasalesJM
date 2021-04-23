export interface TicketData {
    // Цена в рублях
    price: number
    // Код авиакомпании (iata)
    carrier: string
    // Массив перелётов.
    // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
    segments: [
      {
        // Код города (iata)
        origin: string
        // Код города (iata)
        destination: string
        // Дата и время вылета туда
        date: string
        // Массив кодов (iata) городов с пересадками
        stops: string[]
        // Общее время перелёта в минутах
        duration: number
      },
      {
        // Код города (iata)
        origin: string
        // Код города (iata)
        destination: string
        // Дата и время вылета обратно
        date: string
        // Массив кодов (iata) городов с пересадками
        stops: string[]
        // Общее время перелёта в минутах
        duration: number
      }
    ]
  }

export interface TicketsState {
    id: string;
    tickets: TicketData[];
    stop: boolean;
    loading: boolean;
    error: null | string;
}

export enum TicketActionTypes {
    FETCH_TICKETS_ID = 'FETCH_TICKETS_ID',
    FETCH_TICKETS = 'FETCH_TICKETS',
    FETCH_TICKETS_SUCCESS = 'FETCH_TICKETS_SUCCESS',
    FETCH_TICKETS_ERROR = 'FETCH_TICKETS_ERROR',
}
interface FetchTicketsIdAction {
    type: TicketActionTypes.FETCH_TICKETS_ID;
    payload: {searchId: string}
}
interface FetchTicketsAction {
    type: TicketActionTypes.FETCH_TICKETS;
}
interface FetchTicketsSuccessAction {
    type: TicketActionTypes.FETCH_TICKETS_SUCCESS;
    payload: {tickets: TicketData[], stop: boolean}
}
interface FetchTicketsErrorAction {
    type: TicketActionTypes.FETCH_TICKETS_ERROR;
    payload: string;
}
export type TicketAction = FetchTicketsAction | FetchTicketsSuccessAction | FetchTicketsErrorAction | FetchTicketsIdAction