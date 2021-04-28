import React from "react";

type PropsType = {
  listLength: number;
  error: string | null;
  loading: boolean;
};
const Message: React.FC<PropsType> = ({ listLength, error, loading }) => {
  if (listLength === 0 && !error && !loading) {
    return <h1>Рейсов, подходящих под заданные фильтры, не найдено</h1>;
  }
  return null;
};

export default Message;
