import { FilterState } from "../types/filter";
import { TicketActionTypes, TicketData } from "../types/ticket";
import { SegmentTicket } from '../types/ticket';

enum TransfersCount {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3
}
const filterTickets = (filter: FilterState, tickets: TicketData[]): TicketData[] => {
  const transfer = (ticket: TicketData, count: number): TicketData | boolean => {
    const segments: SegmentTicket[] = ticket.segments.filter(
      (segment): boolean => segment.stops.length === count
    ); 
    if (segments.length !== 0) {
      return ticket
    }
    return false;
  };
  switch (true) {
    case filter.threeTransfer:
      return tickets.filter((ticket): boolean => transfer(ticket, TransfersCount.THREE) !== false);
    case filter.twoTransfer:
      return tickets.filter((ticket): boolean => transfer(ticket, TransfersCount.TWO) !== false);
    case filter.oneTransfer:
      return tickets.filter((ticket): boolean => transfer(ticket, TransfersCount.ONE) !== false);
    case filter.withoutTransfers:
      return tickets.filter((ticket): boolean => transfer(ticket, TransfersCount.ZERO) !== false);
    default:
      return tickets;
  }
};

const sortByPrice = (list: TicketData[]): TicketData[] => {
  return list.sort((a: TicketData, b: TicketData): number => a.price - b.price);
};

const sortByDuration = (list: TicketData[]): TicketData[] => {
  return list.sort((a: TicketData, b: TicketData): number => {
    const durationA = a.segments.reduce(
      (acc: number, { duration }: SegmentTicket) => acc + duration,
      0
    );
    const durationB = b.segments.reduce(
      (acc: number, { duration }: SegmentTicket) => acc + duration,
      0
    );
    return durationA - durationB;
  });
};

const sortCategory = (list: TicketData[], category: string): TicketData[] => {
  switch (category) {
    case TicketActionTypes.CHEAPEST:
      return sortByPrice(list);

    case TicketActionTypes.FASTEST:
      return sortByDuration(list);

    default:
      return list;
  }
};

const sortList = (
  tickets: TicketData[],
  filter: FilterState,
  category: string,
  listLength: number
): TicketData[] => {
  if (
    [
      filter.all,
      filter.oneTransfer,
      filter.threeTransfer,
      filter.twoTransfer,
      filter.withoutTransfers,
    ].filter((i: boolean): boolean => i === true).length > 0
  ) {
    const filterList = filterTickets(filter, tickets);
    return sortCategory(filterList, category).slice(0, listLength);
  }
  return [];
};

export default sortList;
