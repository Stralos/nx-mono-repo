import moment from 'moment';

export function date(date: Date): string {
  return moment(date).format('YYYY-MMMM-DDDD');
}

export function time(date: Date): string {
  console.log(a);
  return moment(date).format('HH:MM');
}
