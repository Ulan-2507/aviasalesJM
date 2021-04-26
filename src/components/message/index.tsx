import React from "react";

type IProps = {
  listLength: number;
  error: string | null;
  loading: boolean;
};
const Message = ({ listLength, error, loading }: IProps) => {
  if (listLength === 0 && !error && !loading) {
    return <h1>Рейсов, подходящих под заданные фильтры, не найдено</h1>;
  }
  return null;
};

export default Message;
