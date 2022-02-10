const { format } = require("date-fns");

export function FormatDate(date) {
  return format(new Date(date), "do MMM yyyy H:mm");
}