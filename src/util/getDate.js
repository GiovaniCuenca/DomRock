export function getCurrentDate() {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = new Array();
  month[0] = 'Janeiro';
  month[1] = 'Fevereiro';
  month[2] = 'Março';
  month[3] = 'Abril';
  month[4] = 'Maio';
  month[5] = 'Junho';
  month[6] = 'Julho';
  month[7] = 'Agosto';
  month[8] = 'Setembro';
  month[9] = 'Outubro';
  month[10] = 'Novembro';
  month[11] = 'Dezembro';
  const m = month[newDate.getMonth()];
  const year = newDate.getFullYear();

  return `Campinas, ${date} de ${m} de ${year}`;
}
