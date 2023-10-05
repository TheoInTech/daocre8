export const hasDateTimeStarted = (dateTimeString: string): boolean => {
  const dateTime = new Date(dateTimeString);
  const now = new Date();
  return dateTime < now;
};
