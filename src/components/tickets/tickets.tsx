import React, { useEffect } from "react";
import "./tickets.scss";
import { v4 as uuidv4 } from "uuid";
import cn from "classnames";

import { useTypedSelector } from "../../hooks/useTypedSelelctor";
import { useActions } from "../../hooks/useActions";
import {  TicketActionTypes, TicketData } from "../../types/ticket";
import sortList from "../../utils/sort-helper";

import Ticket from "./ticket";
import Message from "../message";
import Spinner from "../spinner";

import store from "../../stor";
import { getData } from "../../stor/action-creators/tickets";

const Tickets: React.FC = () => {
  const filter = useTypedSelector((state) => ({ ...state.filter }));
  const { category, listLength, tickets, loading, error } = useTypedSelector(
    (state) => state.tickets
  );
  const { cheapest, fastest, showMore } = useActions();

  useEffect(() => {
    getData(store.dispatch);
  }, []);

  const list: TicketData[] = sortList(tickets, filter, category, listLength);
  const sortedTickets = list.map((ticket) => {
    return <Ticket key={uuidv4()} data={ticket} />;
  });

  return (
    <section className="tickets">
      <nav className="tickets__nav">
        <button
          onClick={() => cheapest()}
          className={cn("tickets__link btn", {
            "tickets__link--selected": category === TicketActionTypes.CHEAPEST,
          })}
        >
          Самый дешевый
        </button>
        <button
          onClick={() => fastest()}
          className={cn("tickets__link btn", {
            "tickets__link--selected": category === TicketActionTypes.FASTEST,
          })}
        >
          Самый быстрый
        </button>
      </nav>
      <ul className="tickets__list">
        <Message listLength={list.length} error={error} loading={loading} />
        <Spinner loading={loading} />
        {error && <h1>{error}</h1>}
        {list.length !== 0 && sortedTickets}
      </ul>
      <button
        onClick={() => showMore()}
        type="button"
        className="tickets__show-btn btn"
        hidden={list.length === 0}
      >
        Показать еще 5 билетов!
      </button>
    </section>
  );
};

export default Tickets;
