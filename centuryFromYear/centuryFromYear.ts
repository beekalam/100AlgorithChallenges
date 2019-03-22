function centuryFromYear(year: number): number {
  let c = Math.floor(year / 100);
  return year % 100 == 0 ? c : c + 1;
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));
