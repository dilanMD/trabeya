import { Months } from "./MonthEnum";

export const getDateFormat = () => {
  let dateObj = new Date();
  let hours = dateObj.getHours();
  let amOrPm = hours < 12 ? "AM" : "PM";
  hours = hours < 13 ? hours : hours - 12;
  let minutes = dateObj.getMinutes();
  let date = dateObj.getDate();
  let month = dateObj.getMonth();
  month = `MONTH${month}`;
  month.toString();
  let year = dateObj.getFullYear();

  const dateformat = `${hours}:${minutes} ${amOrPm} Today ${date} ${Months.MONTH6}, ${year}`;
  return dateformat;
};
