export function formatDateToDDMMYYYY(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

export function parseDateStringToTime(dateString) {
  const date = new Date(dateString);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const hoursFormatted = String(hours).padStart(2, "0");
  const minutesFormatted = String(minutes).padStart(2, "0");

  const ampm = hours >= 12 ? " PM" : " AM";
  const formattedTime = `${hoursFormatted}:${minutesFormatted}${ampm}`;

  return formattedTime;
}

export function formatEndDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate() + 1).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

export function formatStartDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}
