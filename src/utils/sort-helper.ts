import { FilterState } from "../types/filter";
import { TicketActionTypes, TicketData } from "../types/ticket";

const filterTickets = (filter: FilterState, tickets: TicketData[]) => {
  const transfer = (ticket: TicketData, count: number) => {
    const segments = ticket.segments.filter(
      (segment) => segment.stops.length === count
    );
    if (segments.length !== 0) {
      return { ...ticket, segments: segments };
    }
    return false;
  };
  switch (true) {
    case filter.threeTransfer:
      return tickets.filter((ticket) => transfer(ticket, 3) !== false);
    case filter.twoTransfer:
      return tickets.filter((ticket) => transfer(ticket, 2) !== false);
    case filter.oneTransfer:
      return tickets.filter((ticket) => transfer(ticket, 1) !== false);
    case filter.withoutTransfers:
      return tickets.filter((ticket) => transfer(ticket, 0) !== false);
    default:
      return tickets;
  }
};

const sortByPrice = (list: TicketData[]) => {
  return list.sort((a, b) => a.price - b.price);
};

const sortByDuration = (list: TicketData[]) => {
  return list.sort((a, b) => {
    const durationA = a.segments.reduce(
      (acc, { duration }) => acc + duration,
      0
    );
    const durationB = b.segments.reduce(
      (acc, { duration }) => acc + duration,
      0
    );
    return durationA - durationB;
  });
};

const sortCategory = (list: TicketData[], category: string) => {
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
) => {
  if (
    [
      filter.all,
      filter.oneTransfer,
      filter.threeTransfer,
      filter.twoTransfer,
      filter.withoutTransfers,
    ].filter((i: boolean) => i === true).length > 0
  ) {
    const filterList = filterTickets(filter, tickets);
    return sortCategory(filterList, category).slice(0, listLength);
  }
  return [];
};

export default sortList;
