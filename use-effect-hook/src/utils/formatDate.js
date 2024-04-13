export default function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "2-digit",
    month: "short",
    day: "2-digit",
  }).format(new Date(date));
}
