// Helper function, takes a Date object and returns a human readable string
// showing date, month, year and time accurate to the millisecond
export const dateToHumanReadable = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3, // milliseconds
  };

  // Pass "undefined" to force the default local to be used for formatting
  return date.toLocaleString(undefined, options);
};
