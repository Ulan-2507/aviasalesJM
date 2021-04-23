import React, {useEffect} from "react";
import "./tickets.scss";
import { v4 as uuidv4 } from "uuid";

import {useTypedSelector} from "../../hooks/useTypedSelelctor";
import {useActions} from "../../hooks/useActions";

import Ticket from "./ticket";


const Tickets: React.FC = () => {

  const {id, tickets, loading, error} = useTypedSelector(state => state.tickets)
  const {fetchTicketsID, fetchTickets} = useActions()

  useEffect(() => {
    fetchTicketsID()
  }, []);
  useEffect(() => {
    if(id !== '') {
      fetchTickets(id)
      console.log(id)
    }
  }, [id]);

  
  
  const ticketsList: any[] = tickets.map(ticket => {
    return (
      <Ticket key={uuidv4()} {...ticket}/>
    )
  });
  return (
    <section className="tickets">
      <nav className="tickets__nav">
        <button className="tickets__link btn">Самый дешевый</button>
        <button className="tickets__link btn">Самый быстрый</button>
        <button className="tickets__link btn">Оптимальный</button>
      </nav>
      <ul className="tickets__list">
        {loading && <h1>Идет загрузка...</h1>}
        {error && <h1>{error}</h1>}
        {ticketsList}
      </ul>
      <button className="tickets__show-btn btn">Показать еще 5 билетов!</button>
    </section>
  );
}

export default Tickets;
