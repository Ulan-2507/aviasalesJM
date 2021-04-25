import React from "react";
import "./ticket.scss";
import { TicketData } from "../../../types/ticket";

import Flights from "./flights/flights";
type IProps = {
  data: TicketData;
};

const Ticket: React.FC<IProps> = ({ data }) => {
  const { price, carrier, segments } = data;
  return (
    <li className="ticket">
      <div className="ticket__header">
        <span className="ticket__price">{price} P</span>
        <span className="ticket__logo">
          <img src={`http://pics.avs.io/99/36/${carrier}.png`} alt="avialogo" />
        </span>
      </div>
      <Flights segments={segments} />
    </li>
  );
};

export default Ticket;
