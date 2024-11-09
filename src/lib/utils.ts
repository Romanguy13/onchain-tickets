export function militaryTimeTo12Hour(time: string) {
  const [hours, minutes] = time.split(":");
  const suffix = parseInt(hours) >= 12 ? "PM" : "AM";
  const twelveHour = parseInt(hours) % 12 || 12;
  return `${twelveHour}:${minutes} ${suffix}`;
}