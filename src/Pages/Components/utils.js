export function getCurrentDate(separator = "") {
  // let newDate = new Date();
  let date = "25"
  let month = "12";
  let year = "2020";

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}
