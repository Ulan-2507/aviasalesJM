export interface SegmentTicket {
  // Код города (iata)
  origin: string;
  // Код города (iata)
  destination: string;
  // Дата и время вылета туда
  date: string;
  // Массив кодов (iata) городов с пересадками
  stops: string[];
  // Общее время перелёта в минутах
  duration: number;
}

export interface TicketData {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: SegmentTicket[]
}

export interface TicketsState {
  category: string;
  listLength: number;
  tickets: TicketData[];
  stop: boolean;
  loading: boolean;
  error: null | string;
}

export enum TicketActionTypes {
  CHEAPEST = "CHEAPEST",
  FASTEST = "FASTEST",
  SHOW_MORE = "SHOW_MORE",
  RESET_LIST_LENGTH = "RESET_LIST_LENGTH",
  FETCH_TICKETS = "FETCH_TICKETS",
  FETCH_TICKETS_SUCCESS = "FETCH_TICKETS_SUCCESS",
  FETCH_TICKETS_ERROR = "FETCH_TICKETS_ERROR",
}
type CheapestTicketsAction = {
  type: TicketActionTypes.CHEAPEST;
}
type FastestTicketsAction = {
  type: TicketActionTypes.FASTEST;
}

type ShowTicketsAction = {
  type: TicketActionTypes.SHOW_MORE;
}
type ResetTicketsAction = {
  type: TicketActionTypes.RESET_LIST_LENGTH;
}
type FetchTicketsAction = {
  type: TicketActionTypes.FETCH_TICKETS;
}
type FetchTicketsSuccessAction = {
  type: TicketActionTypes.FETCH_TICKETS_SUCCESS;
  payload: { tickets: TicketData[]; stop: boolean };
}
type FetchTicketsErrorAction = {
  type: TicketActionTypes.FETCH_TICKETS_ERROR;
  payload: string;
}
export type TicketAction =
  | FetchTicketsAction
  | FetchTicketsSuccessAction
  | FetchTicketsErrorAction
  | ShowTicketsAction
  | ResetTicketsAction
  | CheapestTicketsAction
  | FastestTicketsAction;
