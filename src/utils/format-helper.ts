import addMinutes from "date-fns/addMinutes";

export const time = (date: string, duration: number) => {
  const departureTime = new Date(date)
    .toLocaleTimeString("ru-RU")
    .substring(0, 5);
  const arrivalTime = addMinutes(new Date(date), duration)
    .toLocaleTimeString("ru-RU")
    .substring(0, 5);
  return `${departureTime} - ${arrivalTime}`;
};
export const durationTime = (duration: number) => {
  const hours = Math.floor(duration / 60);
  const min = duration - hours * 60;
  return `${hours}ч ${min}м`;
};
export const transition = (stops: string[]) => {
  const transitionCount = stops.length;
  let result = `${transitionCount} пересад`;
  if (transitionCount === 0 || transitionCount > 4) {
    return (result += "ок");
  }
  if (transitionCount === 1) {
    return (result += "ка");
  }
  return (result += "ки");
};
