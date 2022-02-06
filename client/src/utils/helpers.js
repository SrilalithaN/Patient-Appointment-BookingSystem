const { format } = require("date-fns");

export function FormatDate(date) {
  return format(new Date(date), "dd MMM yyyy H:mm aa");
}
