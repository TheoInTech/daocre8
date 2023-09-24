/**
 * Determines if a given date string is from a previous date.
 *
 * @param {string} date - The date string in the format 'YYYY-MM-DD'.
 * @returns {boolean} True if the date is from the past, false otherwise.
 */
export function isPreviousDate(date: string) {
  const inputDate = new Date(date);
  const today = new Date();

  // Resetting the time component of both dates to 00:00:00
  inputDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  return inputDate < today;
}
